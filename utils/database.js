import mongoose from "mongoose";
// import Item from "@models/Item";
// import Tag from "@models/Tag";

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
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // deprecated!
    });
    isConnected = true;
    console.log("MongoDB is connected!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

// const itemDocument = {
//   name: "Your Item Name",
//   image: "https://images.pexels.com/photos/6037812/pexels-photo-6037812.jpeg",
//   externalLink: "https://apple.com",
//   brand: "Your Brand",
//   rating: 5,
//   itemDescription: "Your short general Item Description",
//   subscriptionType: "free",
//   minimalPrice: 29.99,
//   itemDetailedInfo: [
//     {
//       title: "Product Information",
//       description: [
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
//       ],
//     },
//     {
//       title: "Features",
//       description: [
//         "This chair is used by asasadasdadsdasd",
//         "This chair is used by asasadasdadsdasd",
//       ],
//     },
//     {
//       title: "Release History",
//       description: ["22/07/15 - First Release", "08/08/15 - Second Version"],
//     },
//     {
//       title: "Plans",
//       description: ["Free Trial Available", "Paid Plans Start From"],
//     },
//     {
//       title: "Categories",
//       description: ["Software", "Unity", "Unreal", "Other"],
//     },
//     {
//       title: "Social Links",
//       description: [
//         "https://twitter.com/example",
//         "https://facebook.com/example",
//       ],
//     },
//     {
//       title: "Video Link",
//       description: "https://www.youtube.com/watch?v=wm5gMKuwSYk",
//     },
//   ],
// };

// // Now you can save the document using Mongoose
// const newItem = new Item(itemDocument);
// newItem
//   .save()
//   .then((savedItem) => {
//     console.log("Item saved successfully:", savedItem);
//   })
//   .catch((error) => {
//     console.error("Error saving item:", error);
//   });

