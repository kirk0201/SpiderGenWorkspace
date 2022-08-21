
/**
Constructor
Do not call Function in Constructor.
*/
class ChatReceiveItem()
{
	super();
	this.data = null;
	//TODO:edit here

}
extends AView;


function ChatReceiveItem*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function ChatReceiveItem*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function ChatReceiveItem*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function ChatReceiveItem*setData(data)
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
