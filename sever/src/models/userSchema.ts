import mongoose, { Schema, model } from "mongoose";

const signupSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});
export const signUpModel = model("User", signupSchema);
