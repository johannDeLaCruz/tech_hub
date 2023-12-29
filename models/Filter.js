import { Schema, model, models } from "mongoose";

const FilterSchema = new Schema({
  tags: {
    type: [String],
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  category: {
    type: [String],
    required: true,
    trim: true,
  },
  subscriptionType: {
    type: [String],
    required: true,
    trim: true,
  },
  priceRange: {
    type: [Number],
    required: true,
  },
  yearOfRelease: {
    type: [Number],
    required: true,
  },
});

module.exports = models.Filter || model("Filter", FilterSchema);
