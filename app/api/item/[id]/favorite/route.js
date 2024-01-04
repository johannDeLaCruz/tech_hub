import { connectToDatabase } from "@utils/database";
import Item from "@models/Item";

//add or subtract from timesFavorited specific item's property
export const POST = async (req, { params }) => {
  const { id } = params;
  try {
    await connectToDatabase();
    const item = await Item.findByIdAndUpdate(
      id,
      {
        $inc: { timesFavorited: 1 },
      },
      { new: true }
    );
    if (!item) {
      return new Response("Item not found", { status: 404 });
    }
    return new Response("Successfully updated number of times favorited!", {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to update number of times favorited!", {
      status: 500,
    });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    await connectToDatabase();
    const item = await Item.findByIdAndUpdate(
      id,
      { $inc: { timesFavorited: -1 } },
      { new: true }
    );
    if (!item) {
      return new Response("Item not found", { status: 404 });
    }
    return new Response("Successfully updated number of times favorited!", {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to update number of times favorited!", {
      status: 500,
    });
  }
};
