import express from "express";

const app = express();

import { connect } from "./config/mongoSetup.js";
import { PORT } from "./config/server-config.js";
import { passportAuth } from "./config/jwt.js";

import passport from "passport";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
passportAuth(passport);

app.use("/api", apiRoutes);
app.listen(PORT, async (req, res) => {
  await connect();
  console.log(`Runnig on port ${PORT}`);
});
