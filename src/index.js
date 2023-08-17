const express = require("express");

const app = express();

const connect = require("./config/mongoSetup");

const Tweet = require("./model/tweet");
const { HashtagRepository } = require("./repository/index");
const TweetService = require("./service/tweet-service");
app.listen(3000, async (req, res) => {
  await connect();

  let repo = new TweetService();
  // await repo.bulkCreate([
  //   {
  //     title: "Trend",
  //     tweets: [],
  //   },
  //   {
  //     title: "Hachathon",
  //     tweets: [],
  //   },
  //   {
  //     title: "Science",
  //     tweets: [],
  //   },
  //   {
  //     title: "Google",
  //     tweets: [],
  //   },
  //   {
  //     title: "Walmart",
  //     tweets: [],
  //   },
  //   {
  //     title: "Rohirat",
  //     tweets: [],
  //   },
  // ]);

  const resp = await repo.create({
    content: "I am #excited ",
  });
  console.log(resp);

  console.log("runnig on port 3000");
});
