const Sequelize = require("sequelize");

module.exports = class chat extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        chat_room: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        target_user: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        chat_comment: {
          type: Sequelize.CHAR,
          allowNull: false,
        },
        im_send: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Chat.belongsTo(db.User, { foreignKey: "chat_room", targetKey: "id" });
    db.Chat.belongsTo(db.User, { foreignKey: "target_user", targetKey: "id" });
  }
};

// const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("sqlite::memory:");

// const user = require("./User");

// module.exports = (sequelize, Sequelize) => {
//   const Chat = sequelize.define(
//     "Chat",
//     {
// chat_room: {
//   type: DataTypes.INTEGER,
// },
// chat_comment: {
//   type: DataTypes.INTEGER,
// },
// chat_userid: {
//   type: DataTypes.INTEGER,
// },
//     },
// {
//   sequelize,
//   timestamps: false,
//   charset: "utf8mb4",
//   collate: "utf8mb4_general_ci",
// }
//   );
//   return Chat;
// };

// Chat.associate = function () {
// Chat.belongsTo(user, { foreignKey: "chat_room", targetKey: "id" });
// Chat.belongsTo(user, { foreignKey: "chat_userid", targetKey: "id" });
// };
