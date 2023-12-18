import { connectToDatabase } from "@utils/database";
import Item from "@models/Item";

export default GET = async (req, { params }) => {
  try {
    await connectToDatabase();
    const items = await Item.find({ _id: params.id });
    if (items) {
      return new Response(JSON.stringify(items), { status: 200 });
    } else {
      return new Response("No items found", { status: 404 });
    }
  } catch (error) {
    console.error("Failed to fetch prompts", error.message);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
