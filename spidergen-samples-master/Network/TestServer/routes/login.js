var express = require("express");
var router = express.Router();

router.post("/", function (req, res) {
  //   res.render("Login 라우트 입니다");
  //   console.log(req);
  console.log("data", req.body.data);
  console.log("아이디", req.body.data.id);
  console.log("비밀번호", req.body.data.password);
  var data = req.body.data;
  var login_Token = "abcd1234";

  if (data.id === "kirk0201" && data.password === "1234")
    res.status(200).json({ login_Token, msg: "로그인되었습니다." });
  else res.status(404).send("아이디와 비밀번호를 확인하세요");
  res.end();
  //   var data = JSON.parse(req.body.data);

  //   console.log("data", data);
});

module.exports = router;
