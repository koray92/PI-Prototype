"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var erc721Abi_json_1 = __importDefault(require("./erc721Abi.json"));
var marketplaceAbi_json_1 = __importDefault(require("./marketplaceAbi.json"));
var CONTRACT_ABIS = {
    Erc721: erc721Abi_json_1.default,
    Marketplace: marketplaceAbi_json_1.default
};
exports.default = CONTRACT_ABIS;
//# sourceMappingURL=contracts-abis.js.map