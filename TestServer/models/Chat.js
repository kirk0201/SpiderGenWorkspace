const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const user = require("./User");

const Chat = sequelize.define(
  "Chat",
  {
    chat_room: {
      type: DataTypes.INTEGER,
    },
    chat_comment: {
      type: DataTypes.INTEGER,
    },
    chat_userid: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

Chat.belongsTo(user, { foreignKey: "chat_room", targetKey: "id" });
Chat.belongsTo(user, { foreignKey: "chat_userid", targetKey: "id" });

module.exports = Chat;
