
/**
Constructor
Do not call Function in Constructor.
*/
class ReportMsgView()
{
	super();

	//TODO:edit here

}
extends AView;


function ReportMsgView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function ReportMsgView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function ReportMsgView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function ReportMsgView*setData(data)
{
	//this.data = data;
	this.message.setText(data.message);
};