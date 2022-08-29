import "Framework/afc/component/ANavigator.js";
import 'Framework/afc/component/AIndicator.js';
import 'Framework/afc/component/AToast.js';
/**
Constructor
Do not call Function in Constructor.
*/
class kakaotalkApp()
{
	super();

	//TODO:edit here
	
// 	this.serverUrl = 'http://localhost:3000/login';
// 	this.serverUrl = Define.SERVER_URL;
	this.qm = null;

}
extends AApplication;


function kakaotalkApp*onReady()
{
	super.onReady();
/*	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');*/

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

function kakaotalkApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};



function kakaotalkApp*connectServer()
{
	//TODO:edit here
	
	this.qm = new WebQueryManager();
	var nio = new HttpIO(this.qm);
	
	console.log("qm",this.qm);
	console.log("nio", nio);
	
	this.qm.setNetworkIo(nio);
	
// 	this.qm.startManager(this.serverUrl);
	this.qm.startManager(Define.SERVER_URL);

};
