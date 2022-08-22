/**
Constructor
Do not call Function in Constructor.
*/
function ChatsView()
{
	AView.call(this);
	var selectIdx = null;
}
afc.extendsClass(ChatsView, AView);


ChatsView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
};

ChatsView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

};



ChatsView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	console.log("4");
	this.navi();
	var listData = this.getContainer().getData().loginData[0].Chats;

	this.chatsList.addItem('Source/MainChatView/SubView/ChatsView/ChatsItemView/ChatsItemView.lay', listData);
/*	
	var data = this.getContainer().getData().loginData[0].Chats;
	console.log("ChatsData", this.data);
	this.chatsList.addItem('Source/MainChatView/SubView/ChatsView/ChatsItemView/ChatsItemView.lay', data);
*/
	//TODO:edit here

};

ChatsView.prototype.onChatsViewSelect = function(comp, info, e)
{
	//TODO:edit here
/*	
	console.log("comp",comp);
	console.log("e",e);
	console.log('info', info);
	console.log(this.getContainer());
*/
	/*var data = this.getContainer().getData().loginData[0].Chats[selectIdx];*/
	var data = this.getContainer().getData();
	if (data)data.choice = selectIdx;
	console.log("챗뷰오브젝트", data );
	ANavigator.find('navigator').goPage('ChatRoomView', data);
};
ChatsView.prototype.navi = function(){
	var navi = ANavigator.find('navigator');
	console.log("네비게이터",navi);
};
ChatsView.prototype.onAView1Click = function(comp, info, e)
{
	console.log("comp",comp);
	console.log("info",info);
	console.log("e", e);
	// ListView 선택시 선택된 아이템 인덱스번호
	console.log("select", this.chatsList.indexOfItem(this.chatsList.getSelectItem()));
	selectIdx= this.chatsList.indexOfItem(this.chatsList.getSelectItem());
	console.log(selectIdx);
	//TODO:edit here

};


