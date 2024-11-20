const express = require("express");
const {
  getProducts,
  getSingleProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controllers");

const router = express.Router();

router.get("/", getProducts); // Get all products
router.get("/:id", getSingleProduct); // Get product by ID
router.post("/", postProduct); // Add a new product
router.put("/:id", updateProduct); // Update a product
router.delete("/:id", deleteProduct); // Delete a product

module.exports = router;
