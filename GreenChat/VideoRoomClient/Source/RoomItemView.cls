
/**
Constructor
Do not call Function in Constructor.
*/
class RoomItemView()
{
	super();

	//TODO:edit here

}
extends AView;


function RoomItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function RoomItemView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function RoomItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function RoomItemView*setData(data)
{
	this.data = data;
	this.roomName.setText(data.roomName);
};

function RoomItemView*reqJoinRoom()
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
		
		
		var homeView:HomeView = this.owner.getRootView();
		
		homeView.chatRoomArea.removeLoadView();
		homeView.chatRoomArea.loadView('Source/RoomView.lay');
		
	});

};

function RoomItemView*onJoinBtnClick(comp, info, e)
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
