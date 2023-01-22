import bcryptjs from "bcryptjs";
import { prisma } from "../../../../server/db/client";
import product from "../../product";

export default async function handler(req, res) {
  const { nft_id } = req.body;
  console.log(req.body)
  const post = await prisma.auctions.findMany({
    where: {
      nft_id,
    },
  });
  console.log(post);
  res.json(post);
}
