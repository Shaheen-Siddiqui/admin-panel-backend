const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
});

const userModel = mongoose.model("Admin-User", userSchema);

module.exports = { userModel };
