
/**
Constructor
Do not call Function in Constructor.
*/
function showMenuView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(showMenuView, AView);


showMenuView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

showMenuView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

showMenuView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
