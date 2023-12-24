//fetch specific user by ID
import User from "@models/User";
import { connectToDatabase } from "@utils/database";

export const GET = async (req, { params }) => {
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
    return new Response("Failed to create a new user", { status: 500 });
  }
};

