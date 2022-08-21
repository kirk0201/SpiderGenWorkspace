
/**
Constructor
Do not call Function in Constructor.
*/
class FriendsView()
{
	super();
	
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
	console.log("getData", this.getContainer().getData());
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
