import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is connected!");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "TechHub",
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB is connected!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message)
  }
};
