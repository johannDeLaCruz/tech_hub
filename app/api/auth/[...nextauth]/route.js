import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { connectToDatabase } from "@utils/database";
import User from "@models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id;
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDatabase();
        const existingUser = await User.findOne({ email: profile.email });
        if (!existingUser) {
          await User.create({
            email: profile.email,
            username: profile.username.replace(" ", "").toLowerCase(),
            image: profile.image,
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export { handler as GET, handler as POST };
