import { Schema, model, models } from "mongoose";

const validUrlRegex = /^(ftp|http|https):\/\/[^ "]+$/; // Regex for valid URL
const validYearRegex = /^(19|20)\d{2}$/; // Regex for valid year (assuming between 1900 and 2099)
const validPriceRegex = /^\d+(\.\d{1,2})?$/; // Regex for valid price format (decimal with up to two decimal places)
const validRatingRegex = /^[0-5](\.[0-9])?$/; // Regex for valid rating (0-5 with optionally one decimal)
const validYouTubeLinkRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})$/; // Regex for valid YouTube links

const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "The name must be unique"],
    maxLength: [20, "The length must be maximum at 20 characters!"],
  },
  image: {
    type: String,
    default: "/assets/Text.png",    
    validate: {
      validator: (value) => validUrlRegex.test(value),
      message: "Invalid image URL format. Try 'https://...'",
    },
  },
  externalLink: {
    type: String,
    required: [true, "External link is required"],
    validate: {
      validator: (value) => validUrlRegex.test(value),
      message: "Invalid external link URL format. Try 'https://...'",
    },
  },
  brand: {
    type: String,
    required: [true, "Brand name is required"],   
    maxLength: [20, "The length must be maximum at 20 characters!"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],    
    validate: {
      validator: (value) => validRatingRegex.test(value.toString()),
      message: "Invalid rating format. Try a number between 0 and 5 with optionally one decimal.",
    },
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    maxLength: [10, "The length must be maximum at 10 characters!"],
  },
  itemDescription: {
    type: String,
    required: [true, "Item description is required"],
    maxLength: [100, "The length must be maximum at 100 characters!"],
  },
  minimalPrice: {
    type: Number,
    required: [true, "Minimal price is required. If it's free, just add '0.00'"],     
    validate: {
      validator: (value) => validPriceRegex.test(value.toString()),
      message: "Invalid price format! Try '11.00'",
    },
  },
  subscriptionType: {
    type: String,
    default: "N/A",    
    maxLength: [10, "The length must be maximum at 10 characters!"],
  },
  tags: {
    type: [String],    
    required: [true, "At least a single tag is required"]
  },
  timesFavorited: {
    type: Number,
    default: 0,
    required: true,
  },
  yearOfRelease: {
    type: Number,
    default: "N/A",
    required: [true, "Year of release required"],
    validate: {
      validator: (value) => validYearRegex.test(value.toString()),
      message: "Invalid year format. Try 'YYYY'",
    },
  },
  dateAdded: {
    type: Date,
    default: Date.now,
    required: true,
  },
  socialMediaLinks: {
    type: [String],
    default: ["No social media links available"],    
  },
  videoLink: {
    type: String,
    default: "No video available",    
    validate: {
      validator: (value) => validYouTubeLinkRegex.test(value),
      message: "Invalid YouTube link format. Try a valid YouTube video link.",
    },
  },
  itemDetailedInfo: [
    {
      title: {
        type: String,
        default: "Detailed Information",        
      },
      description: {
        type: [String] || Date || String,
        default: "Not Available",        
      },
    },
  ],
});

const Item = models.Item || model("Item", itemSchema);
module.exports = Item;