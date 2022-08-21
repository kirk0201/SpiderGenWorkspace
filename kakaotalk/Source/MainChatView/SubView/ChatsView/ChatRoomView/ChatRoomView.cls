
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

function ChatRoomView*onActiveDone(isFirst)
{
	super.onActiveDone();
	//TODO:edit here

};

function ChatRoomView*onBackBtnClick(comp, info, e)
{

	//TODO:edit here
	ANavigator.find('navigator').goPrevPage();
};
