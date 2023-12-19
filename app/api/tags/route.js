//fetch all tags
import { connectToDatabase } from "@utils/database";
import Tag from "@models/Tag";

export const GET = async (req) => {
  try {
    await connectToDatabase();
    const tags = await Tag.find({});
    if (tags) {
      return new Response(JSON.stringify(tags), { status: 200 });
    } else {
      return new Response("No tags found!", { status: 404 });
    }
  } catch (error) {
    console.error("Failed to fetch tags:", error.message);
    return new Response("Failed to fetch tags", { status: 500 });
  }
};
