
afc.loadScript("Framework/afc/component/AApplication.js");
afc.loadScript("Framework/afc/component/APage.js");
afc.loadScript("Framework/afc/component/ANavigator.js");

/**
Constructor
Do not call Function in Constructor.
*/
function RGridApp()
{
	AApplication.call(this);

	//TODO:edit here

}
afc.extendsClass(RGridApp, AApplication);


RGridApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	var navigator = new ANavigator();
	navigator.registerPage('Source/MainView.lay', 'MainView');
	navigator.goPage('MainView');

	//or

	//this.setMainContainer(new APage('main'));
	//this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new RGridApp();
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

