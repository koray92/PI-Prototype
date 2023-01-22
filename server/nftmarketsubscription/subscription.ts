import { PrismaClient } from '@prisma/client'


import { connectDB } from "./db_connections";
import Web3 from 'web3'
import CONTRACT_ABIS from "./abis/contracts-abis";
import dotenv from "dotenv";
dotenv.config();
const prisma = new PrismaClient()
interface soldEvent {
    transactionHash: string,
    returnValues: {
        owner: string,
        receipent: string,
        id: number,
        price: number,
        category: string
    },
    raw: {
        data: string
    }
}

interface listEvent {
    transactionHash: string,
    returnValues: {
        owner: string,
        id: number,
        price: number,
        category: string

    },
    raw: {
        data: string
    }
}

interface auctionListEvent {
    transactionHash: string,
    returnValues: {
        owner: string,
        id: number,
        price: number,
        category: string

    },
    raw: {
        data: string
    }
}

interface Transaction {
    from: string,
    to: string,
    nftId: number,
    price: number,
    transactionType: string,
    transactionHash: string,
    category: number
}

const Categories = [
    "Handgun",
    "Rocket-Launcher",
    "Knife",
]

const httpProvider: string | undefined = process.env.HTTP_RPC;
const wsProvider: string | undefined = process.env.WEBSOCKET_RPC;
const web3: Web3 = new Web3(new Web3.providers.HttpProvider(httpProvider as unknown as string));
const WS_WEB3: Web3 = new Web3(new Web3.providers.WebsocketProvider(wsProvider as unknown as string));
const nftMarketplace: string = web3.utils.toChecksumAddress(process.env.NFT_MARKETPLACE_ADDRESS as unknown as string);

const main = async () => {
    async function subscription() {

        const marketplace: any = new WS_WEB3.eth.Contract(CONTRACT_ABIS.Marketplace, nftMarketplace);
        const buyEvents = await marketplace.events.Sold(() => {
        })
            .on('data', async (buyEvent: soldEvent) => {
                const { value, hash } = await web3.eth.getTransaction(buyEvent.transactionHash)
                const price: string = web3.utils.fromWei(value, "ether")
                console.log(`Sold ${buyEvent.returnValues.id} id 
                ${Categories[+buyEvent.returnValues.category]} nft for 
                ${price} 
                by ${buyEvent.returnValues.receipent} 
                to ${buyEvent.returnValues.receipent}`)
                const data: Transaction = {
                    from: web3.utils.toChecksumAddress(buyEvent.returnValues.owner),
                    to: web3.utils.toChecksumAddress(buyEvent.returnValues.receipent),
                    nftId: +buyEvent.returnValues.id,
                    price: +price,
                    transactionType: "Sale",
                    transactionHash: hash,
                    category: +buyEvent.returnValues.category+1}
                const query = await prisma.inventory.deleteMany({
                    where: {
                        wallet_id: web3.utils.toChecksumAddress(buyEvent.returnValues.owner),
                        item_id : +buyEvent.returnValues.category+1,
                    }
                });
                const connection: void = await (await connectDB(data));
            })
        const listingEvent = await marketplace.events.Listed(() => {
        })
            .on('data', async (listed: listEvent) => {
                const { value, hash } = await web3.eth.getTransaction(listed.transactionHash)
                const price: string = web3.utils.fromWei(listed.returnValues.price.toString(), "ether")
                const data: Transaction = {
                    from: web3.utils.toChecksumAddress(listed.returnValues.owner),
                    to: web3.utils.toChecksumAddress(nftMarketplace),
                    nftId: +listed.returnValues.id,
                    price: +price,
                    transactionType: "Listing",
                    transactionHash: hash,
                    category: +listed.returnValues.category+1}
                console.log(`Listed ${listed.returnValues.id} id 
                ${Categories[+listed.returnValues.category]} nft 
                for ${listed.returnValues.price} 
                by ${listed.returnValues.owner}`)
                const connection: void = await (await connectDB(data));
            })
        const auctionlistingEvent = await marketplace.events.Auction(() => {
        })
            .on('data', async (Auctionlisted: auctionListEvent) => {
                const { value, hash } = await web3.eth.getTransaction(Auctionlisted.transactionHash)
                const price: string = web3.utils.fromWei(Auctionlisted.returnValues.price.toString(), "ether")
                const data: Transaction = {
                    from: web3.utils.toChecksumAddress(Auctionlisted.returnValues.owner),
                    to: web3.utils.toChecksumAddress(nftMarketplace),
                    nftId: +Auctionlisted.returnValues.id,
                    price: +price,
                    transactionType: "Listing",
                    transactionHash: hash,
                    category: +Auctionlisted.returnValues.category+1}
                console.log(`Listed ${Auctionlisted.returnValues.id} id 
                ${Categories[+Auctionlisted.returnValues.category]} nft 
                for ${Auctionlisted.returnValues.price} 
                by ${Auctionlisted.returnValues.owner}`)
                const connection: void = await (await connectDB(data));
            })
    }
    await subscription();
}
main();

