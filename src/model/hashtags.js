import mongoose from "mongoose";

const hashtagScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
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

hashtagScheme.pre("save", function (next) {
  this.title = this.title.toLowerCase();
  next();
});

const Hashtag =
  mongoose.models.Hashtag || mongoose.model("Hashtag", hashtagScheme);

export default Hashtag;
