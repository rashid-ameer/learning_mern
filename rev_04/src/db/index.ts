import mongoose from "mongoose";
import { MONGO_CONNECTION_URI } from "../constants/env";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(MONGO_CONNECTION_URI);
    console.log("Connected to datebase: ", connectionInstance.connection.host);
  } catch (error) {
    console.log("Mongo DB connection error: ", error);
    process.exit(1);
  }
}

export default connectDB;
