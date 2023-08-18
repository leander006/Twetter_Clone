import express from "express";

const app = express();

import { connect } from "./config/mongoSetup.js";
import { PORT } from "./config/server-config.js";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";
import UserRepository from "./repository/user-repository.js";
import LikeService from "./service/like-service.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
app.listen(PORT, async (req, res) => {
  await connect();

  // const repo = new LikeService();
  // const likes = await repo.toggleLike(
  //   "64df477c873bbf89a7724465",
  //   "Tweet",
  //   "64df46b30f8e294b1d51d63b"
  // );
  // console.log("likes ", likes);
  // repo.create({
  //   name: "leander",
  //   email: "leander@gmail.com",
  //   password: "1234",
  // });

  console.log(`Runnig on port ${PORT}`);
});
