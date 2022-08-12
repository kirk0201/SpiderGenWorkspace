
/**
Constructor
Do not call Function in Constructor.
*/
class SubSlideView1()
{
	super();

	//TODO:edit here

}
extends AView;


function SubSlideView1*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SubSlideView1*onInitDone()
{
	super.onInitDone();

};

function SubSlideView1*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	//TODO:edit here

};

function SubSlideView1*onSecondGoClick(comp, info, e)
{
	this.owner.slideTo(1);
};

function SubSlideView1*onThirdGoClick(comp, info, e)
{
	this.owner.slideTo(2);
};
