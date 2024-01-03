const { loginUser } = require("../models/user/query.js");
const { sign } = require("../utils/jwt");
const { loginUserValidate } = require("../models/user/validetor.js");


const login = async (req, res) => {
  try {
    const { error } = loginUserValidate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        error: error.details[0].message,
      });
    }
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    const token = await sign({ _id: user._id });

    res.status(200).json({ message: "Login successful", data: user, token });
  } catch (error) {
    if (error.message === "User not found") {
      res.status(404).json({ error: "User not found" });
    } else if (error.message === "Invalid password") {
      res.status(400).json({ error: "Invalid password" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

module.exports = { login };
