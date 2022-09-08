
/**
Constructor
Do not call Function in Constructor.
*/
function AmdConsultList()
{
	AView.call(this);

	this.tData = null;

}
afc.extendsClass(AmdConsultList, AView);


AmdConsultList.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	this.tData = this.getTabData();

	
	this.grid.removeAll();
	
	
};

AmdConsultList.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.sendData(false);

};

AmdConsultList.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

};


AmdConsultList.prototype.sendData = function(isNext)
{

	let lastIdx = ''; //마지막 로그 아이디
	
	if(!isNext)
	{
		this.grid.removeAll();
	}
	else
	{
		let rowCnt = this.grid.getRowCount();		
		if(rowCnt > 0) lastIdx = this.grid.getCellText(rowCnt-1, 0);
	}
	
	
	theApp.qmChat.sendProcessByName('tr9002', this.getContainerId(), null, 	
	(queryData) =>
	{
		var blockData = queryData.getBlockData('InBlock1')[0];
	
		blockData.roomKey = this.tData[0];
		blockData.lastIdx = lastIdx;	
		
	}, 	
	(queryData) =>
	{
		queryData.printQueryData();
		
		if(!queryData) return;
		
		var dataArr = queryData.getBlockData('OutBlock1');
		
		if(!dataArr || dataArr.length < 1) return;
		
	},
	(queryData) =>
	{
		//처음페이지고 스크롤이 없으면 쿼리 한번 더 날림
		if(!isNext && !this.grid.isScroll() && this.grid.getRowCount()>0)
		{
			this.sendData(true);
		}
		
	});
	
	
};



AmdConsultList.prototype.onGridScrollbottom = function(comp, info, e)
{

	if(this.grid.getRowCount() < 1) return;

	this.sendData(true);
	

};
