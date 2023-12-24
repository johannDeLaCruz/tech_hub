import { connectToDatabase } from "@utils/database";
import User from "@models/User";

export const POST = async (req, { params }) => {
  const { id } = params;
  const { favoriteId } = await req.json();
  try {
    await connectToDatabase();
    const user = await User.findById(id);
    if (!user) {
      return new Response("No user found", { status: 404 });
    }
    const isFavoriteExists = user.favorites.includes(favoriteId);
    if (isFavoriteExists) {
      return new Response("Favorite already exists in the user's favorites", {
        status: 400,
      });
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $push: { favorites: favoriteId } },
      { new: true }
    );
    return new Response(JSON.stringify(updatedUser.favorites), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to save favorite", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  const { favoriteId } = await req.json();
  try {
    await connectToDatabase();
    const user = await User.findById(id);
    if (!user) {
      return new Response("No user found", { status: 404 });
    }
    const isFavoriteExists = user.favorites.includes(favoriteId);
    if (!isFavoriteExists) {
      return new Response("Favorite not found in the user's favorites", {
        status: 404,
      });
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $pull: { favorites: favoriteId } },
      { new: true }
    );
    return new Response(JSON.stringify(updatedUser.favorites), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to remove favorite", { status: 500 });
  }
};
