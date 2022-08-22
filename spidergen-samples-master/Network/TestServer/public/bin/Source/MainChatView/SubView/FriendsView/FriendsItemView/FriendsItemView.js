
/**
Constructor
Do not call Function in Constructor.
*/
function FriendsItemView()
{
	AView.call(this);
	this.data = null;
	//TODO:edit here

}
afc.extendsClass(FriendsItemView, AView);


FriendsItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

FriendsItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

FriendsItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


FriendsItemView.prototype.setData = function(data)
{
	console.log("itemData", data);
// 	this.friend_img.setImage(data.chat_img);
	this.friend_img.setImage(data.chat_img);
	this.friend_name.setText(data.chat_name);
	
	this.data = data;
};
