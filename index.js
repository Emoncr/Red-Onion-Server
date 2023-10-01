const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const userSchema = require("./models/user.models.js");
const userRoute = require("./routes/user.route.js");
const addProduct = require("./routes/addProduct.route.js");
const productRoute = require("./routes/products.route.js");
const singleProduct = require("./routes/singleProduct.route.js");


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

port = 5000;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/users/", userRoute);
app.use("/", addProduct);
app.use("/", productRoute);
app.use("/", singleProduct);















app.listen(port, () => {
  console.log("Listing from port 5000");
});
