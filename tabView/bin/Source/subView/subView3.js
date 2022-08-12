
/**
Constructor
Do not call Function in Constructor.
*/
function subView3()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(subView3, AView);


subView3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

subView3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

subView3.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
