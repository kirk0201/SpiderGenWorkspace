
/**
Constructor
Do not call Function in Constructor.
*/
function OriginalView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(OriginalView, AView);


OriginalView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

OriginalView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

OriginalView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
