const express = require("express");
const Product = require("../models/productModel");
const {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} = require("../controller/productController");

const router = express.Router();

router.delete("/:id", deleteProduct);

router.get("/", getProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

router.post("/", createProduct);

module.exports = router;
