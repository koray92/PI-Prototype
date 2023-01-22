import erc721Abi from './erc721Abi.json';
import marketplaceAbi from './marketplaceAbi.json';

interface IContractABIs {
    Erc721: any;
    Marketplace: any;
}

const CONTRACT_ABIS: IContractABIs = {
    Erc721: erc721Abi,
    Marketplace: marketplaceAbi
};

export default CONTRACT_ABIS;
