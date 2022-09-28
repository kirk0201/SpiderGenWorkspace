
/**
Constructor
Do not call Function in Constructor.
*/
class NewAddItemView()
{
	super();

	//TODO:edit here

}
extends AView;


function NewAddItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function NewAddItemView*onInitDone()
{
	super.onInitDone();
	this.rbm = new RadioBtnManager(this);
	this.onTabClick(this.tab1);
	//TODO:edit here

};

function NewAddItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
