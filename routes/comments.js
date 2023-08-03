const express = require("express");
const verifyToken = require("../middlewares/postsMiddleware");
const { createComment } = require("../controllers/commentController");
const router = express.Router();

router.post("/create", verifyToken, createComment);

module.exports = router;
