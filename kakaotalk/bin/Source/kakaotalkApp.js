afc.loadScript("Framework/afc/component/ANavigator.js");
afc.loadScript("Framework/afc/component/AIndicator.js");
afc.loadScript("Framework/afc/component/AToast.js");
/**
Constructor
Do not call Function in Constructor.
*/
function kakaotalkApp()
{
	AApplication.call(this);

	//TODO:edit here
	
// 	this.serverUrl = 'http://localhost:3000/login';
	this.serverUrl = Define.SERVER_URL;//;
	
	this.qm = null;

}
afc.extendsClass(kakaotalkApp, AApplication);


kakaotalkApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);
console.log(Define.SERVER_URL);
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	// new Navigator 생성
	var navigator = new ANavigator('navigator', null);
	
	navigator.registerPage('Source/MainView.lay', 'MainView');
	navigator.registerPage('Source/SignUpVIew/SignUpView.lay', 'SignUpView');
	navigator.registerPage('Source/MainChatView/MainChatView.lay', 'MainChatView');
	navigator.registerPage('Source/MainChatView/SubView/ChatsView/ChatRoomView/ChatRoomView.lay', 'ChatRoomView');
	navigator.goPage('MainView');
	//TODO:edit here
	
	
	this.connectServer();
};

kakaotalkApp.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};



kakaotalkApp.prototype.connectServer = function()
{
	//TODO:edit here
	
	this.qm = new WebQueryManager();
	var nio = new HttpIO(this.qm);
	
	console.log("qm",this.qm);
	console.log("nio", nio);
	
	this.qm.setNetworkIo(nio);
	
	this.qm.startManager(this.serverUrl);
};

var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new kakaotalkApp();
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

