
/**
Constructor
Do not call Function in Constructor.
*/
function articleView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(articleView, AView);


articleView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

articleView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

articleView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
