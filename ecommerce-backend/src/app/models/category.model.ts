import { model, Schema } from "mongoose";

const categorySchema: Schema = new Schema({
    name: { type: String, required: true },
    color: { type: String, default: "primary" }
});

export const CategoryModel = model("categories", categorySchema);
