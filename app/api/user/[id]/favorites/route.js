import { connectToDatabase } from "@utils/database";
import User from "@models/User";

export const POST = async (req, { params }) => {
  const { id } = params;
  const { favoriteId } = await req.json();

  try {
    await connectToDatabase();
    const user = await User.findByIdAndUpdate(
      id,
      { $push: { favorites: favoriteId } },
      { new: true }
    );
    if (!user) {
      return new Response("No user found", { status: 404 });
    }
    await user.save();
    return new Response(JSON.stringify(user.favorites), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to save favorite", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  const { favoriteId } = req.json();
  try {
    await connectToDatabase();
    await User.findByIdAndUpdate(id, { $pull: { favorites: favoriteId } });
    return new Response("Successfully removed favorite!", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to remove favorite", { status: 500 });
  }
};
