import bcryptjs from "bcryptjs";
import { prisma } from "../../../../server/db/client";
import product from "../../product";

export default async function handler(req, res) {
  const { wallet_id,bid_date } = req.body;
  console.log(req.body)
  const post = await prisma.auctions.findMany({
    where: {
      wallet_id,
      bid_date
    },
  });

  return
}
