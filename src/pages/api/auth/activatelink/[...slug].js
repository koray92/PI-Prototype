// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// eslint-disable-next-line consistent-return
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import { prisma } from "../../../../../server/db/client";
import { useRouter } from "next/router";
export default async function handler(req, res) {
    const { userMail } = req.body;
    const { slug } = req.query;
    const { password } = req.body;

    const JWT_SECRET =
        "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]az";
    if (req.method == "GET") {
        const User = await prisma.users.findUnique({
            where: {
                user_id: parseInt(slug[0], 10),
            },
        });
        const secret = JWT_SECRET + User.user_password;
        const token = slug[1];

        console.log(`${token}-----------${secret}`);
        try {
            const verify = jwt.verify(token, secret);
            res.send("Doğrulandı");

            const confirmMail = await prisma.users.update({
                where: { user_id: parseInt(slug[0], 10) },
                data: { user_activation: true },
            });
        } catch (error) {
            //  res.send("error");
            res.send("Doğrulanmadı");
        }
    }
}
