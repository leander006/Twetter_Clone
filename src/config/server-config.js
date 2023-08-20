import dotenv from "dotenv";
import bcrpyt from "bcrypt";
dotenv.config();

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;
const SALT = bcrpyt.genSaltSync(9);
const SECRET = process.env.SECRET;
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_REGION = process.env.AWS_REGION;
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
export {
  PORT,
  MONGO_URL,
  SALT,
  SECRET,
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_BUCKET_NAME,
};
