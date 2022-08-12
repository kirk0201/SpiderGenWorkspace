
/**
Constructor
Do not call Function in Constructor.
*/
function SlideView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SlideView, AView);


SlideView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SlideView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	this.slide.addItem('Source/ContainerViews/SlideView/Views/SubSlideView1.lay', [0]);
/*	this.slideView.addItem('Source/ContainerViews/SlideView/Views/SubSlideView1.lay', [1]);
	this.slideView.addItem('Source/ContainerViews/SlideView/Views/SubSlideView2.lay', [2]);
	this.slideView.addItem('Source/ContainerViews/SlideView/Views/SubSlideView3.lay', [3]);*/

	//TODO:edit here

};

SlideView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SlideView.prototype.onPrevBtnClick = function(comp, info, e)
{
	this.slideView.slidePrev();
	//TODO:edit here

};

SlideView.prototype.onNextBtnClick = function(comp, info, e)
{
	this.slideView.slideNext();
	//TODO:edit here

};
