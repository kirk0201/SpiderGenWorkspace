
/**
Constructor
Do not call Function in Constructor.
*/
class SendMsgView()
{
	super();

	//TODO:edit here

}
extends AView;


function SendMsgView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SendMsgView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function SendMsgView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function SendMsgView*setData(data)
{
	//this.data = data;
	this.userName.setText(data.userName);
	this.message.setText(data.message);
};