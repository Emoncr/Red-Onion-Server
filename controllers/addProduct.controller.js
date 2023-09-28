const Product = require("../models/addProduct.models");

module.exports = addProduct = async (req, res) => {
  const allProduct = req.body;
  try {
    await Product.insertMany(allProduct);
    res.status(200).json({
      message: "All Product  added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Server side error happend",
    });
  }
};
