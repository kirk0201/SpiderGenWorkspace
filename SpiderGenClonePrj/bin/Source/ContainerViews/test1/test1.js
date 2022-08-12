
/**
Constructor
Do not call Function in Constructor.
*/
function test1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(test1, AView);


test1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

test1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

test1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
