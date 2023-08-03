const express = require("express");
const router = express.Router();
const userRoutes = require("./user");
const postsRoutes = require("./posts");
const commentsRoutes = require("./comments");

router.use("/user", userRoutes);
router.use("/post", postsRoutes);
router.use("/comment", commentsRoutes);

module.exports = router;
