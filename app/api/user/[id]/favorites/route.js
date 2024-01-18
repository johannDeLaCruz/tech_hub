//create or delete favorite item from user's favorite list
import { connectToDatabase } from "@utils/database";
import User from "@models/User";
import { getToken } from "next-auth/jwt";

export const POST = async (req, { params }) => {
  const id = params.id;
  const { favoriteId } = await req.json();
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (token?.id !== id) {
    return new Response("Unauthorized", { status: 401 });
  }
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
    return new Response("Successfully saved favorite!", { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to save favorite", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const id = params.id;
  const { favoriteId } = await req.json();
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (token?.id !== id) {
    return new Response("Unauthorized", { status: 401 });
  }
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
