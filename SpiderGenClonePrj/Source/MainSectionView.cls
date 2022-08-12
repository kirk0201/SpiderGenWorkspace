
/**
Constructor
Do not call Function in Constructor.
*/
class MainSectionView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainSectionView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MainSectionView*onInitDone()
{
	super.onInitDone();
	var listViewUrlArr = [
		'Source/ContainerViews/MainSectionView/HomeView/HomeView.lay',
		'Source/ContainerViews/MainSectionView/CenterNavView/CenterNavView.lay',
		'Source/ContainerViews/MainSectionView/DetailView/DetailView.lay',
		'Source/ContainerViews/MainSectionView/DetailView2/DetailView2.lay',
		'Source/ContainerViews/MainSectionView/SlideView/SlideView.lay',
		'Source/ContainerViews/MainSectionView/DetailView3/DetailView3.lay',
	];
	
	this.mainSection.addItems(listViewUrlArr, []);
};

function MainSectionView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
