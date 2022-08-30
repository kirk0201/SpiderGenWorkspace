"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("users", [
      {
        user_email: "kirk0201",
        user_pwd: "1234",
        user_name: "김재현",
        user_comment: "",
        user_img: "Assets/MainChat/Friends/재현.jpg",
      },
      {
        user_email: "mine6546",
        user_pwd: "1234",
        user_name: "김경태",
        user_comment: "",
        user_img: "Assets/MainChat/Friends/동수.jpg",
      },
      {
        user_email: "skylove",
        user_pwd: "1234",
        user_name: "김기훈",
        user_comment: "",
        user_img: "Assets/MainChat/Friends/민수.jpg",
      },
      {
        user_email: "gallove",
        user_pwd: "1234",
        user_name: "김대섭",
        user_comment: "",
        user_img: "Assets/MainChat/Friends/철수.jpg",
      },
      {
        user_email: "test",
        user_pwd: "1234",
        user_name: "김재현",
        user_comment: "",
        user_img: "Assets/MainChat/Friends/하수.jpg",
      },
    ]);

    await queryInterface.bulkInsert("friends", [
      {
        user_id: 1,
        friend_id: 2,
      },
      {
        user_id: 1,
        friend_id: 3,
      },
      {
        user_id: 1,
        friend_id: 4,
      },
      {
        user_id: 1,
        friend_id: 5,
      },
    ]);

    await queryInterface.bulkInsert("chats", [
      {
        chat_room: 1,
        target_user: 4,
        chat_comment: "안녕하세요",
        im_send: true,
        createdAt: "2022-08-30",
        updatedAt: "2022-08-30",
      },
      {
        chat_room: 1,
        target_user: 4,
        chat_comment: "반갑습니다",
        im_send: false,
        createdAt: "2022-08-30",
        updatedAt: "2022-08-30",
      },
      {
        chat_room: 2,
        target_user: 1,
        chat_comment: "반갑습니다",
        im_send: true,
        createdAt: "2022-08-30",
        updatedAt: "2022-08-30",
      },
      {
        chat_room: 2,
        target_user: 1,
        chat_comment: "안녕하세요",
        im_send: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_room: 4,
        target_user: 2,
        chat_comment: "개발 실력이 늘기 위해서는 어떻게 해야 할까요?",
        im_send: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_room: 4,
        target_user: 2,
        chat_comment: "개발 공부는 꾸준히 하셔야 합니다",
        im_send: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_room: 1,
        target_user: 3,
        chat_comment: "스파이더젠에 대해서 무엇이든 물어보세요",
        im_send: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_room: 1,
        target_user: 2,
        chat_comment: "반짝반짝 멋진 아이디어를 기다립니다",
        im_send: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_room: 1,
        target_user: 5,
        chat_comment: "질문 좀 드려도 될까요?",
        im_send: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_room: 1,
        target_user: 2,
        chat_comment: "다양한 시도를 해보세요",
        im_send: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
