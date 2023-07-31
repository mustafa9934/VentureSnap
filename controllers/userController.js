const User = require("../models/userModel");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

let authErrors = [];

module.exports = {
  register: async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      authErrors = [];
      errors.array().map((error) => authErrors.push(error.msg));
      return res.status(400).json({ errors: authErrors });
    }
    try {
      const userValidity = await User.findOne({ email: req.body.email });
      if (userValidity) {
        authErrors.push("This email is already registered, Try Logging In!");
        return res.status(403).json({ errors: authErrors });
      }
      const user = await User.create(req.body);
      const token = generateToken(user);
      return res
        .status(200)
        .json({ message: "You are registered at VentureSnap!", token });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
  login: async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().map((error) => authErrors.push(error.msg));
      return res.status(400).json({ errors: authErrors });
    }

    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const passwordValidity = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (passwordValidity) {
          const token = generateToken(user);
          return res
            .status(200)
            .json({ message: "You are logged in to VentureSnap!", token });
        }
      }
      authErrors.push("Login details are incorrect!");
      return res.status(409).json({
        errors: authErrors,
      });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
};
