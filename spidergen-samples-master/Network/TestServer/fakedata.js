let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();

let autoToday = `${year}/0${month}/${date} `;
OutBlock1: [
  {
    token: "abcd1234",
    Friends: [
      {
        id: 1,
        chat_img: isImg,
        chat_name: "민수",
      },
      {
        id: 2,
        chat_img: isImg,
        chat_name: "철수",
      },
      {
        id: 3,
        chat_img: isImg,
        chat_name: "동수",
      },
      {
        id: 4,
        chat_img: isImg,
        chat_name: "고수",
      },
      {
        id: 5,
        chat_img: isImg,
        chat_name: "하수",
      },
    ],
    Chats: [
      {
        id: 1,
        img: isImg,
        chat_name: "민수",
        chat_content: {
          you: [
            {
              id: 1,
              chat: "당황하지 마시고 제보해주세요",
              time: "8월18일",
            },
          ],
        },
      },
      {
        id: 2,
        img: isImg,
        chat_name: "고수",
        chat_content: "개발 공부는 꾸준히 하셔야 합니다",
      },
      {
        id: 3,
        img: isImg,
        chat_name: "철수",
        chat_content: "스파이더젠에 대해서 무엇이든 물어보세요",
      },
      {
        id: 4,
        img: isImg,
        chat_name: "동수",
        chat_content: "반짝반짝 멋진 아이디어를 기다립니다",
      },
      {
        id: 5,
        img: isImg,
        chat_name: "하수",
        chat_content: "질문좀 해도 될까요?",
      },
    ],
  },
];

module.exports = { OutBlock1 };
