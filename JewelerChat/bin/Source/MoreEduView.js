
/**
Constructor
Do not call Function in Constructor.
*/
function MoreEduView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MoreEduView, AView);


MoreEduView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MoreEduView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MoreEduView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
