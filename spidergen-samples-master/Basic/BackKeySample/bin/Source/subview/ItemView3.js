
/**
Constructor
Do not call Function in Constructor.
*/
function ItemView3()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ItemView3, AView);


ItemView3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ItemView3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ItemView3.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
