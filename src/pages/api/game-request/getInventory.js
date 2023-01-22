import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { prisma } from "../../../../server/db/client";

function titleFromCode(code) {
    return code.trim().split("\n")[0].replace("// ", "");
}
export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case "POST":
            // eslint-disable-next-line no-case-declarations
            const { user_id } = req.body;
            // eslint-disable-next-line no-case-declarations
            console.log(`${user_id}AA`);
            const items = await prisma.item.findMany();
            const inventory = await prisma.inventory.findMany({
                where: {
                    user_id,
                },
            });
            console.log(inventory);
            const weapons = "";
            let weaponsnames="";
            const data = await Promise.all(
                inventory.map(async (product) => {
                    const itemss = await prisma.item.findMany({
                        where: {
                            item_id: product.item_id,
                        },
                    });
                    console.log(itemss[0].item_name+"--");
                    weaponsnames+=itemss[0].item_name+"-";
                })
            );
            weaponsnames=weaponsnames.slice(0, -1);
            console.log("--"+weaponsnames+"--");
            res.send( weaponsnames);


        default:
            break;
    }
}
