import { prisma } from "../../../../server/db/client";
import product from "../../product";

export default async function handler(req,res) {
  const {user_id} = req.body;
  const inventory = await prisma.inventory.findMany(
    {where: {
      user_id: 26,
    },
    include:{
      item:true,
    }
    });
  res.json(inventory);
}
