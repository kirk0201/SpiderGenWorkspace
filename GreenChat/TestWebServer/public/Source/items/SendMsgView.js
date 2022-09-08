
/**
Constructor
Do not call Function in Constructor.
*/
function SendMsgView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SendMsgView, AView);


SendMsgView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SendMsgView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SendMsgView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SendMsgView.prototype.setData = function(data)
{
	//this.data = data;
	this.userName.setText(data.userName);
	this.message.setText(data.message);
};