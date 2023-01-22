// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { prisma } from "../../../../../server/db/client";
// eslint-disable-next-line consistent-return
export default async function handler(req, res) {
    const { userMail } = req.body;
    const { slug } = req.query;
    const JWT_SECRET =
        "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]qou89y25";
    // res.end(`Post: ${slug.join(", ")}`);
    const User = await prisma.users.findUnique({
        where: {
            user_mail: userMail,
        },
    });
    if (!User) {
        return res.json({ status: "User Not Exists!!" });
    }

    const { email } = req.body;
    try {
        const secret = JWT_SECRET + User.user_password;
        const token = jwt.sign({ email: User.user_email, id: User.user_userid }, secret, {
            expiresIn: "15m",
        });
        const link = `http://localhost:3000/changepassword/${User.user_userid}/${token}`;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "dilekcesite@gmail.com",
                pass: "covcqjedfzkgqyrf",
            },
        });
        const mailOptions = {
            from: "dilekcesite@gmail.com",
            to: "muratyvz13@gmail.com",
            subject: "Password Reset",
            text: link,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`Email sent: ${info.response}`);
            }
        });
        console.log(link);
        // eslint-disable-next-line no-empty
    } catch (error) {
        return res.status(502).json({ message: "db error" });
    }
}
