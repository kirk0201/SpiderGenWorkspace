const express = require("express");
const router = express.Router();

const { friendController } = require("../controller");

router.post("/myfriend", friendController.myfriend.post);

module.exports = router;
