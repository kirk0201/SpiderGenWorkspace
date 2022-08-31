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
	this.loginApi();
};



ChatsView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
		

	console.log("4");
	this.navi();
// 	var listData = this.getContainer().getData().loginData[0].Chats;

// 	this.chatsList.addItem('Source/MainChatView/SubView/ChatsView/ChatsItemView/ChatsItemView.lay', listData);
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
	selectIdx= this.chatsList.indexOfItem(this.chatsList.getSelectItem());
	
	console.log("selectIdx", selectIdx);
	console.log("ChatsView_Data", data);
	
	if (data)data.select_chat = selectIdx;
// 	console.log("챗뷰오브젝트", data );
	ANavigator.find('navigator').goPage('ChatRoomView', data);
};
ChatsView.prototype.navi = function(){
	var navi = ANavigator.find('navigator');
	console.log("네비게이터",navi);
};

ChatsView.prototype.loginApi = function()
{
	this.token = this.getContainer().getData().loginData.token;
// 	console.log("ChatsView@@@@@@",this.token);
	//TODO:edit here
	var thisObj = this;
	theApp.qm.startManager("http://192.168.0.155:3000/chat/chatlist");
	theApp.qm.sendProcessByName('chatlog', this.getContainerId(), null,
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1');
		blockData[0].token = thisObj.token;
	
	
		// 		console.log("InBlock queryData",queryData);
		// 		console.log("printQueryData@@@@@@@@@@@@",queryData.printQueryData());
	},
	function(queryData)
	{
		var blockData = queryData.getBlockData('OutBlock1');
		console.log("!!!!@@@@@", blockData);
		// 		queryData.printQueryData();
		// 		console.log("friendsView queryData@@@@@@@@@@@@@@:", queryData);
		thisObj.chatsList.addItem('Source/MainChatView/SubView/ChatsView/ChatsItemView/ChatsItemView.lay', blockData);

	}
	);
};


