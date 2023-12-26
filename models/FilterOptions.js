import { Schema, model, models } from "mongoose";

const FilterSchema = new Schema({
  tag: {
    type: [String],
    required: true,
    unique: true,
    trim: true,
  },
  type: {
    type: [String],
    required: true,
    unique: true,
    trim: true,
  },
  category: {
    type: [String],
    required: true,
    trim: true,
    unique: true,
  },
  subscriptionType: {
    type: [String],
    required: true,
    trim: true,
    unique: true,
  },
});

module.exports = models.Filter || model("Filter", FilterSchema);
