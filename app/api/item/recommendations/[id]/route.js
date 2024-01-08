import { connectToDatabase } from "@utils/database";
import Item from "@models/Item";

export const GET = async (req, { params }) => {
  await connectToDatabase();
  const { id } = params;
  try {
    const item = await Item.findById(id);
    const similarItems = await Item.find({
      _id: { $ne: item._id },
      $or: [
        { brand: item.brand },
        { category: item.category },
        { tags: { $in: item.tags } },
        {
          yearOfRelease: {
            $gte: item.yearOfRelease - 1,
            $lte: item.yearOfRelease + 1,
          },
        },
      ],
    }).limit(5);    
    return new Response(JSON.stringify(similarItems), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch recommendations!", error.message);
    return new Response("Failed to fetch recommendations!", { status: 500 });
  }
};
