const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KET, { expiresIn: "10d" });
};

module.exports = generateToken;
