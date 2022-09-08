
/**
Constructor
Do not call Function in Constructor.
*/
class JoinInfoView()
{
	super();

	//TODO:edit here

}
extends AView;


function JoinInfoView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function JoinInfoView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function JoinInfoView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function JoinInfoView*onConsultBtnClick(comp, info, e)
{

	this.getContainer().close(0);

};

function JoinInfoView*onCloseBtnClick(comp, info, e)
{

	this.getContainer().close(1);

};
