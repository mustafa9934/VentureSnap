const express = require("express");
const { get } = require("../controllers/userController");
const router = express.Router();

router.use("/user", get);

module.exports = router;
