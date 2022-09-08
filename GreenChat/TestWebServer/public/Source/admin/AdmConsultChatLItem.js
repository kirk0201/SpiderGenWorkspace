
/**
Constructor
Do not call Function in Constructor.
*/
function AdmConsultChatLItem()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(AdmConsultChatLItem, AView);


AdmConsultChatLItem.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

AdmConsultChatLItem.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

AdmConsultChatLItem.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


AdmConsultChatLItem.prototype.setData = function(data)
{
	console.log(data);
	
	this.uId.setText(data.userId);
	this.message.setText(data.msg);
	this.rDate.setText(data.regDate);
	
};


