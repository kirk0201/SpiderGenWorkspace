
/**
Constructor
Do not call Function in Constructor.
*/
function ViewItems()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ViewItems, AView);


ViewItems.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ViewItems.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ViewItems.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
