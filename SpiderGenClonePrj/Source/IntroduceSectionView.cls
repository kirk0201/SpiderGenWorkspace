
/**
Constructor
Do not call Function in Constructor.
*/
class IntroduceSectionView()
{
	super();

	//TODO:edit here

}
extends AView;


function IntroduceSectionView*init(context, evtListener)
{
	super.init(context, evtListener);
	//TODO:edit here

};

function IntroduceSectionView*onInitDone()
{
	super.onInitDone();
	var introViewList = 
	[
		'Source/ContainerViews/IntroduceSectionView/IntroduceView/IntroduceView.lay',
		'Source/ContainerViews/IntroduceSectionView/HistoryView/HistoryView.lay',
		'Source/ContainerViews/IntroduceSectionView/ClientView/ClientView.lay'
	];
	this.introSection.addItems(introViewList, []);
	//TODO:edit here

};

function IntroduceSectionView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
