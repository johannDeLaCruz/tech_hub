import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@utils/database";
import User from "@models/User";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "E-mail", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          await connectToDatabase();
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("User not found");
          }
          const isCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isCorrect) {
            throw new Error("Wrong password or email!");
          }
          return user;
        } catch (error) {
          console.error("An error logging in:", error.message);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.id = token.id;
        return session;
      }
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ profile, user }) {
      if (profile) {
        try {
          await connectToDatabase();
          const userExists = await User.findOne({ email: profile.email });
          if (!userExists) {
            await User.create({
              email: profile.email,
              username: profile.name.replace(/\s/g, "").toLowerCase(),
              avatar: profile.picture,
            });
          }
          return true;
        } catch (error) {
          console.error(error.message);
          return false;
        }
      }
      if (user) {
        return true;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.email = user.email;
        token.id = user.id;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
