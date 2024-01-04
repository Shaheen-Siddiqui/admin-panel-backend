const Joi = require("joi");

const productSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  rating: Joi.number().required(),
  category: Joi.string().required(),
  imageUrl: Joi.string().required(),
  
  smallSize: Joi.array().items(Joi.number()).min(1).required(), // Array of numbers, at least one item required
  availableColor: Joi.array().items(Joi.string()).min(1).required(), // Array of strings, at least one item required
  crouselImage: Joi.array().items(Joi.string()).min(1).required(), // Array of strings, at least one item required

});

module.exports = productSchema;

