
/**
Constructor
Do not call Function in Constructor.
*/
function BadUsecaseView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(BadUsecaseView, AView);


BadUsecaseView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

BadUsecaseView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

BadUsecaseView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
