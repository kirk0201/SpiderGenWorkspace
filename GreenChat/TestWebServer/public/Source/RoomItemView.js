
/**
Constructor
Do not call Function in Constructor.
*/
function RoomItemView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(RoomItemView, AView);


RoomItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

RoomItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

RoomItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

RoomItemView.prototype.setData = function(data)
{
	this.data = data;
	this.roomName.setText(data.roomName);
};

RoomItemView.prototype.reqJoinRoom = function()
{
	theApp.qmChat.sendProcessByName('tr0005', this.getContainerId(), null, 
	
	(queryData)=>
	{
		var item = queryData.getBlockData('InBlock1')[0];
		item.roomId = this.data.roomId;
	}, 
	
	(queryData)=>
	{
		queryData.printQueryData();
		
		var item = queryData.getBlockData('OutBlock1')[0];
		
		//룸아이디를 셋팅 후 전달
		item.roomId = this.data.roomId;
		
		theApp.isRoomIn = true;
		
		
		var homeView = this.owner.getRootView();
		
		homeView.chatRoomArea.removeLoadView();
		homeView.chatRoomArea.loadView('Source/RoomView.lay');
		
	});

};

RoomItemView.prototype.onJoinBtnClick = function(comp, info, e)
{
	if(theApp.isRoomIn)
	{
		alert('방에 참여중입니다.');
		return;
	}
	//-----------------------------------------------------------
	//팝업창 만들기...................................
	
	var dlg = new AWindow();
	dlg.openAsDialog('Source/JoinInfoView.lay', this.getContainer(), 380, 340);
	dlg.setResultCallback((result)=>
	{
		if(result==0) this.reqJoinRoom();
	});

};
