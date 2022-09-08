
/**
Constructor
Do not call Function in Constructor.
*/
function Item3View()
{
	SyncBaseView.call(this);

	//TODO:edit here

}
afc.extendsClass(Item3View, SyncBaseView);


Item3View.prototype.init = function(context, evtListener)
{
	SyncBaseView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

Item3View.prototype.onInitDone = function()
{
	SyncBaseView.prototype.onInitDone.call(this);

	//TODO:edit here

};

Item3View.prototype.onActiveDone = function(isFirst)
{
	SyncBaseView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

Item3View.prototype.onPrevBtnClick = function(comp, info, e)
{

	this.owner.selectTabByIndex(1);

};

