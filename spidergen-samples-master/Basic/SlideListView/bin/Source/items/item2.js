
/**
Constructor
Do not call Function in Constructor.
*/
function item2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(item2, AView);


item2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

item2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

item2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

item2.prototype.onAView1Click = function(comp, info, e)
{

	AToast.show('Hello World!');

};

