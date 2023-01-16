import bcryptjs from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../server/db/client";

export default NextAuth({
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user?.user_id) token.user_id = user.user_id;
            if (user?.user_name) token.user_name = user.user_name;
            if (user?.user_wallet_id) token.user_wallet_id = user.user_wallet_id;
            return token;
        },
        async session({ session, token }) {
            if (token?.user_id) session.user.user_id = token.user_id;
            if (token?.user_name) session.user.user_name = token.user_name;
            if (token?.user_wallet_id) session.user.user_wallet_id = token.user_wallet_id;
            return session;
        },
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const user = await prisma.users.findUnique({
                    where: {
                        user_mail: credentials.user_mail,
                    },
                    include: {
                        user_wallet: true,
                    },
                });
                   console.log(user.user_wallet[0].wallet_id);
                if (user.user_activation == false) {
                    throw new Error(
                        "Inactive account.We sended activation code to your email address."
                    );
                }
                if (
                    user &&
                    bcryptjs.compareSync(
                        credentials.user_password,
                        user.user_password
                    )
                ) {
                    return {
                        user_id: user.user_id,
                        user_mail: user.user_mail,
                        user_name: user.user_name,
                        user_wallet_id: user.user_wallet[0].wallet_id,
                    };
                }
                throw new Error("Invalid email or password");
            },
        }),
    ],
});
