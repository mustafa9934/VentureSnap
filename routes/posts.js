const express = require("express");
const verifyToken = require("../middlewares/postsMiddleware");
const { createPost } = require("../controllers/postsController");
const router = express.Router();

router.post("/create", verifyToken, createPost);
router.post("/login");

module.exports = router;
