
/**
Constructor
Do not call Function in Constructor.
*/
function ChatReceiveItem()
{
	AView.call(this);
	this.data = null;
	//TODO:edit here

}
afc.extendsClass(ChatReceiveItem, AView);


ChatReceiveItem.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ChatReceiveItem.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ChatReceiveItem.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

ChatReceiveItem.prototype.setData = function(data)
{

		//TODO:edit here
	this.content.setText(data.content);
// 	var rt = this.content.offsetPos(200, 0);
// 	console.log("rt", rt);
// this.content.element.style();
/*
	var data = this.getContainer().getData();
	console.log("Roomdata",data);
	var contentLength = data[0].chat_content.length;
	console.log(this.owner);
	var n =0;
*/
// 	this.owner.addItem('Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomItem/ChatRoomItem.lay', data[0].chat_content)

/*	
	while(contentLength > n){
		console.log(n);

		this.content.setText(data[0].chat_content[n].content);
		n++;
	}
*/
	console.log("z",data);
	this.data = data;
};
