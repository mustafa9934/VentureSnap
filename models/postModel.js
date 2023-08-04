const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  country: {
    type: String,
  },
  days: {
    type: String,
  },
  expenses: {
    type: String,
  },
  description: {
    type: String,
  },
  picture: {
    type: String,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  comments: {
    type: mongoose.Types.ObjectId,
    ref: "Comment",
  },
});

const Posts = mongoose.model("Post", postSchema);

module.exports = Posts;
