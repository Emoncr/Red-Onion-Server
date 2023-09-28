const express = require("express");
const singleProduct = require("../controllers/singleProduct.controller");

const router = express.Router();

router.get("/products/:id", singleProduct);

module.exports = router;
