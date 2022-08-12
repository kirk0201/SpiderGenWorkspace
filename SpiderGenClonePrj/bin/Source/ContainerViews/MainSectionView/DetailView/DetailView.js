
/**
Constructor
Do not call Function in Constructor.
*/
function DetailView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(DetailView, AView);


DetailView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

DetailView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

DetailView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
