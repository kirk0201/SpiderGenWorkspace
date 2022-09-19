
/**
Constructor
Do not call Function in Constructor.
*/
function DuAccListView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(DuAccListView, AView);


DuAccListView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

DuAccListView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

DuAccListView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	
	//TODO:edit here

};

DuAccListView.prototype.setData = function(data)
{

	//TODO:edit here
	console.log("data", data);
	this.acclist.addItem("Source/Layout/Items/DuAccItemView.lay", data);
};
