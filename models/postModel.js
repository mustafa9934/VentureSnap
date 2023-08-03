const mongoose = require("mongoose");
const User = require("./userModel");

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
  pictures: [
    {
      type: String,
    },
  ],
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Posts = mongoose.model("Post", postSchema);

module.exports = Posts;
