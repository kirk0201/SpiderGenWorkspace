var iom = require("./io-manager");
var Define = require("./defines");
var https = require("https");
var fs = require("fs");
var ws = require("ws");

//--------------------------------------------------------------------------------------

// var options = {
//   key: fs.readFileSync("keys/server.key"),
//   cert: fs.readFileSync("keys/server.crt"),
//   //key:  fs.readFileSync('/etc/ssl/cob.asoosoft.net/cob.asoosoft.net.key'),
//   //cert: fs.readFileSync('/etc/ssl/cob.asoosoft.net/cob.asoosoft.net.crt')
// };

// var httpServer = https.createServer(options);
// httpServer.listen(Define.LISTEN_PORT);

// console.log("https server listening at " + Define.LISTEN_PORT);

//--------------------------------------------------------------------------------------

var http = require("http");

httpServer = http.createServer();
httpServer.listen(Define.LISTEN_PORT);

console.log("http server listening at " + Define.LISTEN_PORT);

var wsServer = new ws.Server({
  server: httpServer,
  //'path': '/videoRoom'
  //autoAcceptConnections: false
});

//웹소켓 서버에 접속 요청 시
/*
wsServer.on('request', function(request)
{
	var wsocket = request.accept(null, request.origin);

	iom.bindManager(wsocket);
});
*/

wsServer.on("connection", function (ws) {
  console.log("connect");

  iom.bindManager(ws);

  //heartbeat check
  ws.isAlive = true;
  ws.on("pong", function () {
    ws.isAlive = true;
  });
});

var interval = setInterval(function ping() {
  wsServer.clients.forEach(function each(ws) {
    if (!ws.isAlive) return ws.terminate();

    ws.isAlive = false;
    ws.ping(function () {});
  });
}, 30000);

/*
process.on('SIGINT', function() 
{
    console.log("Caught interrupt signal");

    process.exit();
});
*/

//------------------------------------------------------

function exitHandler(options, err) {
  var date = new Date();
  console.log("---->> process exit handler : " + date.toUTCString());

  //if (options.cleanup) console.log('clean');
  if (options.from) console.log("from : " + options.from);

  if (err) console.log(err.stack);
  if (options.exit) process.exit();
}

//do something when app is closing
process.on("exit", exitHandler.bind(null, { from: "now exit" }));

//catches ctrl+c event
process.on(
  "SIGINT",
  exitHandler.bind(null, { exit: true, from: "sigint(ctrl+c)" })
);

// catches "kill pid" (for example: nodemon restart)
process.on(
  "SIGUSR1",
  exitHandler.bind(null, { exit: true, from: "killed sigusr1" })
);
process.on(
  "SIGUSR2",
  exitHandler.bind(null, { exit: true, from: "killed sigusr2" })
);

//catches uncaught exceptions
process.on(
  "uncaughtException",
  exitHandler.bind(null, { exit: false, from: "uncaughtException" })
);
