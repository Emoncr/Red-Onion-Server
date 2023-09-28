const express = require("express");
const addProduct = require("../controllers/addProduct.controller.js");
const router = express.Router();

router.post("/addProduct", addProduct);

module.exports = router;
