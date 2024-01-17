import { Schema, model, models } from "mongoose";

const validUrlRegex = /^(ftp|http|https):\/\/[^ "]+$/; // Regex for valid URL
const validYearRegex = /^(19|20)\d{2}$/; // Regex for valid year (assuming between 1900 and 2099)
const validPriceRegex = /^\d+(\.\d{1,2})?$/; // Regex for valid price format (decimal with up to two decimal places)
const validRatingRegex = /^[0-5](\.[0-9])?$/; // Regex for valid rating (0-5 with optionally one decimal)
const validYouTubeLinkRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})$/; // Regex for valid YouTube links

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: [20, "The length must be maximum 20 characters!"],
  },
  image: {
    type: String,
    default: "/assets/Text.png",
    required: true,
    validate: {
      validator: (value) => validUrlRegex.test(value),
      message: "Invalid image URL format. Try 'https://...'",
    },
  },
  externalLink: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validUrlRegex.test(value),
      message: "Invalid external link URL format. Try 'https://...'",
    },
  },
  brand: {
    type: String,
    required: true,
    maxLength: [20, "The length must be maximum 20 characters!"],
  },
  rating: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => validRatingRegex.test(value.toString()),
      message: "Invalid rating format. Try a number between 0 and 5 with optionally one decimal.",
    },
  },
  category: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },
  minimalPrice: {
    type: Number,
    default: "N/A",
    required: true,
    validate: {
      validator: (value) => validPriceRegex.test(value.toString()),
      message: "Invalid price format! Try '11.00'",
    },
  },
  subscriptionType: {
    type: String,
    default: "N/A",
    required: true,
  },
  tags: {
    type: [String],
    default: "N/A",
    required: true,
  },
  timesFavorited: {
    type: Number,
    default: 0,
    required: true,
  },
  yearOfRelease: {
    type: Number,
    default: "N/A",
    required: true,
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
    default: "No social media links available",
    required: true,
  },
  videoLink: {
    type: String,
    default: "No video available",
    required: true,
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
        required: true,
      },
      description: {
        type: [String] || Date || String,
        default: "Not Available",
        required: true,
      },
    },
  ],
});

const Item = models.Item || model("Item", itemSchema);
module.exports = Item;