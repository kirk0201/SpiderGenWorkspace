const { User } = require("../../models");
const { Friend } = require("../../models");

module.exports = {
  post: async (req, res) => {
    // console.log(req.body);
    const data = JSON.parse(req.body.data);
    // console.log(data);
    // console.log(data.body.InBlock1[0]);
    const { token } = data.body.InBlock1[0];

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

    let friendList = await Friend.findAll({
      where: {
        user_id: token,
      },
    });
    // let userInfo = await User.findOne({
    //     where: {
    //         id:
    //     }
    // })
    // console.log("friendList", friendList);
    const infoArr = [];

    for (let user of friendList) {
      //   console.log("user", user);
      const data = user.dataValues;
      let info = await User.findOne({
        where: {
          id: data.id,
        },
      });
      infoArr.push(info.dataValues);
    }
    // console.log("INFOARR", infoArr);
    resData.body.OutBlock1 = infoArr;
    // 특정 ID의 친구 ID 목록
    // await friendList.forEach((user) => {
    //   console.log(user.dataValues);
    //   friendArr.push(user.dataValues.friend_id);
    // });
    // console.log(friendArr);

    // const friendLoop = friendArr.forEach(async (user) => {
    //   const friendInfo = await User.findOne({
    //     where: {
    //       id: user,
    //     },
    //   });
    //   infoArr.push(friendInfo.dataValues);
    // });
    // await console.log("친구목록", infoArr);
    // await console.log("친구목록@@@@@@@@@", friendLoop);
    res.json(resData);
    res.end();
  },
};
