const Sequelize = require("sequelize");

module.exports = class user extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_pwd: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_comment: {
          type: Sequelize.STRING,
        },
        user_img: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Friend, { foreignKey: "friend_id", sourceKey: "id" });
    db.User.hasMany(db.Friend, { foreignKey: "user_id", sourceKey: "id" });
    db.User.hasMany(db.Chat, { foreignKey: "chat_room", sourceKey: "id" });
    db.User.hasMany(db.Chat, { foreignKey: "chat_userid", sourceKey: "id" });
  }
};

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// const chat = require("./Chat");
// const friend = require("./Friend");

// module.exports = (sequelize, Sequelize) => {
//   const User = sequelize.define(
//     "User",
//     {
//       user_email: {
//         type: DataTypes.STRING,
//       },
//       user_pwd: {
//         type: DataTypes.STRING,
//       },
//       user_name: {
//         type: DataTypes.STRING,
//       },
//       user_comment: {
//         type: DataTypes.STRING,
//       },
//       user_img: {
//         type: DataTypes.STRING,
//       },
//     },
//     {
//       sequelize,
// timestamps: false,
// charset: "utf8mb4",
// collate: "utf8mb4_general_ci",
//     }
//   );
//   return User;
// };

// User.hasMany(friend, { foreignKey: "friend_id", sourceKey: "id" });
// User.hasMany(friend, { foreignKey: "user_id", sourceKey: "id" });
// User.hasMany(chat, { foreignKey: "chat_room", sourceKey: "id" });
// User.hasMany(chat, { foreignKey: "chat_userid", sourceKey: "id" });
