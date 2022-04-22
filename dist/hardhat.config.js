"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require("hardhat-deploy");
const dotenv_1 = __importDefault(require("dotenv"));
const yargs_1 = __importDefault(require("yargs"));
const argv = yargs_1.default
    .option("network", {
    type: "string",
    default: "hardhat",
})
    .help(false)
    .version(false).argv;
// Load environment variables.
dotenv_1.default.config();
const { INFURA_KEY, MNEMONIC, ETHERSCAN_API_KEY, PK } = process.env;
require("./src/factory/singleton-deployment");
const DEFAULT_MNEMONIC = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
const sharedNetworkConfig = {};
if (PK) {
    sharedNetworkConfig.accounts = [PK];
}
else {
    sharedNetworkConfig.accounts = {
        mnemonic: MNEMONIC || DEFAULT_MNEMONIC,
    };
}
if (["rinkeby", "mainnet"].includes(argv.network) && INFURA_KEY === undefined) {
    throw new Error(`Could not find Infura key in env, unable to connect to network ${argv.network}`);
}
exports.default = {
    paths: {
        artifacts: "build/artifacts",
        cache: "build/cache",
        deploy: "src/deploy",
        sources: "contracts",
    },
    solidity: {
        compilers: [{ version: "0.8.6" }, { version: "0.6.12" }],
    },
    networks: {
        mainnet: {
            ...sharedNetworkConfig,
            url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
        },
        rinkeby: {
            ...sharedNetworkConfig,
            url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
        },
        ropsten: {
            ...sharedNetworkConfig,
            url: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
        },
        xdai: {
            ...sharedNetworkConfig,
            url: "https://xdai.poanetwork.dev",
        },
        matic: {
            ...sharedNetworkConfig,
            url: "https://rpc-mainnet.maticvigil.com"
        },
        bsc: {
            ...sharedNetworkConfig,
            url: "https://bsc-dataseed.binance.org"
        }
    },
    namedAccounts: {
        deployer: 0,
    },
    mocha: {
        timeout: 2000000,
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
};
