
/**
Constructor
Do not call Function in Constructor.
*/
class ChatRoomView()
{
	super();
	this.data = null;

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
	this.data = this.getContainer().getData();


	
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

function ChatRoomView*setData(data)
{

	//TODO:edit here
	console.log("ChatRoomView_data", data);
// 	this.chatList.removeAllItems();


};

function ChatRoomView*onActiveDone(isFirst)
{
	super.onActiveDone();
	this.chatList.removeAllItems();
	var data = this.getContainer().getData();
	
	this.getUserApi();

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


function ChatRoomView*onBackBtnClick(comp, info, e)
{
	//TODO:edit here
	var data = this.getContainer().getData();
	console.log("this데이터", data);
	console.log("parent",this.owner);
/*	this.rbm = new RadioBtnManager(this);
	this.onTabClick(this.friendsBtn);*/
	ANavigator.find('navigator').closePage("ChatRoomView");
	ANavigator.find('navigator').goPage("MainChatView", data);
};

function ChatRoomView*sendMsgBtnClick(comp, info, e)
{
	//TODO:edit here
	this.chatList.removeAllItems();

	this.createMsgApi();
	this.chatList.scrollToBottom();
	this.input_chatContent.setText("");
};

function ChatRoomView*onInputKeydown(comp, info, e)
{
	if(e.which ==13) 
	{
		this.chatList.removeAllItems();
		this.createMsgApi();
		this.chatList.scrollToBottom();
		this.input_chatContent.setText("");
	}
};

function ChatsRoomView*getUserApi()
{

	//TODO:edit here
	var thisObj = this;
	theApp.qm.startManager("http://192.168.0.155:3000/chat/chatlist");
	theApp.qm.sendProcessByName('chatlog', this.getContainerId(), null,
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1');
		console.log("!@$@!$@!@$!@$!@$!@$!@#!@$!@s",thisObj.data);
		blockData[0].token = thisObj.data.loginData.token;
		
	
		// 		console.log("InBlock queryData",queryData);
		// 		console.log("printQueryData@@@@@@@@@@@@",queryData.printQueryData());
	},
	function(queryData)
	{
		var blockData = queryData.getBlockData('OutBlock1');
		var chatLog = blockData[thisObj.data.select_chat].chat_log;
		thisObj.chat_img.setImage(blockData[thisObj.data.select_chat].user.user_img);
		thisObj.chat_name.setText(blockData[thisObj.data.select_chat].user.user_name);
		thisObj.TimeController(blockData[thisObj.data.select_chat].createdAt);

// 		var chatLog = [];
// 		console.log("ChatRoomViewData", blockData);
// 		blockData.map((item)=> chatLog.push(item.chat_log));
// 		console.log("ChatLog",chatLog);
		// 		queryData.printQueryData();
		// 		console.log("friendsView queryData@@@@@@@@@@@@@@:", queryData);
		thisObj.chatList.addItem('Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomItem/ChatRoomItem.lay', chatLog);
		thisObj.chatList.scrollToBottom();

	}
	);
};

function ChatsRoomView*createMsgApi()
{

	var thisObj = this;
	theApp.qm.startManager("http://192.168.0.155:3000/chat/createmsg");
	theApp.qm.sendProcessByName('chatlog', this.getContainerId(), null,
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1');
		blockData[0].token = thisObj.data.loginData.token;
		blockData[0].target_user = thisObj.data.target_user;
		blockData[0].chat_comment = thisObj.input_chatContent.getText();
		blockData[0].im_send = 1;

	},
	function(queryData)
	{
		var blockData = queryData.getBlockData('OutBlock1');
// 		var chatLog = blockData[thisObj.data.select_chat].chat_log;
// 		console.log("blockData",blockData);
/*		thisObj.chat_img.setImage(blockData[thisObj.data.select_chat].user.user_img);
		thisObj.chat_name.setText(blockData[thisObj.data.select_chat].user.user_name);
		thisObj.TimeController(blockData[thisObj.data.select_chat].createdAt);*/
	
		thisObj.chatList.addItem('Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomItem/ChatRoomItem.lay', blockData);
		thisObj.chatList.scrollToBottom();


	}
	);
};

function ChatRoomView*TimeController(time)
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

function ChatRoomView*time(hour, minutes) {
  if (hour >= 0 && hour <= 12) return `오전 ${hour}:${minutes}`;
  else return `오후 ${hour}:${minutes}`;
};
