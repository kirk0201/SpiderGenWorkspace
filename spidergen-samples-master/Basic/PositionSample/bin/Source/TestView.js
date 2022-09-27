
/**
Constructor
Do not call Function in Constructor.
*/
function TestView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestView, AView);


TestView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
