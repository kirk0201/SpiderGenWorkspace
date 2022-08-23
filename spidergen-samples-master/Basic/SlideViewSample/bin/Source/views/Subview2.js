
/**
Constructor
Do not call Function in Constructor.
*/
function Subview2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(Subview2, AView);


Subview2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

Subview2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

Subview2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
