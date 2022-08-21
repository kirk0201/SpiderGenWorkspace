
/**
Constructor
Do not call Function in Constructor.
*/
class ChatSendItem()
{
	super();

	//TODO:edit here

}
extends AView;


function ChatSendItem*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function ChatSendItem*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function ChatSendItem*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function ChatSendItem*setData(data)
{
	this.content.setText(data.content);
	console.log(data);
};
