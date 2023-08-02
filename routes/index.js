const express = require("express");
const router = express.Router();
const userRoutes = require("./user");
const postsRoutes = require("./posts");

router.use("/user", userRoutes);
router.use("/post", postsRoutes);

module.exports = router;
