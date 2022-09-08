
/**
Constructor
Do not call Function in Constructor.
*/
function Item2View()
{
	SyncBaseView.call(this);

	//TODO:edit here

}
afc.extendsClass(Item2View, SyncBaseView);


Item2View.prototype.init = function(context, evtListener)
{
	SyncBaseView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

Item2View.prototype.onInitDone = function()
{
	SyncBaseView.prototype.onInitDone.call(this);

	

};

Item2View.prototype.onActiveDone = function(isFirst)
{
	SyncBaseView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

Item2View.prototype.onNextButtonClick = function(comp, info, e)
{

	this.owner.selectTabByIndex(2);

};

Item2View.prototype.onPrevButtonClick = function(comp, info, e)
{

	this.owner.selectTabByIndex(0);

};

Item2View.prototype.onAButton1Click = function(comp, info, e)
{

	for(var i=0; i<100; i++)
		this.testGrid.addRow([1+i, 2+i, 3+i]);

};
