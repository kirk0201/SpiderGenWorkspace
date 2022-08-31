
/**
Constructor
Do not call Function in Constructor.
*/
function ChatRoomItem()
{
	AView.call(this);
	this.data = null;
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
		console.log("data", data);
		console.log("data.createdAt",data.createdAt);
		console.log("Define", this.TimeController(data.createdAt));
		console.log("@@@@@@@@@@TEST@@@@@@@@@",this.TimeController(data.createdAt));
		this.content.setText(data.chat_comment);
		this.chat_time.setText(this.TimeController(data.createdAt).isTime);
	if (data.im_send) 
	{
		this.chat_img.hide();
		this.flex.setStyleObj({"flex-direction":"row-reverse"});
		this.content.setText(data.chat_comment);
		this.content.setStyleObj({"background":"#feea31"});
		this.chat_time.setText(this.TimeController(data.createdAt).isTime);
	}
/*	else if (data.date) 
	{
		this.chat_img.hide();
		this.chat_time.hide();
		this.flex.setStyleObj({"justify-content":'center'});
		this.content.setStyle('background', 'transparent');
		this.content.setStyle('border', 0);
		this.content.setStyle('background',"#a9bdce");
		this.content.setStyle('margin-top',"10px");
		this.content.setText(data.date);
	}*/
	else if (data.user.user_img) this.chat_img.setImage(data.user.user_img);


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

// createdAt 시간 가공 함수
ChatRoomItem.prototype.TimeController = function(time)
{
	//TODO:edit here
	let dayAndTime = time.split("T");
	let day = dayAndTime[0];
	let isTime = dayAndTime[1].slice(0,5);
	let hour = dayAndTime[1].slice(0,5).slice(0,2);
	let minutes = dayAndTime[1].slice(0,5).slice(2, 5);

	isTime = this.time(hour, minutes);
	
	return { dayAndTime, day, isTime};
};

ChatRoomItem.prototype.time = function(hour, minutes) {
  if (hour >= 0 && hour <= 12) return `오전 ${hour}${minutes}`;
  else return `오후 ${hour}${minutes}`;
};