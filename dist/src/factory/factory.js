"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFactoryAndMasterCopy = exports.getModuleInstance = exports.calculateProxyAddress = exports.deployAndSetUpUnknownModule = exports.deployAndSetUpModule = void 0;
const ethers_1 = require("ethers");
const constants_1 = require("./constants");
const deployAndSetUpModule = (contractName, args, provider, chainId, saltNonce) => {
    const { factory, module } = exports.getFactoryAndMasterCopy(contractName, provider, chainId);
    return getDeployAndSetupTx(factory, module, args, saltNonce);
};
exports.deployAndSetUpModule = deployAndSetUpModule;
const deployAndSetUpUnknownModule = (masterCopyAddress, abi, setupArgs, provider, chainId, saltNonce) => {
    const chainContracts = constants_1.CONTRACT_ADDRESSES[chainId];
    const factoryAddress = chainContracts.factory;
    const factory = new ethers_1.Contract(factoryAddress, constants_1.CONTRACT_ABIS.factory, provider);
    const module = new ethers_1.Contract(masterCopyAddress, abi, provider);
    return getDeployAndSetupTx(factory, module, setupArgs, saltNonce);
};
exports.deployAndSetUpUnknownModule = deployAndSetUpUnknownModule;
const getDeployAndSetupTx = (factory, module, args, saltNonce) => {
    const encodedInitParams = ethers_1.ethers.utils.defaultAbiCoder.encode(args.types, args.values);
    const moduleSetupData = module.interface.encodeFunctionData("setUp", [
        encodedInitParams,
    ]);
    const expectedModuleAddress = exports.calculateProxyAddress(factory, module.address, moduleSetupData, saltNonce);
    const deployData = factory.interface.encodeFunctionData("deployModule", [
        module.address,
        moduleSetupData,
        saltNonce,
    ]);
    const transaction = {
        data: deployData,
        to: factory.address,
        value: ethers_1.BigNumber.from(0),
    };
    return {
        transaction,
        expectedModuleAddress,
    };
};
const calculateProxyAddress = (factory, masterCopy, initData, saltNonce) => {
    const masterCopyAddress = masterCopy.toLowerCase().replace(/^0x/, "");
    const byteCode = "0x602d8060093d393df3363d3d373d3d3d363d73" +
        masterCopyAddress +
        "5af43d82803e903d91602b57fd5bf3";
    const salt = ethers_1.ethers.utils.solidityKeccak256(["bytes32", "uint256"], [ethers_1.ethers.utils.solidityKeccak256(["bytes"], [initData]), saltNonce]);
    return ethers_1.ethers.utils.getCreate2Address(factory.address, salt, ethers_1.ethers.utils.keccak256(byteCode));
};
exports.calculateProxyAddress = calculateProxyAddress;
const getModuleInstance = (moduleName, address, provider) => {
    const moduleIsNotSupported = !Object.keys(constants_1.CONTRACT_ABIS).includes(moduleName);
    if (moduleIsNotSupported) {
        throw new Error("Module " + moduleName + " not supported");
    }
    return new ethers_1.Contract(address, constants_1.CONTRACT_ABIS[moduleName], provider);
};
exports.getModuleInstance = getModuleInstance;
const getFactoryAndMasterCopy = (moduleName, provider, chainId) => {
    const chainContracts = constants_1.CONTRACT_ADDRESSES[chainId];
    const masterCopyAddress = chainContracts[moduleName];
    const factoryAddress = chainContracts.factory;
    const module = exports.getModuleInstance(moduleName, masterCopyAddress, provider);
    const factory = new ethers_1.Contract(factoryAddress, constants_1.CONTRACT_ABIS.factory, provider);
    return {
        factory,
        module,
    };
};
exports.getFactoryAndMasterCopy = getFactoryAndMasterCopy;
