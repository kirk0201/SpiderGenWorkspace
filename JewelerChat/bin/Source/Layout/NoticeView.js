
/**
Constructor
Do not call Function in Constructor.
*/
function NoticeView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(NoticeView, AView);


NoticeView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

NoticeView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

NoticeView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
