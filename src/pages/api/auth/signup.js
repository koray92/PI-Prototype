import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { prisma } from "../../../../server/db/client";

function titleFromCode(code) {
    return code.trim().split("\n")[0].replace("// ", "");
}
export default async function handler(req, res) {
    const { method } = req;
    const JWT_SECRET =
        "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]az";

    // password:bcryptjs.hashSync(password),
    switch (method) {
        case "POST":
            // eslint-disable-next-line no-case-declarations
            const { user_name, user_password, user_mail, walletaddress } =
                req.body;
            // eslint-disable-next-line no-case-declarations
            const existingUserMail = await prisma.users.findUnique({
                where: {
                    user_mail,
                },
            });
            if (existingUserMail) {
                res.status(422).json({
                    message: "Email address exists already!",
                });
                return;
            }
            const existingUserName = await prisma.users.findUnique({
                where: {
                    user_name,
                },
            });
            if (existingUserName) {
                res.status(422).json({ message: "Username exists already!" });
                return;
            }
            /*
            if (wallet_id == "") {
                res.status(422).json({
                    message: "Please verify wallet address!",
                });
                return;
            }
            */
            /*
            const existingWalletAddress = await prisma.user_wallet.findUnique({
                where: {
                    wallet_id:walletaddress,
                },
            });
            if (existingWalletAddress) {
                res.status(422).json({
                    message: "Walletaddress exists already!",
                });
                return;
            }
            */

            console.log(bcryptjs.hashSync(user_password));
            const post = await prisma.users.create({
                data: {
                    user_name,
                    user_mail,
                    user_password: bcryptjs.hashSync(user_password),
                },
            });
            const createduser = await prisma.users.findUnique({
                where: {
                    user_name,
                },
            });
            const walletobject = await prisma.user_wallet.create({
                data: {
                    wallet_id: walletaddress,
                    eth_amount: 2,
                    user_id: createduser.user_id,
                },
            });
            try {
                const User = await prisma.users.findUnique({
                    where: {
                        user_mail,
                    },
                });
                const secret = JWT_SECRET + User.user_password;
                const token = jwt.sign(
                    { email: User.user_mail, id: User.user_id },
                    secret,
                    {
                        expiresIn: "5m",
                    }
                );

                const link = `http://localhost:3000/check-activation/${User.user_id}/${token}`;
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: "dilekcesite@gmail.com",
                        pass: "covcqjedfzkgqyrf",
                    },
                });
                const mailOptions = {
                    from: "dilekcesite@gmail.com",
                    to: User.user_mail,
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
            res.status(201).json(post);
        default:
            break;
    }
}
