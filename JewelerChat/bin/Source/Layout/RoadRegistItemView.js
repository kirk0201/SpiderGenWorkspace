
/**
Constructor
Do not call Function in Constructor.
*/
function RoadRegistItemView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(RoadRegistItemView, AView);


RoadRegistItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

RoadRegistItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	this.load_listview.addItem("Source/Layout/Items/RoadListItem.lay", [1]);
	//TODO:edit here

};

RoadRegistItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
