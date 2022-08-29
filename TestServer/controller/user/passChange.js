const { User } = require("../../models");

module.exports = {
  update: async (req, res) => {
    const data = req.body;

    const passChange = await User.update(
      {
        user_pwd: data.user_pwd,
      },
      {
        where: {
          // id를 토큰으로 보내서 처리
          id: id,
        },
      }
    );
  },
};
