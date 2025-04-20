import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/second_brain");
    console.log("The connection with MongoDb was successful")
  } catch (err) {
    console.log(err);
  }
};