import { prisma } from "../../../../server/db/client";
import product from "../../product";

export default async function handler(req, res) {
    const transactions = await prisma.transactions.findMany({include: {
            users: true,
        }});

    res.json(transactions);
}
