
/**
Constructor
Do not call Function in Constructor.
*/
class SpiderGenClonePrjApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function SpiderGenClonePrjApp*onReady()
{
	super.onReady();

// mainContainer.open(url)에서 url의 위치에 따라 다른 위치에서 랜더링이 가능함
	this.setMainContainer(new APage('main'));

//	MainView
	this.mainContainer.open('Source/MainView.lay');		
// 	this.mainContainer.open('Source/ContainerViews/SlideView2/SlideView2.lay');
// DocSectionView
// this.mainContainer.open('Source/ContainerViews/DocSectionView/DocSectionView.lay');
// CommunitySectionView
// 	this.mainContainer.open('Source/ContainerViews/CommunitySectionView/CommunitySectionView.lay');
// QaSectionView
//  this.mainContainer.open('Source/ContainerViews/CommunitySectionView/QaSectionView/QaSectionView.lay');
// RegisterView
// 	this.mainContainer.open('Source/ContainerViews/RegisterView/RegisterView.lay');
// IntroduceSectionView
// 	this.mainContainer.open('Source/ContainerViews/IntroduceSectionView/IntroduceSectionView.lay');
//	IntroduceVIew
// 	this.mainContainer.open('Source/ContainerViews/IntroduceSectionView/IntroduceView/IntroduceView.lay');
// historyView
// 	this.mainContainer.open('Source/ContainerViews/IntroduceSectionView/HistoryView/HistoryView.lay');
	//TODO:edit here

};

function SpiderGenClonePrjApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
