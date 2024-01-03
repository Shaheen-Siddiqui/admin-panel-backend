const Product = require("../models/product/index"); // Import the Product model
const productSchema = require("../models/product/validetor"); // Import the Joi validation schema

const addProduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const newProduct = await Product.create(req.body);
    res.status(201).json({newProduct});
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Get product Controller;
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products || products.length === 0) {
      return res.status(404).json({ error: "No products found" });
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Edit controller;
const editProduct = async (req, res) => {
  try {
    const { _id } = req.params; // Assuming you have the product ID in the URL params

    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete controller;
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you have the product ID in the URL params

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addProduct, editProduct, deleteProduct, getAllProducts };
