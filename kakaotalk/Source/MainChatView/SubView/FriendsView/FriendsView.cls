
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
	this.loginApi();

	// 	console.log("getData", this.getContainer().getData());
	
	// 	var data = this.getContainer().getData().loginData[0].Friends;
	// 	console.log("data", data);
	//TODO:edit here
	//	this.getContainer().getData()는 변수에 할당이 안됨 	
	// 	var friend_data = this.getContainer().getData();
	
	
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

function FriendsView*loginApi()
{
	this.token = this.getContainer().getData().loginData.token;

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
		// 		queryData.printQueryData();
		// 		console.log("friendsView queryData@@@@@@@@@@@@@@:", queryData);
		thisObj.friendsList.addItem('Source/MainChatView/SubView/FriendsView/FriendsItemView/FriendsItemView.lay', blockData);

	}
	);
};
