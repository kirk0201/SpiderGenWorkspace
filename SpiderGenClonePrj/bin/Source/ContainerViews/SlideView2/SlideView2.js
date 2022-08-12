
/**
Constructor
Do not call Function in Constructor.
*/
function SlideView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SlideView2, AView);


SlideView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SlideView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	this.slide.addItem('Source/ContainerViews/SlideView2/Views/SubSlideView1.lay', [1]);
	this.slide.addItem('Source/ContainerViews/SlideView2/Views/SubSlideView2.lay', [2]);
	this.slide.addItem('Source/ContainerViews/SlideView2/Views/SubSlideView3.lay', [3]);

	//TODO:edit here

};

SlideView2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SlideView2.prototype.onPrevBtnClick = function(comp, info, e)
{
	this.slide.slidePrev()
	//TODO:edit here

};

SlideView2.prototype.onNextBtnClick = function(comp, info, e)
{
	this.slide.slideNext()
	//TODO:edit here

};
