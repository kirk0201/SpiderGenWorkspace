const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const logger = require("morgan");

// const indexRouter = require("../routes/index");
// const userRouter = require("../routes/users.js");
const userRouter = require("../routes/user/userRoute");

const http = require("http");
const db = require("../controller/db");
const port = 4000;

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", userRouter);
// app.use("/", indexRouter);
// app.use("/users", userRouter);

// db.query(
//   `INSERT INTO user (uid, password) VALUES(?,?)`,
//   ["kirk0201", "1234"],
//   (err, result) => {
//     if (err) throw error;
//   }
// );

app.listen(port, () => {
  console.log(`서버가 성공적으로 열렸습니다 PORT: ${port}`);
});

module.exports = app;
