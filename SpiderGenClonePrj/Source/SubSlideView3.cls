
/**
Constructor
Do not call Function in Constructor.
*/
class SubSlideView3()
{
	super();

	//TODO:edit here

}
extends AView;


function SubSlideView3*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SubSlideView3*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function SubSlideView3*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function SubSlideView3*onFirstGoClick(comp, info, e)
{

	//TODO:edit here
	this.owner.slideTo(0);
};

function SubSlideView3*onSecondGoClick(comp, info, e)
{

	//TODO:edit here
	this.owner.slideTo(1);
};
