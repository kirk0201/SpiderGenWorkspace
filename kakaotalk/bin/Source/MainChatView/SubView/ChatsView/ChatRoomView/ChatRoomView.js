
/**
Constructor
Do not call Function in Constructor.
*/
function ChatRoomView()
{
	AView.call(this);


	//TODO:edit here

}
afc.extendsClass(ChatRoomView, AView);


ChatRoomView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	
	//TODO:edit here

};

ChatRoomView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	


	
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

ChatRoomView.prototype.setData = function(data)
{

	//TODO:edit here
	console.log("ChatRoomView_data", data);
// 	this.chatList.removeAllItems();


};

ChatRoomView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this);
	this.chatList.removeAllItems();
	var data = this.getContainer().getData();

	this.loginApi(data);
/*	var data = this.getContainer().getData();
	var choice = data.choice;
	var chatInfo = data.loginData[0].Chats[choice];
	var chat = data.loginData[0].Chats[choice].chat_content;
	console.log("Chat", chat);
	console.log("채팅방 이름",chatInfo.chat_name);
	this.chat_name.setText(chatInfo.chat_name);
	this.chat_img.setImage(chatInfo.chat_img);
	this.chatList.addItem("Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomItem/ChatRoomItem.lay", chat);*/
	//TODO:edit here

};


ChatRoomView.prototype.onBackBtnClick = function(comp, info, e)
{
	//TODO:edit here
	var data = this.getContainer().getData();
	console.log("this데이터", data);
	ANavigator.find('navigator').goPage("MainChatView",data);
};

ChatRoomView.prototype.sendMsgBtnClick = function(comp, info, e)
{
	//TODO:edit here
	var msg = this.input_chatContent.getText();
	var arr = [{who: "나", content:msg, time: time()}];
	if (msg === '') return;
	this.chatList.addItem('Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomItem/ChatRoomItem.lay', arr);
	this.chatList.scrollToBottom();
	this.input_chatContent.setText("");
};

ChatRoomView.prototype.onInputKeydown = function(comp, info, e)
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

ChatRoomView.prototype.loginApi = function(data)
{
	this.token = this.getContainer().getData().loginData.token;
	console.log("LoginApi_data",data);
// 	console.log("ChatsView@@@@@@",this.token);
	//TODO:edit here
	var thisObj = this;
	theApp.qm.startManager("http://192.168.0.155:3000/chat/chatlist");
	theApp.qm.sendProcessByName('friend', this.getContainerId(), null,
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1');
		blockData[0].token = thisObj.token;
	
		// 		console.log("InBlock queryData",queryData);
		// 		console.log("printQueryData@@@@@@@@@@@@",queryData.printQueryData());
	},
	function(queryData)
	{
		var blockData = queryData.getBlockData('OutBlock1');
		var chatLog = blockData[data.select_chat].chat_log;
		console.log(blockData);
		thisObj.chat_img.setImage(blockData[data.select_chat].user.user_img);
		thisObj.chat_name.setText(blockData[data.select_chat].user.user_name);
		thisObj.TimeController(blockData[data.select_chat].createdAt);

// 		var chatLog = [];
// 		console.log("ChatRoomViewData", blockData);
// 		blockData.map((item)=> chatLog.push(item.chat_log));
// 		console.log("ChatLog",chatLog);
		// 		queryData.printQueryData();
		// 		console.log("friendsView queryData@@@@@@@@@@@@@@:", queryData);
		thisObj.chatList.addItem('Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomItem/ChatRoomItem.lay', chatLog);

	}
	);
};

ChatRoomView.prototype.TimeController = function(time)
{
	//TODO:edit here
	let dayAndTime = time.split("T");
	let day = dayAndTime[0];
	let isTime = dayAndTime[1].slice(0,5);
	let hour = dayAndTime[1].slice(0,5).slice(0,2);
	let minutes = dayAndTime[1].slice(0,5).slice(2, 5);
// 	console.log("isTime", minutes);
	isTime = this.time(hour, minutes);
	console.log("isTime", isTime);
	return { dayAndTime, day, isTime};
};

ChatRoomView.prototype.time = function(hour, minutes) {
  if (hour >= 0 && hour <= 12) return `오전 ${hour}:${minutes}`;
  else return `오후 ${hour}:${minutes}`;
};
