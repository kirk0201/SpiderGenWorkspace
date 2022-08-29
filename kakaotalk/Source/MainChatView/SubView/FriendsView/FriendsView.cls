
/**
Constructor
Do not call Function in Constructor.
*/
class FriendsView()
{
	super();
	this.token = null;
	//TODO:edit here

}
extends AView;


function FriendsView*init(context, evtListener)
{
	super.init(context, evtListener);


// 	data.loginData[0].Friends

	
	//TODO:edit here
// 	console.log("container", this.getContainer());

// 	console.log("friend_owner", this.owner.parent);


};

function FriendsView*onInitDone()
{
	super.onInitDone();
	// 	console.log("getData", this.getContainer().getData());
	this.token = this.getContainer().getData().loginData.token;
	
	var data = this.getContainer().getData().loginData[0].Friends;
	// 	console.log("data", data);
	//TODO:edit here
	//	this.getContainer().getData()는 변수에 할당이 안됨 	
	// 	var friend_data = this.getContainer().getData();
	this.friendsList.addItem('Source/MainChatView/SubView/FriendsView/FriendsItemView/FriendsItemView.lay', data);
	
};

function FriendsView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function FriendsView*onFriendsViewSelect(comp, info, e)
{

	//TODO:edit here

};

function MainChatView*loginApi()
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
