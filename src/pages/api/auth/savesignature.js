import bcryptjs from "bcryptjs";
import { prisma } from "../../../../server/db/client";
import product from "../../product";
import Web3 from "web3";

export default async function handler(req, res) {

    const { owner, receiver, price, nft_id,startTime,endTime,signature} =
      req.body;
    console.log(req.body)
    const post = await prisma.auctions.create({
        data: {
            wallet_id:owner,
            receiver,
            price:parseFloat(price),
            nft_id,
            startTime,
            endTime,
            signature
        },
    });

 return
}
