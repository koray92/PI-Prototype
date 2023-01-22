"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_connections_1 = require("./db_connections");
var web3_1 = __importDefault(require("web3"));
var contracts_abis_1 = __importDefault(require("./abis/contracts-abis"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Categories = [
    "Grenade Launcher",
    "Handgun",
    "Sniper",
    "Assoult-Riffle"
];
var httpProvider = process.env.HTTP_RPC;
var wsProvider = process.env.WEBSOCKET_RPC;
var web3 = new web3_1.default(new web3_1.default.providers.HttpProvider(httpProvider));
var WS_WEB3 = new web3_1.default(new web3_1.default.providers.WebsocketProvider(wsProvider));
var nftMarketplace = web3.utils.toChecksumAddress(process.env.NFT_MARKETPLACE_ADDRESS);
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    function subscription() {
        return __awaiter(this, void 0, void 0, function () {
            var marketplace, buyEvents, listingEvent;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        marketplace = new WS_WEB3.eth.Contract(contracts_abis_1.default.Marketplace, nftMarketplace);
                        return [4 /*yield*/, marketplace.events.Sold(function () {
                            })
                                .on('data', function (buyEvent) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, value, hash, price, data, connection;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, web3.eth.getTransaction(buyEvent.transactionHash)];
                                        case 1:
                                            _a = _b.sent(), value = _a.value, hash = _a.hash;
                                            price = web3.utils.fromWei(value, "ether");
                                            console.log("Sold ".concat(buyEvent.returnValues.id, " id \n                ").concat(Categories[+buyEvent.returnValues.category], " nft for \n                ").concat(price, " \n                by ").concat(buyEvent.returnValues.receipent, " \n                to ").concat(buyEvent.returnValues.receipent));
                                            data = {
                                                from: web3.utils.toChecksumAddress(buyEvent.returnValues.owner),
                                                to: web3.utils.toChecksumAddress(buyEvent.returnValues.receipent),
                                                nftId: +buyEvent.returnValues.id,
                                                price: +price,
                                                transactionType: "Sale",
                                                transactionHash: hash,
                                                category: +buyEvent.returnValues.category
                                            };
                                            return [4 /*yield*/, (0, db_connections_1.connectDB)(data)];
                                        case 2: return [4 /*yield*/, (_b.sent())];
                                        case 3:
                                            connection = _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        buyEvents = _a.sent();
                        return [4 /*yield*/, marketplace.events.Listed(function () {
                            })
                                .on('data', function (listed) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, value, hash, price, data, connection;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, web3.eth.getTransaction(listed.transactionHash)];
                                        case 1:
                                            _a = _b.sent(), value = _a.value, hash = _a.hash;
                                            price = web3.utils.toWei(listed.returnValues.price.toString(), "ether");
                                            data = {
                                                from: web3.utils.toChecksumAddress(listed.returnValues.owner),
                                                to: web3.utils.toChecksumAddress(nftMarketplace),
                                                nftId: +listed.returnValues.id,
                                                price: +price,
                                                transactionType: "Listing",
                                                transactionHash: hash,
                                                category: +listed.returnValues.category
                                            };
                                            console.log("Listed ".concat(listed.returnValues.id, " id \n                ").concat(Categories[+listed.returnValues.category], " nft \n                for ").concat(listed.returnValues.price, " \n                by ").concat(listed.returnValues.owner));
                                            return [4 /*yield*/, (0, db_connections_1.connectDB)(data)];
                                        case 2: return [4 /*yield*/, (_b.sent())];
                                        case 3:
                                            connection = _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        listingEvent = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, subscription()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
main();
//# sourceMappingURL=subscription.js.map