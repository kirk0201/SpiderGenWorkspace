
/**
Constructor
Do not call Function in Constructor.
*/
function CenterNavView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(CenterNavView, AView);


CenterNavView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

CenterNavView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

CenterNavView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

CenterNavView.prototype.onAViewClick = function(comp, info, e)
{
	console.log(this.owner);
	//TODO:edit here

};
