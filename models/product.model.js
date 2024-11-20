const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
