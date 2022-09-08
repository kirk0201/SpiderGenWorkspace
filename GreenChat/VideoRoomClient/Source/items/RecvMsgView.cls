
/**
Constructor
Do not call Function in Constructor.
*/
class RecvMsgView()
{
	super();

	//TODO:edit here

}
extends AView;


function RecvMsgView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function RecvMsgView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function RecvMsgView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function RecvMsgView*setData(data)
{
	//this.data = data;
	this.userName.setText(data.userName);
	this.message.setText(data.message);
};
