const db = require("../../models/db_user");

exports.signUp = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  var inData = JSON.parse(req.body.data);
  var { body, header } = inData;
  var data = body.InBlock1[0];

  console.log("inData", inData);
  console.log(data);

  resData = {
    header: {
      packet_id: header.packet_id,
      query_name: header.query_name,
      error_code: 1000,
    },
    body: {
      OutBlock1: [],
    },
  };

  const { OutBlock1: outData } = resData.body;

  if (header.query_name == "signUp") {
    const { uid, password1, password2 } = data;
    // console.log(uid, password1, password2);
  }
};

// router.post("/", async function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     var data = JSON.parse(req.body.data);

//     const clientData = data.body.InBlock1[0];

//     console.log(clientData);

//     var resData = null;
//     if (data.header.query_name == "signUp") {
//         const { uid, password1, password2 } = clientData;

//         resData = {
//           //클라이언트에서 보낸 헤더값을 그대로 다시 응답데이터에 셋팅한다.
//           header: {
//             packet_id: data.header.packet_id,
//             query_name: data.header.query_name,
//             error_code: 1000,
//           },
//           body: {
//             //이곳은 전문에 따라 다르게 응답값을 셋팅해 준다.
//             OutBlock1: [],
//           },
//         };
//         const serverData = resData.body.OutBlock1;

//         // 비밀번호1,2가 서로 다를 경우
//         if (clientData.password1 !== clientData.password2) {
//           serverData.push({
//             message: "비밀번호를 확인해주세요",
//             result: false,
//           });
//         }

//         // 중복된 회원 아이디
//         db.query(`SELECT uid FROM user where uid=?`, [uid], (err, result) => {
//           console.log("result", result.length);
//           if (err) throw err;
//           if (result.length !== []) {
//             serverData.push({
//               message: "이미 존재하는 회원입니다",
//               result: false,
//             });
//           } else if (result.length === 0) {
//             db.query(
//               `INSERT INTO user (uid, password) VALUES(?,?)`,
//               [uid, password2],
//               (err, result) => {
//                 if (err) throw err;
//                 console.log(result);
//               }
//             );
//             serverData.push({
//               message: "회원가입에 성공하였습니다",
//               result: true,
//             });
//           }
//           res.json(resData);
//           res.end();
//         });
//       }
//     })
