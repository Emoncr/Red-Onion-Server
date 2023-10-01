const Product = require("../models/addProduct.models");

module.exports = singleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.find({ food_id: productId }).select({
      _id:0,
      updatedAt:0,
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).json({
      error: "Server side error happend",
    });
  }
};
