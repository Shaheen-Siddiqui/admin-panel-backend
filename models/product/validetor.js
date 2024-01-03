const Joi = require('joi');

const productSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  rating: Joi.number().required(),
  category: Joi.string(),
  imageUrl: Joi.string()
});

module.exports = productSchema;
