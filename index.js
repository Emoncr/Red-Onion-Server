const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
port = 5000;

mongoose.connect(process.env.MONGO).then(() => {
  console.log("connected to DB");
})
.catch((err)=>{
console.log(err); 
})

app.listen(port, () => {
  console.log("Listing from port 5000");
});
