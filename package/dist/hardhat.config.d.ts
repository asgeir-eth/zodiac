import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-deploy";
import "./src/factory/singleton-deployment";
declare const _default: {
    paths: {
        artifacts: string;
        cache: string;
        deploy: string;
        sources: string;
    };
    solidity: {
        compilers: {
            version: string;
        }[];
    };
    networks: {
        mainnet: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
        };
        rinkeby: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
        };
        ropsten: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
        };
        xdai: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
        };
        matic: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
        };
        bsc: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
        };
    };
    namedAccounts: {
        deployer: number;
    };
    mocha: {
        timeout: number;
    };
    etherscan: {
        apiKey: string | undefined;
    };
};
export default _default;
