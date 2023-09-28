const Product = require("../models/addProduct.models");

module.exports = productController = async (req, res) => {
  try {
    const products = await Product.find().select({
      updatedAt: 0,
      createdAt: 0,
      _id: 0,
      __v:0,
     
    });
    res.send(products);
  } catch (error) {
    res.status(500).json({
      error: "Server side error happend",
    });
  }
};
