const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.get("/products", productController);

module.exports = router;
