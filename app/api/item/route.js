//fetch all items from the database

import { connectToDatabase } from "@utils/database";
import User from "@models/User";

export const GET = async (res) => {
  try {
    await connectToDatabase();
    const items = await User.find();
    if (items.ok) {
      res.status(200).json(items);
    } else {
      throw new Error(`${items.status}${items.statusText}`);
    }s
  } catch (error) {
    console.error("Failed to fetch all items:", error.message);
  }
};
