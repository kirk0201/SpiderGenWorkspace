
/**
Constructor
Do not call Function in Constructor.
*/
function ReportMsgView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ReportMsgView, AView);


ReportMsgView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ReportMsgView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ReportMsgView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

ReportMsgView.prototype.setData = function(data)
{
	//this.data = data;
	this.message.setText(data.message);
};