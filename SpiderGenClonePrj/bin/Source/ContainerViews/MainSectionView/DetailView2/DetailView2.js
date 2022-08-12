
/**
Constructor
Do not call Function in Constructor.
*/
function DetailView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(DetailView2, AView);


DetailView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

DetailView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

DetailView2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
