const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("req.body.data", JSON.parse(req.body.data));
    var data = JSON.parse(req.body.data);

    const { user_email, user_pwd, user_name, user_img } = data.body.InBlock1[0];
    console.log(user_email);

    // Body => OutBlock1
    resData = {
      header: {
        packet_id: data.header.packet_id,
        query_name: data.header.query_name,
        error_code: 1000,
      },
      body: {
        OutBlock1: {},
      },
    };

    if (!user_email || !user_pwd || !user_name) {
      resData.body.OutBlock1.msg = "필수 항목(*)을 작성하세요";
    } else {
      const checkEmail = await User.findOne({
        where: { user_email },
      });
      if (checkEmail) {
        resData.body.OutBlock1.msg = `이미 존재하는 이메일 입니다
                                      다시 시도해주세요`;
      } else {
        const signup = await User.create({
          user_email: user_email,
          user_pwd: user_pwd,
          user_name: user_name,
          user_img: user_img,
        });
        resData.body.OutBlock1.msg = "회원가입을 성공했습니다";
        // await res.status(201).send({
        //   signup,
        //   msg: "회원가입이 완료되었습니다",
        // });
      }
    }

    // if (!user_email || !user_pwd || !user_name) {
    //   return res
    //     .status(420)
    //     .json((resData.body.OutBlock1[0] = { msg: "필수 항목을 작성하세요" }));
    // }
    // console.log(resData);
    // const checkEmail = await User.findOne({
    //   where: { user_email },
    // });

    // if (checkEmail) {
    //   return res.status(409).send({ msg: "이미 존재하는 이메일 입니다" });
    // } else {
    //   console.log("데이터가 추가되었습니다");
    //   console.log(User);

    //   const signup = await User.create({
    //     user_email: user_email,
    //     user_pwd: user_pwd,
    //     user_name: user_name,
    //     user_img: user_img,
    //   });
    //   await res.status(201).send({
    //     signup,
    //     msg: "회원가입이 완료되었습니다",
    //   });
    // }

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
    console.log("resData", resData.body.OutBlock1);
    res.json(resData);
    res.end();
  },
};
