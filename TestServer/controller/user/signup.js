const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    var data = JSON.parse(req.body.data);
    var msg = "";
    resData = null;
    res.header("Access-Control-Allow-Origin", "*");

    const { user_email, user_pwd, user_name, user_img } = req.body;

    if (!user_email || !user_pwd || !user_name)
      return res.status(420).send({ msg: "필수 항목을 작성하세요" });
    console.log(msg);
    const checkEmail = await User.findOne({
      where: { user_email },
    });

    if (checkEmail) {
      return res.status(409).send({ msg: "이미 존재하는 이메일 입니다" });
    } else {
      console.log("데이터가 추가되었습니다");
      console.log(User);

      const signup = await User.create({
        user_email: user_email,
        user_pwd: user_pwd,
        user_name: user_name,
        user_img: user_img,
      });
      await res.status(201).send({
        signup,
        msg: "회원가입이 완료되었습니다",
      });
    }
    // if (data.header.query_name == "signup") {
    //   resData = {
    //     header: {
    //       packet_id: data.header.packet_id,
    //       query_name: data.header.query_name,
    //       error_code: 1000,
    //     },
    //     body: {
    //       msg,
    //     },
    //   };
    // }
    // res.json(resData);
    // res.end();
  },
};
