const Joi = require("joi");

const productSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  rating: Joi.number().required(),
  category: Joi.string(),
  imageUrl: Joi.string(),
  
  smallSize: Joi.array().items(Joi.number()), // Array of numbers
  availableColor: Joi.array().items(Joi.string()), // Array of strings
  crouselImage: Joi.array().items(Joi.string()), // Array of strings
});

module.exports = productSchema;

