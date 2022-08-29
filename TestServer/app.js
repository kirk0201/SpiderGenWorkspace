const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");
const createError = require("http-errors");
const morgan = require("morgan");
const cookie = require("cookie-parser");
const session = require("express-session");
const db = require("./models");
const app = express();
const port = 3000;

const userRouter = require("./routes/user");
const friendRouter = require("./routes/friend");

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Sequelize 연결성공");
  })
  .catch((err) => {
    console.error(`연결실패 - ${err}`);
  });
app.use(
  cors({
    origin: "*",
  })
);
// 1. morgan은 요청과 응답에 대한 내역을 실시간으로 콘솔에 나타냄
app.use(morgan("dev"));

/** 2. cookie-parser
 * 쉽게 쿠키값을 가져오거나 설정 가능
 * 미들웨어 설정 후
 * app.use(cookie());
 * 응답을 cookie()함수를 사용한다
 * app.get('/', (req, res, next) => {
 *  res.sendFile(`${__dirname}/index.html);
 *
 *  res.cookie('id', 'cliel', {
 *      expires: null,
 *      httpOnly: true,
 *      path: '/'
 *      signed: true //아래 설명
 * })
 * })
 * 설정한 쿠키값을 확인하려면 req.cookies(ex] console.log(req.cookiees.id))를 사용하고, 삭제는 clearCookie()함수를 사용,
 * 보안상 암호화가 필요하면 쿠키 미들웨어 설정시 키에 임의의 문자열을 생성 (ex: app.use(cookie('abcd')));
 * 쿠키 생성시 signed 옵션을 true를 하여 암호화된 값을 쿠키값으로 설정 가능
 */
app.use(cookie());

/** 3. body-parser, json
 * Express 4.x ~ 4.16 이전 버전인 경우 (body-parser 사용)
 *  npm i body-parser를 사용하여
 *  const bodyParser = require('body-parser');
 *  app.use(body-parser.json());
 *  or
 *  설치 없이 express 내부 모듈로 사용
 *  app.use(express.urlencoded({ extended: true }));
 *
 * json형태의 데이터를 다루기 위해서는 아래 방법으로 이용
 * Express 4.16 이후 버전은 express.json()이 내장되어 use를 설정하여 쉽게 req.body를 받을 수 있다
 *
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** 4. Static
 *  실제 요청경로와 응답 파일 위치가 다른경우
 *  아래는 /user/login.html을 요청했을때 실제 login폴더 안에 login.html을 읽어 응답함
 *  ex: app.use('/user', express.static(path.join(__dirname, 'login')));
 *  요청에 의한 정적 파일 제공
 */

// app.use(express.static(path.join(__dirname, "public")));

/** 5. session
 *  npm i express-session
 *  세션 사용을 위한 설정
 *  option({
 *      resave: 세션에 수정사항이 없어도 다시 저장할지 여부
 *      saveUninitialized: 세션에 저장할 내용이 없더라도 null로 저장 여부
 *      secret: 쿠키 저장실 필요한 암호키
 *      name: 세션 이름
 *  })
 * 세션 저장시 session.[이름]=값 형태로 저장, 가져올떄도 session.[이름] 단 session.id는 사용하면 안됨
 * app.get('/', (req, res, next) => {
 *      req.session.displayName = "LG";
 *      req.session.save();
 * app.get("/test", (req, res, next) => {
 *      res.send(`<h1>${req.session.displayName}</h1>`)
 *  })
 * })
 * session.destory()함수를 호출해 모든 세션 제거 가능
 */
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "abcd",
    name: "abcd_name",
  })
);

/** 6. dotenv
 *  프로젝트 환경변수 만들기
 *  MY_KEY = 123456env
 *  URL = naver.com
 *
 *  불러올때
 *  const env = require('dotenv');
 *  env.config();
 *
 *  process.env.[키값]으로 불러옴
 */
app.use("/user", userRouter);
app.use("/friend", friendRouter);
app.get("/", (req, res) => {
  //   console.log(dirname);
  res.send(`Hello World !!!!!!`);
});

// app.use((req, res, next) => {
//   next(createError(404));
// });

// http.createServer(app).listen(port);
app.listen(port, () => {
  console.log(
    `서버가 성공적으로 열었습니다 포트번호: http://localhost:${port}`
  );
});

module.exports = app;
