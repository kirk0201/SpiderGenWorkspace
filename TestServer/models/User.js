const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const chat = require("./Chat");
const friend = require("./Friend");

const User = sequelize.define(
  "User",
  {
    user_email: {
      type: DataTypes.STRING,
    },
    user_pwd: {
      type: DataTypes.STRING,
    },
    user_name: {
      type: DataTypes.STRING,
    },
    user_comment: {
      type: DataTypes.STRING,
    },
    user_img: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

User.hasMany(friend, { foreignKey: "friend_id", sourceKey: "id" });
User.hasMany(friend, { foreignKey: "user_id", sourceKey: "id" });
User.hasMany(chat, { foreignKey: "chat_room", sourceKey: "id" });
User.hasMany(chat, { foreignKey: "chat_userid", sourceKey: "id" });

module.exports = User;
