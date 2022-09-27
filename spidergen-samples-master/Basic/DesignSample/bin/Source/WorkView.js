
/**
Constructor
Do not call Function in Constructor.
*/
function WorkView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(WorkView, AView);


WorkView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

WorkView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

WorkView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
