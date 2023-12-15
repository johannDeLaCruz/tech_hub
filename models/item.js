import { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: [20, "The length must be maximum 20 characters!"],
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
  features: {
    type: [String],
    default: ["Not Available"],
  },
  releaseHistory: {
    type: [String],
    default: ["Not Available"],
  },
  plans: {
    type: [String],
    default: ["Not Available"],
  },
  categories: [
    { type: Schema.Types.ObjectId, ref: "Category", required: true },
  ],
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
