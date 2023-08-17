import express from "express";

const app = express();

import { connect } from "./config/mongoSetup.js";
import { PORT } from "./config/server-config.js";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
app.listen(PORT, async (req, res) => {
  await connect();
  console.log(`Runnig on port ${PORT}`);
});
