const express = require("express");
const router = express.Router();

const { chatController } = require("../controller");

router.post("/chatlist", chatController.chatlist.post);
router.post("/chatroom", chatController.chatroom.post);

module.exports = router;
