
/**
Constructor
Do not call Function in Constructor.
*/
function IntroduceSectionView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(IntroduceSectionView, AView);


IntroduceSectionView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	//TODO:edit here

};

IntroduceSectionView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	var introViewList = 
	[
		'Source/ContainerViews/IntroduceSectionView/IntroduceView/IntroduceView.lay',
		'Source/ContainerViews/IntroduceSectionView/HistoryView/HistoryView.lay',
		'Source/ContainerViews/IntroduceSectionView/ClientView/ClientView.lay'
	];
	this.introSection.addItems(introViewList, []);
	//TODO:edit here

};

IntroduceSectionView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
