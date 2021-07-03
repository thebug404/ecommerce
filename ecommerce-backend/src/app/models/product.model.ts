import { model, Schema } from "mongoose";

const schema: Schema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    categoriesIds: [{ type: String }],
    price: { type: Number, required: true },
    rating: { type: Number, default: () => Math.floor(Math.random() * (6)) + 1 }
}, { timestamps: true });

export const ProductModel = model("products", schema);
