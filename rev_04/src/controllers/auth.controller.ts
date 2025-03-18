import { z } from "zod";
import asyncHandler from "../utils/asyncHandler";

const registerSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid email format"),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6, "Password must be at least 6 characters long")
    .max(50, "Password must be at most 50 characters long"),
  userAgent: z.string().optional(),
});
export const registerHandler = asyncHandler(async (req, res) => {
  // validate a request
  const request = registerSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });
  // call a service


  // send a response
});
