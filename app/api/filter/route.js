import { connectToDatabase } from "@utils/database";
import Filter from "@models/Filter";
import { getToken } from "next-auth/jwt";

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

export const POST = async (req) => {
  try {
    const token = await getToken({
      req: req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!token || token.role !== 'admin') {
      return new Response('Unauthorized', { status: 401 });
    }
    await connectToDatabase(); 
    const newFilterData = await req.json();
    const response = await Filter.findOneAndUpdate(
      {}, 
      newFilterData,
      { new: true, upsert: true } 
    );
    if (!response) {
      return new Response(
        JSON.stringify({ message: 'Failed to update filter' }),
        {
          status: 500,
        }
      );
    }
    return new Response(
      JSON.stringify({ message: 'Filter successfully updated!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to update filter:', error.message);
    return new Response(
      JSON.stringify({ message: 'Failed to update filter' }),
      {
        status: 500,
      }
    );
  }
};
