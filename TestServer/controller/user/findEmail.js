const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const findEmail = await User.findOne({
      where: {
        user_email: req.body.user_email,
      },
    });
    findEmail
      ? await res
          .status(200)
          .send({ findEmail, msg: "이메일 찾기에 성공하였습니다" })
      : await res.status(404).send("존재하지 않는 회원 입니다");
  },
};
