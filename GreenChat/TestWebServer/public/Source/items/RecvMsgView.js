
/**
Constructor
Do not call Function in Constructor.
*/
function RecvMsgView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(RecvMsgView, AView);


RecvMsgView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

RecvMsgView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

RecvMsgView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

RecvMsgView.prototype.setData = function(data)
{
	//this.data = data;
	this.userName.setText(data.userName);
	this.message.setText(data.message);
};
