const express = require("express");
const router = express.Router();

const { chatController } = require("../controller");

router.post("/chatlist", chatController.chatlist.post);

module.exports = router;
