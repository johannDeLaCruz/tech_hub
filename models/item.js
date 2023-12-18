import { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: [20, "The length must be maximum 20 characters!"],
  },
  image: {
    type: String,
    default: "Placeholder image href",
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
  itemDescription: {
    type: String,
    required: true,
  },
  subscriptionType: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    default: ["Not Available"],
  },
  releaseHistory: {
    type: [String],
    default: ["Not Available"],
  },
  minimalPrice: {
    type: String,
    required: true,
    default: "N/A",
  },
  plans: {
    type: [String],
    default: ["Not Available"],
  },
  categories: {
    type: [String],
    default: ["N/A"],
  },
  socialLinks: {
    type: [String],
    default: ["Not Available"],
  },
  videoLink: {
    type: String,
    default: "Not Available",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Item = models.Item || model("Item", itemSchema);
//the "models.User" is needed here for NextAuth serverless specifications
module.exports = Item;
