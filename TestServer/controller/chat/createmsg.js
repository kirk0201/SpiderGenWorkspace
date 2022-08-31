const { User } = require("../../models");
const { Friend } = require("../../models");
const { Chat } = require("../../models");

module.exports = {
  post: async (req, res) => {
    // console.log(req.body);
    const data = JSON.parse(req.body.data);
    // console.log("Chatlist-data : ", data);
    // console.log("Chatlist-data.body.InBlock1 : ", data.body.InBlock1[0]);
    const { token, target_user, chat_comment, im_send } = data.body.InBlock1[0];
    console.log(token, target_user, chat_comment, im_send);
    // console.log("@@@@@@@@@@@@@@@@select_chat@@@@@@@@@@@@@@@@@@", select_chat);
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
    if (chat_comment) {
      const createMsg = await Chat.create({
        chat_room: token,
        target_user: target_user,
        chat_comment: chat_comment,
        im_send: im_send,
      });
      resData.body.OutBlock1 = createMsg;

      const newChatLog = await Chat.findAll({
        where: {
          chat_room: token,
          target_user: target_user,
        },
        raw: true,
        nest: true,
        include: {
          model: User,
          attributes: ["user_email", "user_name", "user_img"],
        },
      });
      resData.body.OutBlock1 = newChatLog;
    }

    console.log(resData);
    res.json(resData);
    res.end();
  },
};
