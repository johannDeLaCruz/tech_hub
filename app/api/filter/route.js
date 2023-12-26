import { connectToDatabase } from "@utils/database";
import Filter from "@models/Filter";

export const GET = async (req) => {
  try {
    await connectToDatabase();
    const filters = await Filter.findOne();
    if (!filters) {
      return new Response(JSON.stringify({ message: "No filters found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(filters), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch filters:", error.message);
    return new Reponse(JSON.stringify({ message: "Failed to fetch filters" }), {
      status: 500,
    });
  }
};
