
/**
Constructor
Do not call Function in Constructor.
*/
function DetailView3()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(DetailView3, AView);


DetailView3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

DetailView3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

DetailView3.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
