
/**
Constructor
Do not call Function in Constructor.
*/
class DuAccItemView()
{
	super();

	//TODO:edit here

}
extends AView;


function DuAccItemView*init(context, evtListener)
{
	super.init(context, evtListener);
	//TODO:edit here

};

function DuAccItemView*onInitDone()
{
	super.onInitDone();
	
	//TODO:edit here

};

function DuAccItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};


function DuAccItemView*setData(data)
{

	//TODO:edit here
	
	this.category_name.setText(data);
};
