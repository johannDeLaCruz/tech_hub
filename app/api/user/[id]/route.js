import User from "@models/User";
import { connectToDatabase } from "@utils/database";
import { getToken } from "next-auth/jwt";

export const GET = async (req, { params }) => {
  const id = params.id;  
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });  
  console.log(token?.id, id)
  if (token?.id !== id) {
    return new Response("Unauthorized", { status: 401 });
  } 
  try {
    await connectToDatabase();
    const user = await User.findById(params.id).populate("favorites");
    if (user) {
      return new Response(JSON.stringify(user), { status: 200 });
    } else {
      return new Response("No users found!", { status: 404 });
    }
  } catch (error) {
    console.error("Failed to fetch users:", error.message);
    return new Response("Failed to fetch new user!", { status: 500 });
  }
};