// routes/productRoutes.js
const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Define routes
router.get("/products", getAllProducts);
router.get("/product/:id", getSingleProduct);
router.post("/create",createProduct);
router.put("/update/:id",updateProduct);
router.delete("/delete/:id",deleteProduct)

module.exports = router;
