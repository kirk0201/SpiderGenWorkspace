
/**
Constructor
Do not call Function in Constructor.
*/
class ChatRoomItem()
{
	super();
	this.data = null;
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
		console.log("data", data);
		this.data = data;
		
		this.content.setText(data.content);
		this.chat_time.setText(data.time);
	if (data.who ==="나") 
	{
		this.chat_img.hide();
		this.flex.setStyleObj({"flex-direction":"row-reverse"});
		this.content.setText(data.content);
		this.chat_time.setText(data.time);
		/*if(datas.)*/
	}
	else if (data.date) 
	{
		this.chat_img.hide();
		this.chat_time.hide();
		this.flex.setStyleObj({"justify-content":'center'});
		this.content.setStyle('background', 'transparent');
		this.content.setStyle('border', 0);
		this.content.setStyle('background',"#a9bdce");
		this.content.setStyle('margin-top',"10px");
		this.content.setText(data.date);
	}
	else if (data.chat_img) this.chat_img.setImage(data.chat_img);


// this.content.element.style();
/*
	var datas = this.getContainer().getData();
	console.log("Roomdata",datas);
	var contentLength = datas[0].chat_content.length;
	console.log(this.owner);
	var n =0;
*/
// 	this.owner.addItem('Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomItem/ChatRoomItem.lay', datas[0].chat_content)

/*	
	while(contentLength > n){
		console.log(n);

		this.content.setText(datas[0].chat_content[n].content);
		n++;
	}
*/
// 	console.log("z",datas);
// 	this.data = data;
};
