const express = require("express");
const verifyToken = require("../middlewares/postsMiddleware");
const { createPost, getAllPosts } = require("../controllers/postsController");
const router = express.Router();

router.post("/create", verifyToken, createPost);
router.get("/get-all", getAllPosts);

module.exports = router;
