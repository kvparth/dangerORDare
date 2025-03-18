import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

console.log("🔍 Loaded MONGO_URI:", process.env.MONGO_URI); // Debugging

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error("❌ MongoDB URI is missing in .env file");
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
