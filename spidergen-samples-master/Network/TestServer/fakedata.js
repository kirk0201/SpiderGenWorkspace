let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();
let hour = today.getHours();
let minutes = today.getMinutes();
var weekday = new Array();
weekday[0] = "일요일";
weekday[1] = "월요일";
weekday[0] = "화요일";
weekday[0] = "수요일";
weekday[0] = "목요일";
weekday[0] = "금요일";
weekday[0] = "토요일";

let autoToday = `${year}년 ${month}월 ${date}일 ${weekday[day]}`;

function time() {
  if (hour >= 0 && hour <= 12) return `오전 ${hour}:${minutes}`;
  else return `오후 ${hour}:${minutes}`;
}
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
            date: autoToday,
            chat_name: "민수",
          },
          {
            id: 1,
            who: "민수",
            content:
              "당황하지 마시고 제보해주세요ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
            chat_img: "Assets/MainChat/Friends/민수.jpg",
            time: `오후 1:00`,
          },
          {
            id: 2,
            who: "나",
            content: "어디로 제보를 하면 될까요?",
            time: `오후 1:25`,
          },
          {
            id: 3,
            who: "민수",
            content: "웹페이지에 있는 메일로 보내주시면 됩니다.",
            chat_img: "Assets/MainChat/Friends/민수.jpg",
            time: `오후 1:27`,
          },
          {
            id: 4,
            who: "나",
            content: "네 감사합니다!",
            time: time(),
          },
        ],
      },
      {
        id: 2,
        chat_img: "Assets/MainChat/Friends/고수.jpg",
        chat_name: "고수",
        chat_content: [
          {
            date: autoToday,
            chat_name: "고수",
          },
          {
            id: 1,
            who: "나",
            content: "개발 실력이 늘기 위해서는 어떻게 해야 할까요?",
            time: `오전 8:30`,
          },
          {
            id: 2,
            who: "고수",
            content: "개발 공부는 꾸준히 하셔야 합니다.",
            chat_img: "Assets/MainChat/Friends/고수.jpg",
            time: time(),
          },
        ],
      },
      {
        id: 3,
        chat_img: "Assets/MainChat/Friends/철수.jpg",
        chat_name: "철수",
        chat_content: [
          {
            date: autoToday,
            chat_name: "철수",
            time: `오후 5:20`,
          },
          {
            id: 1,
            who: "철수",
            content: "스파이더젠에 대해서 무엇이든 물어보세요",
            chat_img: "Assets/MainChat/Friends/철수.jpg",
            time: time(),
          },
        ],
      },
      {
        id: 4,
        chat_img: "Assets/MainChat/Friends/동수.jpg",
        chat_name: "동수",
        chat_content: [
          {
            date: autoToday,
            chat_name: "동수",
            time: `오전 10:12`,
          },
          {
            id: 1,
            who: "동수",
            content: "반짝반짝 멋진 아이디어를 기다립니다",
            chat_img: "Assets/MainChat/Friends/동수.jpg",
            time: time(),
          },
        ],
      },
      {
        id: 5,
        chat_img: "Assets/MainChat/Friends/하수.jpg",
        chat_name: "하수",
        chat_content: [
          {
            date: autoToday,
            chat_name: "하수",
            time: `오후 4:03`,
          },
          {
            id: 1,
            who: "하수",
            content: "질문좀 해도 될까요?",
            chat_img: "Assets/MainChat/Friends/하수.jpg",
            time: time(),
          },
        ],
      },
    ],
  },
];

module.exports = OutBlock2;
