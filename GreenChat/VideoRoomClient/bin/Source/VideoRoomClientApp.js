afc.loadScript("Framework/afc/component/AApplication.js");
afc.loadScript("Framework/afc/component/APage.js");
afc.loadScript("Framework/afc/component/APanel.js");

afc.loadScript("Source/Define.cls");

/**
Constructor
Do not call Function in Constructor.
*/
function VideoRoomClientApp()
{
	AApplication.call(this);
	
	//자신의 유저 정보
	this.userInfo = { userId: '', userName: '' };
	
	this.isRoomIn = false;

}
afc.extendsClass(VideoRoomClientApp, AApplication);


VideoRoomClientApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);
	
	//alert(PROJECT_OPTION.general.scaleVal);
	
	//var chkWidth = Math.min(screen.width, screen.height);
	
	//alert(chkWidth);
	//alert(window.devicePixelRatio);

	
	this.connectChatServer();
	
	//this.sendEventInfo();

};

VideoRoomClientApp.prototype.onNetworkReady = function()
{
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

};

VideoRoomClientApp.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	AApplication.prototype.onReady.call(this);

	AApplication.prototype.unitTest.call(this, unitUrl);
};

VideoRoomClientApp.prototype.connectChatServer = function()
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
VideoRoomClientApp.prototype.regLogInfo = function(info)
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
























var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new VideoRoomClientApp();
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

