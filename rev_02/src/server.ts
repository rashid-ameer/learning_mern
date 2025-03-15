import "dotenv/config";
import app from "./app";
import mongoose from "mongoose";
import { MONGO_CONNECTION_URI, PORT } from "./constants/env";

mongoose
  .connect(MONGO_CONNECTION_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("Server is running of port 5000");
    });
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });
