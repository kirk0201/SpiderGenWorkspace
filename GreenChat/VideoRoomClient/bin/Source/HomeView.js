
/**
Constructor
Do not call Function in Constructor.
*/
function HomeView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(HomeView, AView);


HomeView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

HomeView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	this.roomListView.setDividerColor('#00f');
};

HomeView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	this.reqRoomList();

};

HomeView.prototype.reqRoomList = function()
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

HomeView.prototype.findRoomItemById = function(roomId)
{
	return this.roomListView.findItem(function(data)
	{
		return (data.roomId==roomId);
	});
};

HomeView.prototype.removeRoomItem = function(roomId)
{
	var item = this.findRoomItemById(roomId);
	
	this.roomListView.removeItem(item);
};

HomeView.prototype.setRoomItemInfo = function(info)
{
	//var item = this.findRoomItemById(roomId);
	
	console.log(info);
	
	
};
