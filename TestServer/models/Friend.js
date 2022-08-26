const Sequelize = require("sequelize");

module.exports = class friend extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        friend_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
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
  }
  static associate(db) {
    db.Friend.belongsTo(db.User, { foreignKey: "friend_id", targetKey: "id" });
    db.Friend.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
  }
};

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// const user = require("./User");

// module.exports = (sequelize, Sequelize) => {
//   const Friend = sequelize.define(
//     "Friend",
//     {
// user_id: {
//   type: DataTypes.INTEGER,
// },
// friend_id: {
//   type: DataTypes.INTEGER,
// },
//     },
// {
//   sequelize,
//   timestamps: false,
//   createdAt: true,
//   charset: "utf8mb4",
//   collate: "utf8mb4_general_ci",
// }
//   );
//   return Friend;
// };

// Friend.belongsTo(user, { foreignKey: "friend_id", targetKey: "id" });
// Friend.belongsTo(user, { foreignKey: "user_id", targetKey: "id" });
