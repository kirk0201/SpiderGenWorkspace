
/**
Constructor
Do not call Function in Constructor.
*/
function SubSlideView3()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SubSlideView3, AView);


SubSlideView3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SubSlideView3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SubSlideView3.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SubSlideView3.prototype.onFirstGoClick = function(comp, info, e)
{

	//TODO:edit here
	this.owner.slideTo(0);
};

SubSlideView3.prototype.onSecondGoClick = function(comp, info, e)
{

	//TODO:edit here
	this.owner.slideTo(1);
};
