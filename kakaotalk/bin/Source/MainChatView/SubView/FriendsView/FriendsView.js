
/**
Constructor
Do not call Function in Constructor.
*/
function FriendsView()
{
	AView.call(this);
	this.token = null;
	//TODO:edit here

}
afc.extendsClass(FriendsView, AView);


FriendsView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);


// 	data.loginData[0].Friends

	
	//TODO:edit here
// 	console.log("container", this.getContainer());

// 	console.log("friend_owner", this.owner.parent);


};

FriendsView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
// 	console.log("getData", this.getContainer().getData());
	
	this.token = this.getContainer().getData().loginData.token;
	console.log("@@@@@",this.token);
// 	console.log("getData", this.getContainer().getData());
	var data = this.getContainer().getData().loginData[0].Friends;
	// 	console.log("data", data);
	//TODO:edit here
	//	this.getContainer().getData()는 변수에 할당이 안됨 	
	// 	var friend_data = this.getContainer().getData();
	this.friendsList.addItem('Source/MainChatView/SubView/FriendsView/FriendsItemView/FriendsItemView.lay', data);
	
};

FriendsView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

FriendsView.prototype.onFriendsViewSelect = function(comp, info, e)
{

	//TODO:edit here

};

FriendsView.prototype.loginApi = function()
{

	//TODO:edit here
	var thisObj = this;
	theApp.qm.startManager("http://192.168.0.155:3000/friend/myfriend");
	theApp.qm.sendProcessByName('friend', this.getContainerId(), null,
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1');
		blockData[0].token = thisObj.token;
	
	
		// 		console.log("InBlock queryData",queryData);
		console.log("printQueryData",queryData.printQueryData());
	},
	function(queryData)
	{
		// 		queryData.printQueryData();
		console.log("OutBlock1 queryData:", queryData);
		var msg = queryData.queryObj.OutBlock1.msg;
		// 		AToast.show(msg);

	}
	);
};
