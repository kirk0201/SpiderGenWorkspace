import "Framework/afc/component/ANavigator.js";
import "Framework/afc/component/AIndicator.js";
import "Framework/afc/component/AToast.js";

/**
Constructor
Do not call Function in Constructor.
*/
class JewelerChatApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function JewelerChatApp*onReady()
{
	super.onReady();
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

function JewelerChatApp*onNetworkReady()
{

};

function JewelerChatApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};

function JewelerChatApp*connectChatServer()
{
	this.qmChat = new WebQueryManager();
	var nio = new HttpIO(this.qmChat);	
// 	var nio = new WebsocketIO(this.qmChat);
	
	this.qmChat.setNetworkIo(nio);
	
	//query buffer 를 셋팅하지 않으면 json string 으로 전송한다.
	//this.qmChat.setQueryBuffer();
	
	this.qmChat.startManager(Define.SERVER);
};

