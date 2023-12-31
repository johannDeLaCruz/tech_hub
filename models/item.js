import { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: [20, "The length must be maximum 20 characters!"],
  },
  image: {
    type: String,
    default: "Add placeholder image href",
    required: true,
  },
  externalLink: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
    maxLength: [20, "The length must be maximum 20 characters!"],
  },
  rating: {
    type: Number,
    required: true,
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
  },
  dateAdded: {
    type: Date,
    default: Date.now,
    required: true,
  },
  itemDetailedInfo: [
    {
      title: {
        type: String,
        default: "Information",
        required: true,
      },
      description: {
        type: [String] || Date,
        default: "Not Available",
        required: true,
      },
    },
  ],
});

const Item = models.Item || model("Item", itemSchema);
//the "models.User" is needed here for NextAuth serverless specifications
module.exports = Item;
