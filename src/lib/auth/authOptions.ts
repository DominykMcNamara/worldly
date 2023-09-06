import type { NextAuthOptions } from "next-auth";
import prisma from "../prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { findUserByEmail } from "../user/findUniqueUser";
import { comparePasword } from "../user/comparePassword";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: { type: "email", placeholder: "email@email.com" },
        password: { type: "password", placeholder: "password" },
      },

      async authorize(credentials) {
        const res = await fetch("http://localhost:3000/api/credentials", {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const user = await res.json();
        if (res.ok && user) {
          console.log(user);
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      const userData = await prisma?.user.findUnique({
        where: {
          email: session.user?.email || undefined,
        },
      });
      return {
        ...session,
        user: {
          ...session.user,
          userId: userData?.id,
          firstName: userData?.firstName,
          lastName: userData?.lastName,
          username: userData?.username,
          id: token.id,
          randomKey: token.randomKey,
          image: userData?.image,
          bio: userData?.bio,
          location: userData?.location,
          pronouns: userData?.pronouns,
          link: userData?.link,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};
