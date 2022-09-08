
/**
Constructor
Do not call Function in Constructor.
*/
function AdmConsultChatRItem()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(AdmConsultChatRItem, AView);


AdmConsultChatRItem.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

AdmConsultChatRItem.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

AdmConsultChatRItem.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


AdmConsultChatRItem.prototype.setData = function(data)
{
	this.uId.setText(data.userId);
	this.message.setText(data.msg);
	this.rDate.setText(data.regDate);

};

