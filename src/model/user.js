import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { SALT, SECRET } from "../config/server-config.js";
import JWT from "jsonwebtoken";
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

userScheme.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

userScheme.methods.genJWT = function generate() {
  return JWT.sign({ id: this._id, email: this.email }, SECRET, {
    expiresIn: "1h",
  });
};

const User = mongoose.models.User || mongoose.model("User", userScheme);

export default User;
