
/**
Constructor
Do not call Function in Constructor.
*/
function AutoSizeView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(AutoSizeView, AView);


AutoSizeView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

AutoSizeView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

AutoSizeView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
