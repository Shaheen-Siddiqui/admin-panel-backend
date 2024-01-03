const jwt = require("jsonwebtoken");
require("dotenv").config();

const authVerify = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {

    res.status(400).json({ error: "Invalid token." });
  }
};

module.exports = { authVerify };
