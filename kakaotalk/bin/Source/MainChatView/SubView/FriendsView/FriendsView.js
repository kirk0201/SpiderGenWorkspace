
/**
Constructor
Do not call Function in Constructor.
*/
function FriendsView()
{
	AView.call(this);
	this.token = null;
	this.data = null;
	//TODO:edit here

}
afc.extendsClass(FriendsView, AView);


FriendsView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

};


FriendsView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
};

FriendsView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	this.friendsList.removeAllItems();
	this.loginApi();
		

	//TODO:edit here

};


FriendsView.prototype.onFriendsViewSelect = function(comp, info, e)
{
	console.log(this.getContainer().getData());
	var data = this.getContainer().getData();
	var selectIdx = this.friendsList.indexOfItem(this.friendsList.getSelectItem());
// 실제 유저 아이디 값으로 넘길시
	data.target_user = this.data[selectIdx].id;
	data.select_chat = selectIdx;
	ANavigator.find('navigator').goPage("ChatRoomView", data);
};

FriendsView.prototype.loginApi = function()
{
	this.token = this.getContainer().getData().loginData.token;
	console.log("@@@@@@@@@@@FriendsView_token@@@@@@@@@@@",this.token);
	//TODO:edit here
	var thisObj = this;
	theApp.qm.startManager("http://192.168.0.155:3000/friend/myfriend");
	theApp.qm.sendProcessByName('friend', this.getContainerId(), null,
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
		console.log("!!!!", blockData);
		thisObj.data = blockData;
		// 		queryData.printQueryData();
		// 		console.log("friendsView queryData@@@@@@@@@@@@@@:", queryData);
		thisObj.friendsList.addItem('Source/MainChatView/SubView/FriendsView/FriendsItemView/FriendsItemView.lay', blockData);

	}
	);
};
