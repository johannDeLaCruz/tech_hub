import { Schema, model, models } from "mongoose";

const FilterSchema = new Schema({
  tags: {
    type: [String],
    required: true,
    unique: true,
    trim: true,
  },
  // types: {
  //   type: [String],
  //   required: true,
  //   unique: true,
  //   trim: true,
  // },
  categories: {
    type: [String],
    required: true,
    trim: true,
    unique: true,
  },
  subscriptionTypes: {
    type: [String],
    required: true,
    trim: true,
    unique: true,
  },
});

module.exports = models.Filter || model("Filter", FilterSchema);
