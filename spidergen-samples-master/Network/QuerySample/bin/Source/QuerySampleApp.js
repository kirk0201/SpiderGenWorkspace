
/**
Constructor
Do not call Function in Constructor.
*/
function QuerySampleApp()
{
	AApplication.call(this);

	//TODO:edit here
	
	this.serverUrl = 'http://localhost:3000/users/';
	
	this.qm = null;

}
afc.extendsClass(QuerySampleApp, AApplication);


QuerySampleApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	var navigator = new ANavigator();
	navigator.registerPage('Source/MainView.lay', 'MainView');
	navigator.registerPage('Source/SampleView1.lay', 'SampleView1');
	
	navigator.goPage('MainView');

	//or

	//this.setMainContainer(new APage('main'));
	//this.mainContainer.open('Source/MainView.lay');

	this.connectServer();

};

QuerySampleApp.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};

QuerySampleApp.prototype.connectServer = function()
{
	this.qm = new WebQueryManager();
	
	var nio = new HttpIO(this.qm);
	this.qm.setNetworkIo(nio);
	
	this.qm.startManager(this.serverUrl);
};









var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new QuerySampleApp();
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

