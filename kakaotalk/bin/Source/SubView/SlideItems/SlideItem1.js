
/**
Constructor
Do not call Function in Constructor.
*/
function SlideItem1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SlideItem1, AView);


SlideItem1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SlideItem1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SlideItem1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
