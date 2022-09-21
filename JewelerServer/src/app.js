const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("../routes/index");
const userRouter = require("../routes/users.js");

const http = require("http");
const port = 4000;

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", indexRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`서버가 성공적으로 열렸습니다 PORT: ${port}`);
});

module.exports = app;
