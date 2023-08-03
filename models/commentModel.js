const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  postId: {
    type: mongoose.Types.ObjectId,
    ref: "Posts",
  },
});

const Comments = mongoose.model("Comment", commentSchema);

module.exports = Comments;
