
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
	var chat = this.getContainer().getData()[0];
	this.chat_name.setText(chat.chat_name);
	this.chat_img.setImage(chat.chat_img);
	
	var data = this.getContainer().getData()[0].chat_content;
	console.log("chatroomview data", chat);
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
	this.chatList.addItem("Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomItem/ChatRoomItem.lay", data);

};

ChatRoomView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this);
	//TODO:edit here

};

ChatRoomView.prototype.onBackBtnClick = function(comp, info, e)
{

	//TODO:edit here
	ANavigator.find('navigator').goPrevPage();
};
