"use strict";

const Sequelize = require("sequelize");

const chat = require("./chat");
const friend = require("./friend");
const user = require("./user");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = user;
db.Friend = friend;
db.Chat = chat;

user.init(sequelize);
friend.init(sequelize);
chat.init(sequelize);

user.associate(db);
friend.associate(db);
chat.associate(db);

module.exports = db;
