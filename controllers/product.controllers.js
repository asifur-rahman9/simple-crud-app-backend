const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ success: false, error: "Error fetching products" });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, error: "Error getting product" });
  }
};

const postProduct = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const newProduct = await Product.create(req.body);
    res.status(201).json({ success: true, data: newProduct });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({
      success: false,
      error: "Error creating product",
      details: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, error: "Error updating product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: product,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: "Error deleting product" });
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
