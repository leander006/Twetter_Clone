import dotenv from "dotenv";
import bcrpyt from "bcrypt";
dotenv.config();

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;
const SALT = bcrpyt.genSaltSync(9);
const SECRET = process.env.SECRET;
export { PORT, MONGO_URL, SALT, SECRET };
