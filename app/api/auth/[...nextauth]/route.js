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
            throw new Error("Email not found!");
          }
          const isCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isCorrect) {
            throw new Error("Wrong password or email!");
          }
          const userToSend = { ...user.toObject(), password: null };
          console.log("the user is:", userToSend);
          return userToSend;
        } catch (error) {
          console.error("An error logging in:", error);
          throw new Error(error.message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
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
    async jwt({ token, user, account }) {
      // console.log("jwt", { token, user, account });
      await connectToDatabase();
      const currentUser = await User.findOne({ email: user?.email });
      const userID = currentUser?._id?.toString();
      if (account?.type === "credentials") {
        token.name = user.username;
        token.id = user._id.toString();
        token.role = user.role;
        // token.picture = user.avatar;
      } else if (account?.type === "oauth") {
        token.id = userID;
        token.picture = user.image;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, user, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.image = token.picture;
      session.user.role = token.role;
      // console.log("session", { session, user, token });
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
              role: "user",
            });
          }
          // console.log(profile);
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
  },
});

export { handler as GET, handler as POST };
