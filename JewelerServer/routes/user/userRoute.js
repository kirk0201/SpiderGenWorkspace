const express = require("express");
const router = express.Router();

const { signUp } = require("./userController");

router.post("/", signUp);

module.exports = router;
