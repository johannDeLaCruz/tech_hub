//fetch all items from the database
import { connectToDatabase } from "@utils/database";
import Item from "@models/Item";

export const GET = async (req) => {
  try {
    await connectToDatabase();
    const items = await Item.find({});
    if (items) {
      return new Response(JSON.stringify(items), { status: 200 });
    } else {
      return new Response("No items found", { status: 404 });
    }
  } catch (error) {
    console.error("Failed to fetch prompts:", error.message);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

//add and item to the database

export const POST = async (req) => {
  try {
    await connectToDatabase();
    const data = await req.json();
    const itemExists = await Item.findOne({ name: data.name });
    if (itemExists) {
      return new Response("Item name already exists", { status: 400 });
    }
    const item = await Item.create(data);
    if (!item) {
      return new Response("Failed to create a new item", { status: 500 });
    }
    return new Response("Item successfully created!", { status: 201 });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return new Response(JSON.stringify(errors), { status: 400 });
    }
    console.error("Failed to create a new item:", error);
    return new Response(error, { status: 500 });
  }
};

