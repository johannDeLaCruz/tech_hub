import { Schema, model, models } from "mongoose";

const FilterSchema = new Schema({
  tags: {
    type: [String],
    required: true,
    unique: true,
    trim: true,
  },
  rating: {
    type: Number,
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
  yearOfRelease: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
});

module.exports = models.Filter || model("Filter", FilterSchema);
