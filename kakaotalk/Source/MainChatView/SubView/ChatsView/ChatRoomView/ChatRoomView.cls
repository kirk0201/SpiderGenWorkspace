
/**
Constructor
Do not call Function in Constructor.
*/
class ChatRoomView()
{
	super();

	//TODO:edit here

}
extends AView;


function ChatRoomView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function ChatRoomView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function ChatRoomView*onActiveDone(isFirst)
{
	super.onActiveDone();
	//TODO:edit here

};

function ChatRoomView*onBackBtnClick(comp, info, e)
{

	//TODO:edit here
	ANavigator.find('navigator').goPrevPage();
};
