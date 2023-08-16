const express = require("express");

const app = express();

const connect = require("./config/mongoSetup");

app.listen(3000, async (req, res) => {
  await connect();
  console.log("runnig on port 3000");
});
