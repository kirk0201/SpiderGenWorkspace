
/**
Constructor
Do not call Function in Constructor.
*/
function ItemView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ItemView, AView);


ItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
