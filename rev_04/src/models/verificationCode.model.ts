import { model, Schema, type Document, type ObjectId } from "mongoose";
import VerificationCodeTypes from "../constants/verificationCodeTypes";

interface VerificationCodeDocument extends Document {
  userId: ObjectId;
  type: VerificationCodeTypes;
  createdAt: Date;
  expiresAt: Date;
}

const verificationCodeSchema = new Schema<VerificationCodeDocument>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  type: {
    type: String,
    enum: ["VERIFICATION_EMAIL", "PASSWORD_RESET"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const VerificationCodeModel = model<VerificationCodeDocument>("VerificationCode", verificationCodeSchema, "verification_codes")

export default VerificationCodeModel;