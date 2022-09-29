
/**
Constructor
Do not call Function in Constructor.
*/
class RoadRegistItemView()
{
	super();

	//TODO:edit here

}
extends AView;


function RoadRegistItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function RoadRegistItemView*onInitDone()
{
	super.onInitDone();
	this.load_listview.addItem("Source/Layout/Items/RoadListItem.lay", [1]);
	//TODO:edit here

};

function RoadRegistItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
