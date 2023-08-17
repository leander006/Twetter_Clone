import mongoose from "mongoose";

const tweetScheme = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet cannot be more than 250 characters"],
    },

    hashtags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hashtag",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Tweet = mongoose.models.Tweet || mongoose.model("Tweet", tweetScheme);

export default Tweet;
