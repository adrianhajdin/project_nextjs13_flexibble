import { getServerSession } from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { createUser, getUser } from "./actions";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  theme: {
    colorScheme: "light",
    logo: "/logo.svg",
  },
  callbacks: {
    async session({ session, token }) {
      const email = session?.user?.email as string;

      try {
        const result = await getUser(email)

        const newSession = {
          ...session,
          user: {
            ...session.user,
            ...result?.user,
          },
        };

        return newSession;
      } catch (error: any) {
        console.error("Error retrieving user data: ", error.message);
        return session;
      }
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        // @ts-ignore
        const userExists = await getUser(user.email)

        if (!userExists.user) {
          // @ts-ignore
          await createUser(user.name, user.email, user.image)
        }

        return true;
      } catch (error: any) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
};

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session;
}
