
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
	var datas = data;
	console.log("datas", datas);
	//TODO:edit here

// 	this.chat_img.setImage(url);
// 	var rt = this.content.offsetPos(200, 0);
// 	console.log("rt", rt);
// 	console.log(this.getContainer().getView());

		this.content.setText(datas.content);
		this.chat_time.setText(datas.time);
	if (datas.who ==="나") 
	{
		this.chat_img.hide();
		this.flex.setStyleObj({"flex-direction":"row-reverse"});
		/*if(datas.)*/
	}
	else if (datas.date) 
	{
		this.chat_img.hide();
		this.chat_time.hide();
		this.flex.setStyleObj({"justify-content":'center'});
		this.content.setStyle('background', 'transparent');
		this.content.setStyle('border', 0);
		this.content.setStyle('background',"#a9bdce");
		this.content.setStyle('margin-top',"10px");
		this.content.setText(datas.date);
	}
	else if (datas.chat_img) this.chat_img.setImage(datas.chat_img);


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
