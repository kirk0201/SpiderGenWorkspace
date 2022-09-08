import 'Framework/afc/component/AApplication.js'
import 'Framework/afc/component/APage.js'
import 'Framework/afc/component/APanel.js'

import 'Source/Define.cls'

/**
Constructor
Do not call Function in Constructor.
*/
class VideoRoomClientApp()
{
	super();
	
	//자신의 유저 정보
	this.userInfo = { userId: '', userName: '' };
	
	this.isRoomIn = false;

}
extends AApplication;


function VideoRoomClientApp*onReady()
{
	super.onReady();
	
	//alert(PROJECT_OPTION.general.scaleVal);
	
	//var chkWidth = Math.min(screen.width, screen.height);
	
	//alert(chkWidth);
	//alert(window.devicePixelRatio);

	
	this.connectChatServer();
	
	//this.sendEventInfo();

};

function VideoRoomClientApp*onNetworkReady()
{
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

};

function VideoRoomClientApp*unitTest(unitUrl)
{
	//TODO:edit here

	super.onReady();

	super.unitTest(unitUrl);
};

function VideoRoomClientApp*connectChatServer()
{
	this.qmChat = new WebQueryManager();
	
	var nio = new WebsocketIO(this.qmChat);
	
	this.qmChat.setNetworkIo(nio);
	
	//query buffer 를 셋팅하지 않으면 json string 으로 전송한다.
	//this.qmChat.setQueryBuffer();
	
	this.qmChat.startManager(Define.SERVER_ADDR, Define.SERVER_PORT);
};

//-------------------------------------------------------------------

//로그저장
function VideoRoomClientApp*regLogInfo(info)
{
	try{

		theApp.qmChat.sendProcessByName('tr9000', null, null, 	
		(queryData) => {

			let blockData = queryData.getBlockData('InBlock1');

			blockData[0].info = info ;

			queryData.printQueryData();		
		}, 
		(queryData) => {
		
			if(!queryData) return;
		
			queryData.printQueryData();
			
			var blockData = queryData.getBlockData('OutBlock1');
			
			if(!blockData || blockData.length < 1) return;

		});
	}
	catch(e)
	{
		console.log(e);
	}
};























