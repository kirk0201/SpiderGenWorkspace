afc.loadScript("Framework/afc/component/ANavigator.js");
afc.loadScript("Framework/afc/component/AIndicator.js");
afc.loadScript("Framework/afc/component/AToast.js");

/**
Constructor
Do not call Function in Constructor.
*/
function JewelerChatApp()
{
	AApplication.call(this);

	//TODO:edit here

}
afc.extendsClass(JewelerChatApp, AApplication);


JewelerChatApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);
	/*	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');*/
	
	theApp.navi = new ANavigator('navigator', null);
	
	theApp.navi.registerPage("Source/MainView.lay", "MainView");
	theApp.navi.registerPage("Source/SignUpView.lay", "SignUpView");
	theApp.navi.registerPage("Source/RegistUserView.lay", "RegistUserView");
	theApp.navi.registerPage("Source/DetailUserView.lay", "DetailUserView");
	theApp.navi.registerPage("Source/MoreEduView.lay", "MoreEduView");
	theApp.navi.registerPage("Source/MoreExpView.lay", "MoreExpView");
	theApp.navi.registerPage("Source/MoreDetailView.lay", "MoreDetailView");
	theApp.navi.goPage('MainView');
	
	//TODO:edit here
	this.connectChatServer();
};

JewelerChatApp.prototype.onNetworkReady = function()
{

};

JewelerChatApp.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};

JewelerChatApp.prototype.connectChatServer = function()
{
	this.qmChat = new WebQueryManager();
	var nio = new HttpIO(this.qmChat);	
// 	var nio = new WebsocketIO(this.qmChat);
	
	this.qmChat.setNetworkIo(nio);
	
	//query buffer 를 셋팅하지 않으면 json string 으로 전송한다.
	//this.qmChat.setQueryBuffer();
	
	this.qmChat.startManager(Define.SERVER);
};


var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new JewelerChatApp();
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

