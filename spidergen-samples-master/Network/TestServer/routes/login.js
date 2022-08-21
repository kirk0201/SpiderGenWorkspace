var express = require("express");
var OutBlock2 = require("../fakedata.js");
var router = express.Router();

router.post("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  var data = JSON.parse(req.body.data);
  var resData = null;
  var loginData = data.body.InBlock1[0];

  // var data = JSON.parse(req.body);
  // var data = JSONreq.body;
  // console.log(data.body);
  // console.log("loginData", loginData);
  // console.log("email", loginData.login_email === "kirk0201@naver.com");
  // console.log("pass", loginData.login_password === "1234");
  //   res.render("Login 라우트 입니다");
  //   console.log(req);
  // console.log("data", req.body.data);
  // console.log("아이디", req.body.data.id);
  // console.log("비밀번호", req.body.data.password);
  // var data = req.body.data;
  // var login_Token = "abcd1234";

  // if (loginData.login_email === "kirk0201@naver.com") {
  //   res.status(200).json({ login_Token, msg: "로그인되었습니다." });
  // } else {
  //   res.status(404).send("아이디와 비밀번호를 확인하세요");
  //   res.end();
  // }
  if (data.header.query_name == "login") {
    if (
      loginData.login_email === "kirk0201@naver.com" &&
      loginData.login_password === "1234"
    ) {
      console.log("로그인 성공");
      // console.log(fake);
      // console.log(typeof fake);
      resData = {
        //클라이언트에서 보낸 헤더값을 그대로 다시 응답데이터에 셋팅한다.
        header: {
          packet_id: data.header.packet_id,
          query_name: data.header.query_name,
          error_code: 1000,
        },
        body: {
          //이곳은 전문에 따라 다르게 응답값을 셋팅해 준다.
          OutBlock2,
          // OutBlock2: [
          //   {
          //     token: "test",
          //     Friends: "test",
          //     Chats: "Test",
          //   },
          // ],
        },
      };
    } else {
      resData = {
        //클라이언트에서 보낸 헤더값을 그대로 다시 응답데이터에 셋팅한다.
        header: {
          packet_id: data.header.packet_id,
          query_name: data.header.query_name,
          error_code: 1000,
        },
        body: {
          //이곳은 전문에 따라 다르게 응답값을 셋팅해 준다.
          OutBlock1: [
            {
              errMsg: "아이디 비밀번호를 확인하세요",
            },
          ],
        },
      };
    }
  }
  //   var data = JSON.parse(req.body.data);

  //   console.log("data", data);
  res.json(resData);
  res.end();
});

module.exports = router;
