import { type ObjectId, type Document, Schema } from "mongoose";

export interface SessionDocument extends Document {
  userId: ObjectId;
  userAgent?: string;
  createdAt: Date;
  expiresAt: Date;
}

const sessionSchema = new Schema<SessionDocument>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  userAgent: String,
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    required: true,
    default: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
  },
});
