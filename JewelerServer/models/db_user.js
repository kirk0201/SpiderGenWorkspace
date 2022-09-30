const mysql = require("../config/mysql");
const db = mysql.init();

mysql.connect(db);

const db_user = {
  userSignUp: (uid, cb) => {
    const sql = `SELECT uid FROM user WHERE uid = ?`;
    const param = [uid];
    db.query(sql, param, (err, row, fields) => {
      if (err) throw new Error(err);
      else {
        console.log("db.글리스트");
        console.log(row);
        cb(row);
      }
    });
  },
};

// 중복된 회원 아이디
// db.query(`SELECT uid FROM user where uid=?`, [uid], (err, result) => {
//   console.log("result", result.length);
//   if (err) throw err;
//   if (result.length !== []) {
//     serverData.push({
//       message: "이미 존재하는 회원입니다",
//       result: false,
//     });
//   } else if (result.length === 0) {
//     db.query(
//       `INSERT INTO user (uid, password) VALUES(?,?)`,
//       [uid, password2],
//       (err, result) => {
//         if (err) throw err;
//         console.log(result);
//       }
//     );
//     serverData.push({
//       message: "회원가입에 성공하였습니다",
//       result: true,
//     });
//   }
//   res.json(resData);
//   res.end();
// });

module.exports = db_user;
