
/**
Constructor
Do not call Function in Constructor.
*/
class DuAccListView()
{
	super();

	//TODO:edit here

}
extends AView;


function DuAccListView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function DuAccListView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function DuAccListView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	
	//TODO:edit here

};

function DuAccListView*setData(data)
{

	//TODO:edit here
	console.log("data", data);
	this.acclist.addItem("Source/Layout/Items/DuAccItemView.lay", data);
};
