const express = require("express");
const verifyToken = require("../middlewares/postsMiddleware");
const {
  createPost,
  getAllPosts,
  getSinglePost,
} = require("../controllers/postsController");
const router = express.Router();

router.post("/create", verifyToken, createPost);
router.get("/get-all", getAllPosts);
router.get("/get/:id", getSinglePost);

module.exports = router;
