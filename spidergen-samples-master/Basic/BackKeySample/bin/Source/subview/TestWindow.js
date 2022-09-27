
/**
Constructor
Do not call Function in Constructor.
*/
function TestWindow()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestWindow, AView);


TestWindow.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestWindow.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestWindow.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

TestWindow.prototype.onOkBtnClick = function(comp, info, e)
{
	
	this.getContainer().close();
	
};

TestWindow.prototype.onCancelBtnClick = function(comp, info, e)
{
	this.getContainer().close();

};
