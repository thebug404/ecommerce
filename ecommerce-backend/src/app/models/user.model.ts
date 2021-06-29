import { Schema, model } from "mongoose";

import { Roles } from "../interfaces/general.interfaces";

const userSchema: Schema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: Roles.Reader, enum: Roles }
}, { timestamps: true });

export const User = model("users", userSchema);
