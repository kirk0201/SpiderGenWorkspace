var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "160206",
  database: "jewelerdb",
  port: "3306",
});
db.connect();

module.exports = db;
