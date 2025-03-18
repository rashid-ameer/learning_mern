import express from "express";
import cookieParser from "cookie-parser";
import { APP_ORIGIN } from "./constants/env";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import asyncHandler from "./utils/asyncHandler";
import authRoutes from "./routes/auth.route";

// app instance
const app = express();

// middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(cors({ origin: APP_ORIGIN, credentials: true }));

// health check
app.get(
  "/",
  asyncHandler(async (req, res) => {
    res.status(200).json({ health: "100%" });
  })
);

// routes
app.use("/auth", authRoutes);

// error handler middlewares
app.use(errorHandler);

export default app;
