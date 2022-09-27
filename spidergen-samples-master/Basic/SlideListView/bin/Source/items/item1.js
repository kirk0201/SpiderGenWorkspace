
/**
Constructor
Do not call Function in Constructor.
*/
function item1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(item1, AView);


item1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

item1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

};

item1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
