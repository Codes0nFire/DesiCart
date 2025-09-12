// routes/productRoutes.js
const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
} = require("../controllers/productController");

// Define routes
router.get("/products", getAllProducts);
router.get("/product", getSingleProduct);
router.post("/create-product",createProduct);

module.exports = router;
