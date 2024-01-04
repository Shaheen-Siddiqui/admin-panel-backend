const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  rating: Number,
  category: String,
  imageUrl: String,
  smallSize: Array,
  availableColor: Array,
  crouselImage: Array,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
