
/**
Constructor
Do not call Function in Constructor.
*/
function RoomListView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(RoomListView, AView);


RoomListView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

RoomListView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	this.listView.setDividerColor('#00f');
	
	var thisObj = this;
	
	//---------------------------------------------
	//	방목록 조회
	theApp.qmChat.sendProcessByName('tr0002', this.getContainerId(), null, 
	
	function(queryData)
	{
		
	}, 
	
	function(queryData)
	{
		queryData.printQueryData();
		
		var blockData = queryData.getBlockData('OutBlock1');
		
		thisObj.listView.addItem('Source/RoomItemView.lay', blockData);
	});

};

RoomListView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


RoomListView.prototype.onCloseBtnClick = function(comp, info, e)
{

	this.getContainer().close();

};
