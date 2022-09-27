
/**
Constructor
Do not call Function in Constructor.
*/
function ItemView1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ItemView1, AView);


ItemView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ItemView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ItemView1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
