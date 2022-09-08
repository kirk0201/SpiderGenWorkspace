
/**
Constructor
Do not call Function in Constructor.
*/
function JoinInfoView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(JoinInfoView, AView);


JoinInfoView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

JoinInfoView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

JoinInfoView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

JoinInfoView.prototype.onConsultBtnClick = function(comp, info, e)
{

	this.getContainer().close(0);

};

JoinInfoView.prototype.onCloseBtnClick = function(comp, info, e)
{

	this.getContainer().close(1);

};
