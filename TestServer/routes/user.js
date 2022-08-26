const express = require("express");
const router = express.Router();

const { userController } = require("../controller");

router.post("/signup", userController.signup.post);
router.post("/findemail", userController.findemail.post);

module.exports = router;
