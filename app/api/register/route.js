import User from "@models/User";
import { connectToDatabase } from "@utils/database";
import bcrypt from "bcrypt";
export const POST = async (req) => {
  const { username, email, password } = await req.json();
  try {
    await connectToDatabase();
    const userExists = await User.findOne({ $or: [({ email }, { username })] });
    if (!userExists) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        username: username,
        email: email,
        password: hashedPassword,
      });
      return new Response(JSON.stringify(user), { status: 201 });
    }
    return new Response("Username or email already exists!", { status: 400 });
  } catch (error) {
    console.error("Error registering new user:", error);
    return new Response("Failed to register new user", { status: 500 });
  }
};
