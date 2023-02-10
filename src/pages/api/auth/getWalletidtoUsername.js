import bcryptjs from "bcryptjs";
import { prisma } from "../../../../server/db/client";
import product from "../../product";

export default async function handler(req, res) {
  const { wallet_id } = req.body;
  console.log("req.bodyq");
  console.log(req.body);
  console.log("req.body");


  return;
}
