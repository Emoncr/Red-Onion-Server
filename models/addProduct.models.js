const mongooes = require("mongoose");

const addProduct = mongooes.Schema(
  {
    food_id: {
      require: true,
      type: String,
    },
    food_name: {
      require: true,
      type: String,
    },
    food_description: {
      require: true,
      type: String,
    },
    price: {
      require: true,
      type: Number,
    },
    photo_url: {
      require: true,
      type: String,
    },
    category: {
      require: true,
      type: String,
    },
  },
  { timestamps: true }
);

const Product = new mongooes.model("Product", addProduct);
module.exports = Product;
