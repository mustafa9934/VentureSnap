const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SocialMediaLinksSchema = new mongoose.Schema({
  Instagram: { type: String },
  Facebook: { type: String },
  Twitter: { type: String },
});

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date },
  gender: { type: String },
  country: { type: String },
  profileImage: { type: String }, // Store the path to the uploaded image file
  bio: { type: String },
  socialMediaLinks: { type: SocialMediaLinksSchema }, // An array of social media profile URLs
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
