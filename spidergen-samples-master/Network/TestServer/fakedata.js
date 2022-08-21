let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();

let autoToday = `${year}/0${month}/${date} `;
var isImg = "https://picsum.photos/60/60";

var OutBlock2 = [
  {
    token: "abcd1234",
    Friends: [
      {
        id: 1,
        chat_img: "Assets/MainChat/Friends/민수.jpg",
        chat_name: "민수",
      },
      {
        id: 2,
        chat_img: "Assets/MainChat/Friends/철수.jpg",
        chat_name: "철수",
      },
      {
        id: 3,
        chat_img: "Assets/MainChat/Friends/동수.jpg",
        chat_name: "동수",
      },
      {
        id: 4,
        chat_img: "Assets/MainChat/Friends/고수.jpg",
        chat_name: "고수",
      },
      {
        id: 5,
        chat_img: "Assets/MainChat/Friends/하수.jpg",
        chat_name: "하수",
      },
    ],
    Chats: [
      {
        id: 1,
        chat_img: "Assets/MainChat/Friends/민수.jpg",
        chat_name: "민수",
        chat_content: [
          {
            id: 1,
            who: "민수",
            content: "당황하지 마시고 제보해주세요.",
          },
          {
            id: 2,
            who: "나",
            content: "어디로 제보를 하면 될까요?",
          },
          {
            id: 3,
            who: "민수",
            content: "웹페이지에 있는 메일로 보내주시면 됩니다.",
          },
          {
            id: 4,
            who: "나",
            content: "네 감사합니다!",
          },
        ],
      },
      {
        id: 2,
        chat_img: "Assets/MainChat/Friends/고수.jpg",
        chat_name: "고수",
        chat_content: [
          {
            id: 1,
            who: "고수",
            content: "개발 공부는 꾸준히 하셔야 합니다.",
          },
        ],
      },
      {
        id: 3,
        chat_img: "Assets/MainChat/Friends/철수.jpg",
        chat_name: "철수",
        chat_content: [
          {
            id: 1,
            who: "철수",
            content: "스파이더젠에 대해서 무엇이든 물어보세요",
          },
        ],
      },
      {
        id: 4,
        chat_img: "Assets/MainChat/Friends/동수.jpg",
        chat_name: "동수",
        chat_content: [
          {
            id: 1,
            who: "동수",
            content: "반짝반짝 멋진 아이디어를 기다립니다",
          },
        ],
      },
      {
        id: 5,
        chat_img: "Assets/MainChat/Friends/하수.jpg",
        chat_name: "하수",
        chat_content: [
          {
            id: 1,
            who: "하수",
            content: "질문좀 해도 될까요?",
          },
        ],
      },
    ],
  },
];

module.exports = OutBlock2;
