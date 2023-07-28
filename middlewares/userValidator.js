const { body } = require("express-validator");

// Validation middleware for user registration
const validateUserRegistration = [
  body("fullName").notEmpty().withMessage("Full name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("password").notEmpty().withMessage("Password is required"),
  body("dateOfBirth")
    .optional({ nullable: true }) // dateOfBirth is optional
    .isISO8601()
    .withMessage("Invalid date format"),
  body("gender").optional({ nullable: true }), // gender is optional
  body("country").optional({ nullable: true }), // country is optional
  body("profileImage").optional({ nullable: true }), // profileImage is optional
  body("bio").optional({ nullable: true }), // bio is optional
  body("socialMediaLinks")
    .optional({ nullable: true })
    .isArray()
    .withMessage("Social media links must be an array"),
];

const validateUserLogin = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("password").notEmpty().withMessage("Password is required"),
];
module.exports = validateUserRegistration;
module.exports = validateUserLogin;
