const Comment = require("../models/commentModel");
module.exports = {
  createComment: async (req, res) => {
    try {
      const comment = await Comment.create(req.body);
      return res.status(200).json({ message: "Your comment is added" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
