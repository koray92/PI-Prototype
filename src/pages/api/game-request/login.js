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
            const { user_password, user_mail } =
              req.body;
            // eslint-disable-next-line no-case-declarations


            const existingUserMail = await prisma.users.findUnique({
                where: {
                    user_mail,
                },
            });
            console.log(user_mail+user_password);
            if (existingUserMail == null) {
                res.status(422).json({
                    message: "Invalid mail adress.",
                });
                return;
            }
              console.log(bcryptjs.compareSync(
                user_password,
                existingUserMail.user_password
              ))
              if(bcryptjs.compareSync(
                user_password,
                existingUserMail.user_password
              ))
              {
                  res.send(existingUserMail.user_id);
                  res.status(422).json({
                      message: "Succesful Login.",
                  });
              }
              else{
                  res.status(422).json({
                      message: "Wrong password.",
                  });
              }


        default:
            break;
    }
}
