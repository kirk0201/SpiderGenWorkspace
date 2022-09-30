const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const db_info = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

const db = {
  init: () => {
    return mysql.createConnection(db_info);
  },
  connect: (conn) => {
    conn.connect((err) => {
      if (err) console.log("MYSQL 실행 에러!" + err);
      else console.log("MYSQL 연결 성공!");
    });
  },
  disconnect: (conn) => {
    conn.end((err) => {
      if (err) console.log("MYSQL 종료에 실패했습니다" + err);
      else console.log("MYSQL을 종료하였습다");
    });
  },
};

module.exports = db;
