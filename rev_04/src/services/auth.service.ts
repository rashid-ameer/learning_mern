import VerificationCodeTypes from "../constants/verificationCodeTypes";
import UserModel from "../models/user.model";
import VerificationCodeModel from "../models/verificationCode.model";

type CreateAccountParams = {
  email: string;
  password: string;
  userAgent?: string;
};
export const createAccount = async (data: CreateAccountParams) => {
  // verify user does not exist
  const existingUser = await UserModel.exists({ email: data.email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  // create a user
  const user = await UserModel.create({
    email: data.email,
    password: data.password,
  });

  // create a verification code
  const verificationCode = await VerificationCodeModel.create({
    userId: user._id,
    type: VerificationCodeTypes.EMAIL_VERIFICATION,
    expiresAt: new Date(Date.now() + 3 * 60 * 60 * 1000), // expires after 3 hours
  });

  // send an email

  // create a session

  // access and refresh token

  // return user and tokens
};
