
/**
Constructor
Do not call Function in Constructor.
*/
class ChatRoomItem()
{
	super();
// 	this.data = null;
	//TODO:edit here

}
extends AView;


function ChatRoomItem*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function ChatRoomItem*onInitDone()
{
	super.onInitDone();
	

	//TODO:edit here

};

function ChatRoomItem*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function ChatRoomItem*setData(data)
{
	
	//TODO:edit here
	this.content.setText(data.content);
// 	var rt = this.content.offsetPos(200, 0);
// 	console.log("rt", rt);
console.log(this.getContainer().getView());
	if (data.who ==="나") this.flex.setStyleObj({"justify-content":'flex-end'});
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
// 	this.data = data;
};
