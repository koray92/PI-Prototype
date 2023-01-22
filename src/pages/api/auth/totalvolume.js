import { prisma } from "../../../../server/db/client";
import product from "../../product";

export default async function handler(req, res) {
    const { user_wallet_id } = req.body;
    const userTotalBuy = await prisma.transactions.groupBy({
        by: ["buyer_wallet_id"],
        _sum: {
            eth_amount: true,
        },
        where: {
            buyer_wallet_id: user_wallet_id,
        },
    });

    const userTotalSale = await prisma.transactions.groupBy({
        by: ["seller_wallet_id"],
        _sum: {
            eth_amount: true,
        },
        where: {
            seller_wallet_id: user_wallet_id,
        },
    });
    if (userTotalBuy[0] && userTotalSale[0]) {
        res.send(
            userTotalBuy[0]?._sum.eth_amount + userTotalSale[0]?._sum.eth_amount
        );
    } else if (userTotalBuy[0]) {
        res.send(userTotalBuy[0]?._sum.eth_amount);
    } else if (userTotalSale[0]) {
        res.send(userTotalSale[0]?._sum.eth_amount);
    } else {
        res.send(0);
    }
}
