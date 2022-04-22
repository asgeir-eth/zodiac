import { ethers, Contract, Signer } from "ethers";
import { ABI } from "hardhat-deploy/dist/types";
import { KnownContracts } from "./types";
export declare const deployAndSetUpModule: (contractName: KnownContracts, args: {
    types: Array<string>;
    values: Array<any>;
}, provider: ethers.providers.JsonRpcProvider, chainId: number, saltNonce: string) => {
    transaction: {
        data: string;
        to: string;
        value: ethers.BigNumber;
    };
    expectedModuleAddress: string;
};
export declare const deployAndSetUpUnknownModule: (masterCopyAddress: string, abi: ABI, setupArgs: {
    types: Array<string>;
    values: Array<any>;
}, provider: ethers.providers.JsonRpcProvider, chainId: number, saltNonce: string) => {
    transaction: {
        data: string;
        to: string;
        value: ethers.BigNumber;
    };
    expectedModuleAddress: string;
};
export declare const calculateProxyAddress: (factory: Contract, masterCopy: string, initData: string, saltNonce: string) => string;
export declare const getModuleInstance: (moduleName: KnownContracts, address: string, provider: ethers.providers.JsonRpcProvider | Signer) => ethers.Contract;
export declare const getFactoryAndMasterCopy: (moduleName: KnownContracts, provider: ethers.providers.JsonRpcProvider, chainId: number) => {
    factory: ethers.Contract;
    module: ethers.Contract;
};
