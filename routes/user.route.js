const express = require("express");
const router = express.Router();
const userControler = require('../controllers/user.controller.js');

router.get("/", userControler);

module.exports = router;
