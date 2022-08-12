
/**
Constructor
Do not call Function in Constructor.
*/
function footerView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(footerView, AView);


footerView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

footerView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

footerView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
