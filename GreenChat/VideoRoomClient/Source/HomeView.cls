
/**
Constructor
Do not call Function in Constructor.
*/
class HomeView()
{
	super();

	//TODO:edit here

}
extends AView;


function HomeView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function HomeView*onInitDone()
{
	super.onInitDone();
	
	this.roomListView.setDividerColor('#00f');
};

function HomeView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	this.reqRoomList();

};

function HomeView*reqRoomList()
{
	this.roomListView.removeAllItems();
	
	//---------------------------------------------
	//	방목록 조회
	theApp.qmChat.sendProcessByName('tr0002', this.getContainerId(), null, 
	
	(queryData)=>
	{
		
	}, 
	
	(queryData)=>
	{
		queryData.printQueryData();
		
		var blockData = queryData.getBlockData('OutBlock1');
		
		this.roomListView.addItem('Source/RoomItemView.lay', blockData);
	});

};

function HomeView*findRoomItemById(roomId)
{
	return this.roomListView.findItem(function(data)
	{
		return (data.roomId==roomId);
	});
};

function HomeView*removeRoomItem(roomId)
{
	var item = this.findRoomItemById(roomId);
	
	this.roomListView.removeItem(item);
};

function HomeView*setRoomItemInfo(info)
{
	//var item = this.findRoomItemById(roomId);
	
	console.log(info);
	
	
};
