
/**
Constructor
Do not call Function in Constructor.
*/
function ChatSendItem()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ChatSendItem, AView);


ChatSendItem.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ChatSendItem.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ChatSendItem.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

ChatSendItem.prototype.setData = function(data)
{
	this.content.setText(data.content);
	console.log(data);
};
