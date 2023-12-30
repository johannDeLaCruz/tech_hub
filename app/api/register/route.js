import User from "@models/User";
import { connectToDatabase } from "@utils/database";
import bcrypt from "bcrypt";
export const POST = async (req) => {
  const { email, password } = await req.json();
  try {
    await connectToDatabase();
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const username = email.slice(0, email.indexOf("@"));
      const user = await User.create({
        email: email,
        password: hashedPassword,
        username: username.replace(/\./g, ""),
      });
      return new Response(JSON.stringify(user), { status: 201 });
    }
  } catch (error) {
    console.error("Error saving new user:", error);
    return new Response("Failed to save new user", { status: 500 });
  }
};
