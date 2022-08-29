const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const data = JSON.parse(req.body.data);
    // console.log(data);
    // console.log(data.body.InBlock1[0]);
    const { user_email, user_pwd } = data.body.InBlock1[0];

    resData = {
      header: {
        packet_id: data.header.packet_id,
        query_name: data.header.query_name,
        error_code: 1000,
      },
      body: {},
    };

    const findAccount = await User.findOne({
      where: { user_email, user_pwd },
    });

    if (findAccount) {
      resData.body.OutBlock2 = {};
      resData.body.OutBlock2.msg = "로그인에 성공했습니다";
      resData.body.OutBlock2.token = findAccount.dataValues.id;
      //   resData.body.OutBlock1.token = findAccount.user.dataValues.id;
      //   console.log("findAccount", findAccount.dataValues.id);
    } else {
      resData.body.OutBlock1 = {};
      resData.body.OutBlock1.msg = "아이디와 비밀번호를 확인하세요";
    }
    // console.log("findAccount", findAccount);
    res.json(resData);
    res.end();
  },
};
