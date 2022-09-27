
/**
Constructor
Do not call Function in Constructor.
*/
function LayoutView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(LayoutView, AView);


LayoutView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

LayoutView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

LayoutView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
