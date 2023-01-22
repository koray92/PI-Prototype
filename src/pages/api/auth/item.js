import { prisma } from "../../../../server/db/client";
import product from "../../product";

export default async function handler(req, res) {
    const item = await prisma.item.findMany();
    res.json(item);
}
