const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const user = require("./User");

const Friend = sequelize.define(
  "Friend",
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    friend_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    createdAt: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

Friend.belongsTo(user, { foreignKey: "friend_id", targetKey: "id" });
Friend.belongsTo(user, { foreignKey: "user_id", targetKey: "id" });

module.exports = Friend;
