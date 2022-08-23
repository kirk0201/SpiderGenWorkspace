
/**
Constructor
Do not call Function in Constructor.
*/
function ChatRoomItem()
{
	AView.call(this);
// 	this.data = null;
	//TODO:edit here

}
afc.extendsClass(ChatRoomItem, AView);


ChatRoomItem.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ChatRoomItem.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	

	//TODO:edit here

};

ChatRoomItem.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

ChatRoomItem.prototype.setData = function(data)
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
		this.content.setText(datas.content);
		this.chat_time.setText(datas.time);
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
