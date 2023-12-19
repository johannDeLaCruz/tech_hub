import { Schema, model, models } from "mongoose";

const tagSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
});

const Tag = models.Tag || model("Tag", tagSchema);

module.exports = Tag;
