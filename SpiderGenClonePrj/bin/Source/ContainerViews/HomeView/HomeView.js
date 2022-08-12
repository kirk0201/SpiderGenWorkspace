
/**
Constructor
Do not call Function in Constructor.
*/
function HomeView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(HomeView, AView);


HomeView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

HomeView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

HomeView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
