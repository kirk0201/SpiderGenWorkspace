
/**
Constructor
Do not call Function in Constructor.
*/
function SubSlideView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SubSlideView2, AView);


SubSlideView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SubSlideView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SubSlideView2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
