"use strict";

const Sequelize = require("sequelize");

const Chat = require("./Chat");
const Friend = require("./Friend");
const User = require("./User");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Friend = Friend;
db.Chat = Chat;

User.init(sequelize);
Friend.init(sequelize);
Chat.init(sequelize);

module.exports = db;
