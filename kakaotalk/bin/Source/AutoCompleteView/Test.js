
/**
Constructor
Do not call Function in Constructor.
*/
function Test()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(Test, AView);


Test.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

Test.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

Test.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
