
/**
Constructor
Do not call Function in Constructor.
*/
class ChatRoomView()
{
	super();


	//TODO:edit here

}
extends AView;


function ChatRoomView*init(context, evtListener)
{
	super.init(context, evtListener);
	
	//TODO:edit here

};

function ChatRoomView*onInitDone()
{
	super.onInitDone();


	
// 	console.log("data",data);
// 	console.log("chatroomview data", chat.chat_content);
// 	var n = 0;
/*	while(data.length > n){
	console.log(n);
	console.log(data[n]);
	if(data[n].who ==="나"){
		console.log(data.filter((itm)=> itm.who ==="나"));
		console.log(data.filter((itm)=> itm.who !=="나"));

		this.chatList.addItem("Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatSendItem/ChatSendItem.lay", data.filter((itm)=> itm.who ==="나"));
	} else {
		this.chatList.addItem("Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatReceiveItem/ChatReceiveItem.lay", data.filter((itm)=> itm.who !=="나"));
	} 
		n++;
	}*/

};

function ChatRoomView*onActiveDone(isFirst)
{
	super.onActiveDone();
	this.chatList.removeAllItems();
	var data = this.getContainer().getData();
	var choice = data.choice;
	var chatInfo = data.loginData[0].Chats[choice];
	var chat = data.loginData[0].Chats[choice].chat_content;
	console.log("Chat", chat);
	console.log("채팅방 이름",chatInfo.chat_name);
	this.chat_name.setText(chatInfo.chat_name);
	this.chat_img.setImage(chatInfo.chat_img);
	this.chatList.addItem("Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomItem/ChatRoomItem.lay", chat);
	//TODO:edit here

};

function ChatRoomView*onBackBtnClick(comp, info, e)
{
	//TODO:edit here
	var data = this.getContainer().getData();
	console.log("this데이터", data);
	ANavigator.find('navigator').goPage("MainChatView",data);
};
let today = new Date();
let hour = today.getHours();
let minutes = today.getMinutes();
function time() {
  if (hour >= 0 && hour <= 12) return `오전 ${hour}:${minutes}`;
  else return `오후 ${hour}:${minutes}`;
}

function ChatRoomView*sendMsgBtnClick(comp, info, e)
{
	//TODO:edit here
	var msg = this.input_chatContent.getText();
	var arr = [{who: "나", content:msg, time: time()}];
	if (msg === '') return;
	this.chatList.addItem('Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomItem/ChatRoomItem.lay', arr);
	this.chatList.scrollToBottom();
	this.input_chatContent.setText("");
};

function ChatRoomView*onInputKeydown(comp, info, e)
{
	if(e.which ==13) 
	{
		var msg = this.input_chatContent.getText();
		var arr = [{who: "나", content:msg, time: time()}];
		if (msg === '') return;
		this.chatList.addItem('Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomItem/ChatRoomItem.lay', arr);
		this.chatList.scrollToBottom();
		this.input_chatContent.setText("");
	}
};
