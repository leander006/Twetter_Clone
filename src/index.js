import express from "express";

const app = express();

import { connect } from "./config/mongoSetup.js";
import { PORT } from "./config/server-config.js";

// const Tweet = require("./model/tweet");
// import {} from "./model/tweet";
// const { HashtagRepository } = require("./repository/index");
// const TweetService = require("./service/tweet-service");
app.listen(PORT, async (req, res) => {
  await connect();

  // let repo = new TweetService();
  // // await repo.bulkCreate([
  // //   {
  // //     title: "Trend",
  // //     tweets: [],
  // //   },
  // //   {
  // //     title: "Hachathon",
  // //     tweets: [],
  // //   },
  // //   {
  // //     title: "Science",
  // //     tweets: [],
  // //   },
  // //   {
  // //     title: "Google",
  // //     tweets: [],
  // //   },
  // //   {
  // //     title: "Walmart",
  // //     tweets: [],
  // //   },
  // //   {
  // //     title: "Rohirat",
  // //     tweets: [],
  // //   },
  // // ]);

  // const resp = await repo.create({
  //   content: "I am #excited ",
  // });
  // console.log(resp);

  console.log(`Runnig on port ${PORT}`);
});
