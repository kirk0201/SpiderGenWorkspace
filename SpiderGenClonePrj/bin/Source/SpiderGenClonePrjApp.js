
/**
Constructor
Do not call Function in Constructor.
*/
function SpiderGenClonePrjApp()
{
	AApplication.call(this);

	//TODO:edit here

}
afc.extendsClass(SpiderGenClonePrjApp, AApplication);


SpiderGenClonePrjApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

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

SpiderGenClonePrjApp.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};

var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new SpiderGenClonePrjApp();
	    theApp.isLoadTheme = false;
        if(PROJECT_OPTION.unitUrl) theApp.unitTest(PROJECT_OPTION.unitUrl);
        else theApp.onReady();
    });
};

if(!AApplication.manualStart)
{
    $(document).ready(function()
    {
        AApplication.start();
    });
}
else if(AApplication.manualStart == 2)
{
    AApplication.start();
}

