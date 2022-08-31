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
    const unique = new Set();
    const lastList = [];

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
    // console.log("findUserChat", test);

    findUserChat.map((chat) => unique.add(chat.target_user));

    for (let itm of unique) {
      const selectOne = await Chat.findOne({
        where: {
          chat_room: token,
          target_user: itm,
        },
        order: [["id", "desc"]],
        raw: true,
        nest: true,
        include: [
          {
            model: User,
            attributes: ["user_email", "user_name", "user_img"],
          },
        ],
      });

      const chatLog = await Chat.findAll({
        where: {
          chat_room: token,
          target_user: itm,
        },
        raw: true,
        nest: true,
        include: {
          model: User,
          attributes: ["user_email", "user_name", "user_img"],
        },
      });

      //   console.log("selecOne", selectOne);
      selectOne.chat_log = chatLog;
      lastList.push(selectOne);
    }
    resData.body.OutBlock1 = lastList;

    console.log(lastList);
    // console.log("resData:@@@@@@@@@@@ ", resData);

    res.json(resData);
    res.end();
  },
};
