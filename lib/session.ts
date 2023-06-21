import { getServerSession } from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";

import { createUser, getUser } from "./actions";
import { GraphQLClient } from "graphql-request";
import { getApiConfig } from "./utils";
import { getUserQuery } from "@/graphql/query";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  jwt: {
    encode: ({ secret, token }) => {
      const encodedToken = jsonwebtoken.sign(
        {
          ...token,
          iss: "grafbase",
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        secret
      );
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jsonwebtoken.verify(token!, secret);
      return decodedToken as JWT;
    },
  },
  theme: {
    colorScheme: "light",
    logo: "/logo.svg",
  },
  callbacks: {
    async session({ session, token }) {
      const email = session?.user?.email as string;

      try { 
        const { apiUrl, apiKey } = await getApiConfig();
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = getUserQuery(email);
        const data = await client.request(mutation);


        const newSession = {
          ...session,
          user: {
            ...session.user,
             // @ts-ignore
            ...data?.user,
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
        
        // @ts-ignore
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
