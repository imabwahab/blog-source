import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`);
  } catch (err) {
    console.error("Database connection failed:", err.message);
  }
};

export default connectDB;

