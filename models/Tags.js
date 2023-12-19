import { Schema, model, models } from "mongoose";

const tagsSchema = new Schema({ name: { type: String, required: true } });

const Tag = models.Tags || model("Tags", tagsSchema);

module.exports = Tag;
