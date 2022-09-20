
/**
Constructor
Do not call Function in Constructor.
*/
function MoreExpView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MoreExpView, AView);


MoreExpView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MoreExpView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MoreExpView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
