import mongoose from "mongoose";
// import Item from "@models/Item";
// import Tag from "@models/Tag";
// import Filter from "@models/Filter";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected!");    
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "TechHub",
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // deprecated!
    });
    isConnected = true;
    console.log("MongoDB is connected!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};





// Item.insertMany(documentsToInsert)

