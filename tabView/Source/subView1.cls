import "Framework/afc/component/AToast.js"
/**
Constructor
Do not call Function in Constructor.
*/
class subView1()
{
	super();

	//TODO:edit here

}
extends AView;


function subView1*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function subView1*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function subView1*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	AToast.show("Hello World!");
	//TODO:edit here

};
