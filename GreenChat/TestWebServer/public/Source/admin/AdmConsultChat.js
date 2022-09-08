
/**
Constructor
Do not call Function in Constructor.
*/
function AdmConsultChat()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(AdmConsultChat, AView);


AdmConsultChat.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

AdmConsultChat.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.tData = this.getTabData();
	
	this.sendData();

};

AdmConsultChat.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	
};

AdmConsultChat.prototype.sendData = function(isNext)
{
	
	let lastMsgIdx = ''; //마지막 메시지 아이디
	
		
	if(!isNext)
	{
		this.list.removeAllItems();
	}
	else
	{
		let lastItem = this.list.getLastItem();
		
		if(lastItem)
		{			
			lastMsgIdx = lastItem.itemData.msgIdx;			
		}
		
	}
	
	
	theApp.qmChat.sendProcessByName('tr9004', this.getContainerId(), null, 	
	(queryData) =>
	{
		var blockData = queryData.getBlockData('InBlock1')[0];
		
		blockData.roomKey = this.tData[0];
		blockData.lastMsgIdx = lastMsgIdx;	
		
	}, 	
	(queryData) =>
	{
	
		if(!queryData) return;
		
		queryData.printQueryData();
		
		var dataArr = queryData.getBlockData('OutBlock1');
		
		if(!dataArr || dataArr.length < 1) return;
				
		dataArr.forEach((item) => {		
			let lay = item.isHostUser == 'Y' ? 'Source/admin/AdmConsultChatLItem.lay' : 'Source/admin/AdmConsultChatRItem.lay';
			this.list.addItem(lay, [item]);
		});
		
		//처음페이지고 스크롤이 없으면 쿼리 한번 더 날림
		if(!isNext && !this.list.isScroll() && this.list.getItemCount()>0)
		{
			this.sendData(true);
		}
		
	});
	
};

AdmConsultChat.prototype.onListScrollbottom = function(comp, info, e)
{

	if(this.list.getItemCount()<1) return;
	
	this.sendData(true);

};

AdmConsultChat.prototype.onAButton1Click = function(comp, info, e)
{

	this.sendData(false);

};
