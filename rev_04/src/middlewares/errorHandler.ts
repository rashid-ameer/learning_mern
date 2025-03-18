import HTTP_CODES from "../constants/httpCodes";
import { ErrorRequestHandler } from "express";
import { z } from "zod";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(`PATH: ${req.path} - METHOD: ${req.method}: `, err);

  if (err instanceof z.ZodError) {
    res.status(HTTP_CODES.BAD_REQUEST).json({
      success: false,
      message: err.errors[0].message,
    });
  }

  res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal Server Error" });
};

export default errorHandler;
