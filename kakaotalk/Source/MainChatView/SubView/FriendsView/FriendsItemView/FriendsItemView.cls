
/**
Constructor
Do not call Function in Constructor.
*/
class FriendsItemView()
{
	super();
	this.data = null;
	//TODO:edit here

}
extends AView;


function FriendsItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function FriendsItemView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function FriendsItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};


function FriendsItemView*setData(data)
{
	console.log("itemData", data);
// 	this.friend_img.setImage(data.chat_img);
	this.friend_img.setImage(data.chat_img);
	this.friend_name.setText(data.chat_name);
	
	this.data = data;
};
