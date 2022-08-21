
/**
Constructor
Do not call Function in Constructor.
*/
function FriendsView()
{
	AView.call(this);
	
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
	console.log("getData", this.getContainer().getData());
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
