import type { Document } from "mongoose";
import { model, Schema } from "mongoose";
import { decryptPassword, hashPassword } from "../utils/password";

interface UserDocument extends Document {
  email: string;
  password: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword: (val: string) => Promise<boolean>;
}

const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);


userSchema.pre("save",async function(next){
    if (this.isModified("password")){
        this.password = await hashPassword(this.password);
    }
    next();
})

userSchema.methods.comparePassword = async function(password:string){
    return decryptPassword(this.password, password);
}


const UserModel = model<UserDocument>("User", userSchema);
export default UserModel;