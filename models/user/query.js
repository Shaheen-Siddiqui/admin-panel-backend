const { userModel } = require("./index");

const loginUser = async (email, password) => {
  const userExist = await userModel.findOne({ email });
  if (!userExist) {
    throw new Error("User not found");
  }
  const isPasswordValid = password === userExist.password;

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return userExist;
};

module.exports = { loginUser };
