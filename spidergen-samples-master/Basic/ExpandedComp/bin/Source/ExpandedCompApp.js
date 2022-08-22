


/**
기본 라이브러리를 Framework/afc 의 Default Load Settings 로 설정함.
*/

function ExpandedCompApp()
{
	AApplication.call(this);

	//TODO:edit here

}
afc.extendsClass(ExpandedCompApp, AApplication);


ExpandedCompApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	var navigator = new ANavigator();
	navigator.registerPage('Source/MainView.lay', 'MainView');
	navigator.registerPage('Source/DnDSampleView.lay', 'DnDSampleView');
	navigator.registerPage('Source/AnimaSampleView.lay', 'AnimaSampleView');
	navigator.registerPage('Source/ScrollManagerSampleView.lay', 'ScrollManagerSampleView');
	navigator.registerPage('Source/BackupManagerSampleView.lay', 'BackupManagerSampleView');
	navigator.registerPage('Source/ResponsiveSampleView.lay', 'ResponsiveSampleView');
	navigator.registerPage('Source/RBMSampleView.lay', 'RBMSampleView');
	
	
	navigator.goPage('MainView');

};

ExpandedCompApp.prototype.unitTest = function(unitUrl)
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
	    theApp = new ExpandedCompApp();
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

