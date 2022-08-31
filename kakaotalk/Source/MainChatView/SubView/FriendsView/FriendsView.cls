
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
				console.log("init 활성화@@@@");


// 	data.loginData[0].Friends

	
	//TODO:edit here
// 	console.log("container", this.getContainer());

// 	console.log("friend_owner", this.owner.parent);


};

function FriendsView*onDeactive()
{
		this.friendsList.removeAllItems();
					console.log("onDeactive 활성화@@@@");

};

function FriendsView*onInitDone()
{
	super.onInitDone();
			console.log("onInitDone 활성화@@@@");



	// 	console.log("getData", this.getContainer().getData());
	
	// 	var data = this.getContainer().getData().loginData[0].Friends;
	// 	console.log("data", data);
	//TODO:edit here
	//	this.getContainer().getData()는 변수에 할당이 안됨 	
	// 	var friend_data = this.getContainer().getData();
	
	
};
function FriendsView*onActive(isFirst)
{
		console.log("onActive 활성화@@@@");


};

function FriendsView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	console.log("onActiveDone 활성화@@@@");
	this.friendsList.removeAllItems();
	this.loginApi();
		

	//TODO:edit here

};

function FriendsView*onWillActive(isFirst){
		console.log("onWillACtive 활성화@@@@");

};
function FriendsView*onDeactiveDone()
{
	console.log("onDeactive 활성화");
};
function FriendsView*onFriendsViewSelect(comp, info, e)
{

	//TODO:edit here

};

function FriendsView*loginApi()
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
		// 		queryData.printQueryData();
		// 		console.log("friendsView queryData@@@@@@@@@@@@@@:", queryData);
		thisObj.friendsList.addItem('Source/MainChatView/SubView/FriendsView/FriendsItemView/FriendsItemView.lay', blockData);

	}
	);
};
