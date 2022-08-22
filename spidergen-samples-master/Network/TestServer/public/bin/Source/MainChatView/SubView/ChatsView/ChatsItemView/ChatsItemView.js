
/**
Constructor
Do not call Function in Constructor.
*/
function ChatsItemView()
{
	AView.call(this);
	this.data = null;
	//TODO:edit here

}
afc.extendsClass(ChatsItemView, AView);


ChatsItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here
	
	

};

ChatsItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ChatsItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

ChatsItemView.prototype.setData = function(data)
{
	this.chat_img.setImage(data.chat_img);
	
	this.chat_name.setText(data.chat_name);
	console.log("chat_content",);
	this.chat_content.setText(data.chat_content[data.chat_content.length - 1].content);

	this.data = data;
	console.log("ChatsItemView Data", this.data);
};

