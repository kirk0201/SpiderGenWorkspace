
/**
Constructor
Do not call Function in Constructor.
*/
function SyncRoomView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SyncRoomView, AView);


SyncRoomView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SyncRoomView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.tabView.addTab('tab1', 'Source/items/Item1View.lay', 'tab1');
	this.tabView.addTab('tab2', 'Source/items/Item2View.lay', 'tab2');
	this.tabView.addTab('tab3', 'Source/items/Item3View.lay', 'tab3');
	
	this.tabView.selectTabByIndex(0);
	
	
	for(var i=0; i<10; i++)
	{
		this.dropBox.addItem('item-'+i);
		this.selectBox.addItem('item-'+i, i);
	}
	
	this.dropBox.selectItem(0);
	this.selectBox.selectItem(0);
	
	//this.getContainer().$ele.css('zoom', 0.64375);
};

SyncRoomView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	theApp.isRoomIn = true;
	
	//console.log(theApp.userInfo.userId);
	
	AEvent.isFreezing = (theApp.userInfo.userId!='asoosoft');

};

SyncRoomView.prototype.onDeactiveDone = function()
{
	AView.prototype.onDeactiveDone.call(this);
	
	theApp.isRoomIn = false;
	
};

SyncRoomView.prototype.onAddItemClick = function(comp, info, e)
{
	var data = [1,2,3];
	
	this.listView.addItem('Source/items/Item1View.lay', data);
	this.listView.addItem('Source/items/Item2View.lay', data);
	this.listView.addItem('Source/items/Item3View.lay', data);

};

SyncRoomView.prototype.onAddRowClick = function(comp, info, e)
{
	for(var i=0; i<30; i++)
		this.grid.addRow([i+1,i+2,i+3]);

};

SyncRoomView.prototype.onAddSlideClick = function(comp, info, e)
{

	this.slideView.addItem('Source/items/Item1View.lay', [1]);
	this.slideView.addItem('Source/items/Item2View.lay', [1]);
	this.slideView.addItem('Source/items/Item3View.lay', [1]);

};


SyncRoomView.prototype.onListViewScroll = function(comp, info, e)
{
	//console.log('SyncRoomView scroll event --------------');
	
	theApp.sendScrollEventInfo(comp, info.scrollTop);
};

SyncRoomView.prototype.onGridScroll = function(comp, info, e)
{

	theApp.sendScrollEventInfo(comp, info.scrollTop);

};

SyncRoomView.prototype.onScrlViewScroll = function(comp, info, e)
{

	theApp.sendScrollEventInfo(comp, info.scrollTop);

};

SyncRoomView.prototype.onATextField1Change = function(comp, info, e)
{

	//TODO:edit here

};

SyncRoomView.prototype.onSelectBoxChange = function(comp, info, e)
{

	//TODO:edit here

};
