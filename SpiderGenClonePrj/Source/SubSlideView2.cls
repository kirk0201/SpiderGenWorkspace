
/**
Constructor
Do not call Function in Constructor.
*/
class SubSlideView2()
{
	super();

	//TODO:edit here

}
extends AView;


function SubSlideView2*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SubSlideView2*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function SubSlideView2*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function SubSlideView2*onFirstGoClick(comp, info, e)
{

	//TODO:edit here
	this.owner.slideTo(0);

};

function SubSlideView2*onThirdGoClick(comp, info, e)
{

	//TODO:edit here
	this.owner.slideTo(2);

};
