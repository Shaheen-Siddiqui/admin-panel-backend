const Joi = require("joi");

const loginUserValidate = (user) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
};

module.exports = { loginUserValidate };
