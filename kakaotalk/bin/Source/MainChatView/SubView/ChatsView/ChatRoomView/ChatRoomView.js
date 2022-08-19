
/**
Constructor
Do not call Function in Constructor.
*/
function ChatRoomView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ChatRoomView, AView);


ChatRoomView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ChatRoomView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ChatRoomView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this);
	//TODO:edit here

};

ChatRoomView.prototype.onBackBtnClick = function(comp, info, e)
{

	//TODO:edit here
	ANavigator.find('navigator').goPrevPage();
};
