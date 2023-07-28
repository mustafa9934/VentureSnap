const express = require("express");
const { register, login } = require("../controllers/userController");
const validateUserRegistration = require("../middlewares/userValidator");
const validateUserLogin = require("../middlewares/userValidator");
const router = express.Router();

router.post("/register", validateUserRegistration, register);
router.post("/login", validateUserLogin, login);

module.exports = router;
