import { prisma } from "../../../../server/db/client";
import product from "../../product";

export default async function handler(req, res) {
  const { user_id } = req.body;
  const groupUsers = await prisma.transactions.groupBy({
    by: ['user_id'],
    _sum: {
      eth_amount: true,
    },
    where: {
      user_id:user_id,
    },
  })
  console.log(groupUsers[0]?._sum.eth_amount);
  res.send(groupUsers[0]?._sum.eth_amount);
}
