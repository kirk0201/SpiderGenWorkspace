
/**
Constructor
Do not call Function in Constructor.
*/
function ClientView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ClientView, AView);


ClientView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ClientView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ClientView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
