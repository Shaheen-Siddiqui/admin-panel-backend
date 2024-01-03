const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
