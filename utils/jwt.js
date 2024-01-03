const jwt = require("jsonwebtoken");
require("dotenv").config();

 function sign(body) {
  const accessToken = jwt.sign(body, process.env.JWT_SECRET_KEY, {expiresIn:'24h'});
  return accessToken;
}

module.exports = { sign };
