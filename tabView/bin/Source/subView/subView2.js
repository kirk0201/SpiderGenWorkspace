
/**
Constructor
Do not call Function in Constructor.
*/
function subView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(subView2, AView);


subView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

subView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

subView2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
