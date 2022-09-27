
/**
Constructor
Do not call Function in Constructor.
*/
function item3()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(item3, AView);


item3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

item3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

item3.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
