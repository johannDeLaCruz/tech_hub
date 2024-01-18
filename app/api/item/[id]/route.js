//fetch a specific items by id
import { connectToDatabase } from "@utils/database";
import Item from "@models/Item";
import { getToken } from "next-auth/jwt";

export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();
    const item = await Item.findOne({ _id: params.id });
    if (item) {
      return new Response(JSON.stringify(item), { status: 200 });
    } else {
      return new Response("No items found", { status: 404 });
    }
  } catch (error) {
    console.error("Failed to fetch prompts:", error.message);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

//delete a specific item
export const DELETE = async (req, { params }) => {
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (token?.role !== "admin") {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    await connectToDatabase();
    const item = await Item.findById(params.id);
    if (!item) {
      return new Response("Item not found", { status: 404 });
    }
    await item.deleteOne();
    return new Response("Item deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting item:", error);
    return new Response("Failed to delete item", { status: 500 });
  }
};

