const Posts = require("../models/postModel");
module.exports = {
  createPost: async (req, res) => {
    try {
      const newPost = await Posts.create(req.body);
      const post = await newPost.populate(
        "author",
        "fullName email dateOfBirth gender country profileImage bio socialMediaLinks createdAt"
      );
      return res.status(200).json({ message: "Your post is created", post });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
  getAllPosts: async (req, res) => {
    try {
      const posts = await Posts.find().populate(
        "author",
        "fullName email dateOfBirth gender country profileImage bio socialMediaLinks createdAt"
      );
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
};
