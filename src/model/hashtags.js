const mongoose = require("mongoose");

const hashtagScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Hashtag =
  mongoose.models.Hashtag || mongoose.model("Hashtag", hashtagScheme);

module.exports = Hashtag;
