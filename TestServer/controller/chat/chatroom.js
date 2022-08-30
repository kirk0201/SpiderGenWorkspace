const { User } = require("../../models");
const { Friend } = require("../../models");
const { Chat } = require("../../models");

module.exports = {
  post: async (req, res) => {
    // console.log(req.body);
    const data = JSON.parse(req.body.data);
    // console.log("Chatlist-data : ", data);
    // console.log("Chatlist-data.body.InBlock1 : ", data.body.InBlock1[0]);
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

    const findUserChat = await Chat.findAll({
      where: {
        chat_room: token,
      },
      order: [["target_user", "asc"]],
      raw: true,
      nest: true,
      include: [
        {
          model: User,
          attributes: ["user_email", "user_name", "user_img"],
        },
      ],
    });

    console.log("원본", findUserChat);

    res.json(resData);
    res.end();
  },
};
