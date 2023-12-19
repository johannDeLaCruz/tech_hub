import { Schema, model, models } from "mongoose";

const tagSchema = new Schema({
  name: { type: String, required: true }
});

const tagsSchema = new Schema({
  tags: { type: [tagSchema], required: true }
});

const Tags = models.Tags || model("Tags", tagsSchema);

module.exports = Tags;
