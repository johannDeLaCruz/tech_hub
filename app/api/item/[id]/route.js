//fetch a specific items by id
import { connectToDatabase } from "@utils/database";
import Item from "@models/Item";

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
