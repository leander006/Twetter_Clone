const mongoose = require("mongoose");

const commentScheme = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentScheme);

module.exports = Comment;
