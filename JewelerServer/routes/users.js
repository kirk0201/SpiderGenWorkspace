var express = require("express");
var db = require("../controller/db.js");
var router = express.Router();

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   console.log(req.query.name);

//   //일반 ajax 요청일 경우
//   if (req.query.name) {
//     res.send("Hello~ " + req.query.name);
//   }

//   //setData 일 경우
//   else {
//     var resData = {
//       email: "test@gmail.com",
//       age: 20,
//     };

//     //json 형식의 데이터
//     res.json(resData);
//     res.end();
//   }
// });

/*	
	var data = 
	{
		header: 
		{
			'packet_id': 100, 'query_name': 'ac0001'
		},

		body:
		{
			InBlock1:
			[
				{ 'login_id':'asoocool', 'login_pw': '1234' }
			]
		}
	};
*/
router.post("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  //클라이언트에서 보낸 post 데이터를 꺼내 json 으로 파싱한다.
  //data 의 구조는 위의 주석 참조
  var data = JSON.parse(req.body.data);
  // console.log("test", req);
  // console.log("쿼리명", data);
  // console.log("isHeader?", data.header);
  // console.log(data.body.InBlock1);
  const clientData = data.body.InBlock1[0];

  console.log(clientData);
  //console.log(data.body.InBlock1[0].login_id);

  var resData = null;

  // 로그인 Query
  if (data.header.query_name == "signIn") {
    const { uid, password } = clientData;

    resData = {
      //클라이언트에서 보낸 헤더값을 그대로 다시 응답데이터에 셋팅한다.
      header: {
        packet_id: data.header.packet_id,
        query_name: data.header.query_name,
        error_code: 1000,
      },
      body: {
        //이곳은 전문에 따라 다르게 응답값을 셋팅해 준다.
        OutBlock1: [],
      },
    };
    const serverData = resData.body.OutBlock1;

    // 아이디 존재 여부 Query
    db.query(`SELECT uid FROM user WHERE uid = ?`, [uid], (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        serverData.push({
          message: "존재하지 않는 아이디입니다",
          result: false,
        });
        res.json(resData);
        res.end();
      } else if (result.length !== 0) {
        // 아이디, 패스워드 일치 여부 Query
        db.query(
          `SELECT uid, password FROM user WHERE uid = ? AND password = ?`,
          [uid, password],
          (err, result) => {
            if (err) throw err;
            if (result.length === 0) {
              serverData.push({
                message: "비밀번호를 잘못 입력하셨습니다",
                result: false,
              });
              res.json(resData);
              res.end();
            } else if (result.length !== 0) {
              // 아이디, 패스워드 일치시 해당 유저 정보를 result 객체에 담기
              db.query(
                `SELECT id, uid FROM user WHERE uid = ? AND password = ?`,
                [uid, password],
                (err, result) => {
                  if (err) throw err;
                  serverData.push({
                    message: "로그인에 성공하였습니다",
                    result: result,
                  });
                  res.json(resData);
                  res.end();
                }
              );
            }
          }
        );
      }
    });

    // 회원가입 Query
  } else if (data.header.query_name == "signUp") {
    const { uid, password1, password2 } = clientData;

    resData = {
      //클라이언트에서 보낸 헤더값을 그대로 다시 응답데이터에 셋팅한다.
      header: {
        packet_id: data.header.packet_id,
        query_name: data.header.query_name,
        error_code: 1000,
      },
      body: {
        //이곳은 전문에 따라 다르게 응답값을 셋팅해 준다.
        OutBlock1: [],
      },
    };
    const serverData = resData.body.OutBlock1;

    // 비밀번호1,2가 서로 다를 경우
    if (clientData.password1 !== clientData.password2) {
      serverData.push({
        message: "비밀번호를 확인해주세요",
        result: false,
      });
    }

    // 중복된 회원 아이디
    db.query(`SELECT uid FROM user where uid=?`, [uid], (err, result) => {
      console.log("result", result.length);
      if (err) throw err;
      if (result.length !== []) {
        serverData.push({
          message: "이미 존재하는 회원입니다",
          result: false,
        });
      } else if (result.length === 0) {
        db.query(
          `INSERT INTO user (uid, password) VALUES(?,?)`,
          [uid, password2],
          (err, result) => {
            if (err) throw err;
            console.log(result);
          }
        );
        serverData.push({
          message: "회원가입에 성공하였습니다",
          result: true,
        });
      }
      res.json(resData);
      res.end();
    });
    // 회원가입 성공

    //여러개의 데이터를 보내는 경우
    // for (var i = 0; i < 5; i++) {
    //   resData.body.OutBlock1.push({
    //     name: "홍길동" + i,
    //     sex: 1,
    //     age: 20000 + i,
    //   });
    // }
  } else if (data.header.query_name == "registUser") {
    resData = {
      //클라이언트에서 보낸 헤더값을 그대로 다시 응답데이터에 셋팅한다.
      header: {
        packet_id: data.header.packet_id,
        query_name: data.header.query_name,
        error_code: 1000,
      },
      body: {
        //이곳은 전문에 따라 다르게 응답값을 셋팅해 준다.
        OutBlock1: [],
      },
    };
    const { name, nickname, career_period, graduate, introduce, id } =
      clientData;
    const serverData = resData.body.OutBlock1;

    db.query(
      `UPDATE user SET name=?, nickname=?, career_period=?, graduate=?, introduce=? WHERE id=?`,
      [name, nickname, career_period, graduate, introduce, id],
      (err, result) => {
        if (err) throw err;
        if (result !== {}) {
          db.query(
            `SELECT name, nickname, career_period, graduate, introduce FROM user WHERE id=?`,
            [id],
            (err, result) => {
              if (err) throw err;
              if (result !== {}) {
                serverData.push({
                  message: "데이터를 추가하였습니다",
                  result: result,
                });
              }
              res.json(resData);
              res.end();
            }
          );
        }
      }
    );
  }
});

module.exports = router;
