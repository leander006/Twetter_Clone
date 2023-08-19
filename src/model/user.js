import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { SALT } from "../config/server-config.js";
const userScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userScheme.pre("save", function (next) {
  const user = this;
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

const User = mongoose.models.User || mongoose.model("User", userScheme);

export default User;
