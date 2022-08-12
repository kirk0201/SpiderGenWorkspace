afc.loadScript("Framework/afc/component/AToast.js");
/**
Constructor
Do not call Function in Constructor.
*/
function subView1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(subView1, AView);


subView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

subView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

subView1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	AToast.show("Hello World!");
	//TODO:edit here

};
