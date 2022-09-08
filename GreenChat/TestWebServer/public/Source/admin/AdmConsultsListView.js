
/**
Constructor
Do not call Function in Constructor.
*/
function AdmConsultsListView()
{
	AView.call(this);

	this.rdoMn = null;

}
afc.extendsClass(AdmConsultsListView, AView);


AdmConsultsListView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	
};

AdmConsultsListView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};


AdmConsultsListView.prototype.getToDts = function()
{
	let dt = new Date(), yy = dt.getFullYear(), mm = dt.getMonth()+1, dd = dt.getDate(),
		toDay = [yy, mm.toString().padStart(2, '0'), dd.toString().padStart(2, '0')].join(''),
		strToday = [yy, mm.toString().padStart(2, '0'), dd.toString().padStart(2, '0')].join('-');
		
	return [toDay, strToday];

};

//초기화
AdmConsultsListView.prototype.doInit = function()
{
	
	let toDts = this.getToDts(),
		toDt = toDts[0],
		strToday = toDts[1];

	this.sDate.setDate(toDt);
	this.eDate.setData(toDt);
		
	this.rdoGrp.setSelectBtn(this.today);	
			
	this.stxt.setText('');
		
	this.sDrop.removeAll();
	this.sDrop.addItem('전체', '');
	this.sDrop.addItem('상담방제', 'roomTitle');
	this.sDrop.addItem('상담원ID', 'hostUser');
	this.sDrop.addItem('고객ID', 'userId');
	
	this.sDrop.selectItem(0);

};


AdmConsultsListView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	
	this.doInit();
	
	this.sendData(false);

};


AdmConsultsListView.prototype.addMonth = function(eDt, val)
{				 
	let mDt = new Date(eDt.setMonth(eDt.getMonth() + val)),
		yy = mDt.getFullYear(), 
		mm = mDt.getMonth()+1, 
		dd = mDt.getDate();
			
	return [
				yy, 
				mm.toString().padStart(2, '0'), 
				dd.toString().padStart(2, '0')
			].join('');
	
};


AdmConsultsListView.prototype.onRdosClick = function(comp, info, e)
{

	let compId = comp.getComponentId(),
		eDt = null, sDt = null, 		
		yy = null, mm = null, dd = null,		
		
		sKey = '';
	
	switch(compId)
	{
		case 'today' :					
			eDt = this.getToDts()[0];
			sDt = eDt;			
			break;
			
		case 'm1' :		
			eDt = this.getToDts()[0];						
			sDt = this.addMonth(new Date(), -1);			
			break;
			
		case 'm3' :			
			eDt = this.getToDts()[0];						
			sDt = this.addMonth(new Date(), -3);			
			break;
			
		case 'm6' :
			eDt = this.getToDts()[0];						
			sDt = this.addMonth(new Date(), -6);			
			break;
			
		default :
			eDt = this.getToDts()[0];
			sDt = eDt;			
			break;
	}
	
	this.sDate.setDate(sDt);
	this.eDate.setDate(eDt);
	
	
	this.sendData(false);
	
};



AdmConsultsListView.prototype.sendData = function(isNext)
{

	let thisObj = this,
		lastRoomKey = '';
	
	if(!isNext)
	{
		this.grid.removeAll();
	}
	else
	{
		let rowCnt = this.grid.getRowCount();
		
		if(rowCnt > 1)
		{
			lastRoomKey = this.grid.getCellText(rowCnt-2, 0);
		}
	}
	
	let sDt = this.sDate.getDateString(),
		sDate = [sDt.substr(0,4), sDt.substr(4, 2), sDt.substr(6)].join('-'),
		eDt = this.eDate.getDateString(),
		eDate = [eDt.substr(0,4), eDt.substr(4, 2), eDt.substr(6)].join('-');
	
	
	let actRdoBtn = this.rdoGrp.getSelectBtn(),
		isAllDay = actRdoBtn.getComponentId() == 'all' ? 'Y' : 'N';
	
	
	let sType = this.sDrop.getSelectedItemData();



	theApp.qmChat.sendProcessByName('tr9001', this.getContainerId(), null, 	
	(queryData) => {
		var blockData = queryData.getBlockData('InBlock1')[0];
		
		blockData.isAllDay = isAllDay  ; //기간전체여부
		blockData.sDate =  sDate;//검색 시작일
		blockData.eDate = eDate; //검색 종료일
		blockData.sType = sType; //검색조건
		blockData.sText = this.stxt.getText(); //검색어
				
		blockData.lastRoomKey = lastRoomKey; //마지막룸키
		
	},
	(queryData) => {
		queryData.printQueryData();
		
		if(!queryData) return;
		
		var dataArr = queryData.getBlockData('OutBlock1');
		
		if(!dataArr || dataArr.length < 1) return;
		
		dataArr.forEach((item) => {
		/*
		["방키","roomKey","","","char",0,"0"],
				["방제목","roomTitle","","","char",0,"0"],
				["상담원","hostUser","","","char",0,"0"],
				["고객명","userId","","","char",0,"0"],
				["등록일","regDate","","","char",0,"0"],
				["시작시간","sTime","","","char",0,"0"],
				["종료시간","eTime","","","char",0,"0"]*/
		
			this.grid.addRow([
				item.roomKey, item.roomTitle, item.regDate, 
				item.hostUser, item.userId, item.sTime, item.eTime
			]);
		
		});
		
		//처음페이지고 스크롤이 없으면 쿼리 한번 더 날림
		if(!isNext && !this.grid.isScroll() && this.grid.getRowCount()>0)
		{
			this.sendData(true);
		}
		
		
		
	});
	
	/*(queryData) =>
	{
		//처음페이지고 스크롤이 없으면 쿼리 한번 더 날림
		if(!isNext && !this.grid.isScroll() && this.grid.getRowCount()>0)
		{
			this.sendData(true);
		}
		
	});*/
	
	
};






AdmConsultsListView.prototype.onDateChange = function(comp, info, e)
{

	let sD = this.sDate.getDate(),
		sDt = new Date([sD.year, '-', sD.month-1, '-', sD.day].join('')),
		eD = this.eDate.getDate(),
		eDt = new Date([eD.year, '-', eD.month-1, '-', eD.day].join(''));

	if(sDt > eDt)
	{
		AToast.show('시작일은 종료일보다 이전이어야 합니다.');
		this.sDate.setData(this.eDate.getDateString());
		return;
	}
	
	this.sendData(false);
};

AdmConsultsListView.prototype.onBtnSearchClick = function(comp, info, e)
{

	this.sendData(false);

};

AdmConsultsListView.prototype.onGridScrollbottom = function(comp, info, e)
{

	this.sendData(true);
	
};

AdmConsultsListView.prototype.onGridSelect = function(comp, info, e)
{

	let row = info;
		
	if(row[0].isHeader) return;

	let row1Index =  comp.indexOfRow(row)*2,
		row2Index =  row1Index + 1,
		tData = [
			comp.getCellText(row1Index, 0), //"roomKey"
			comp.getCellText(row1Index, 1), //"roomTitle"
			comp.getCellText(row2Index, 1), //"hostUser" 
			comp.getCellText(row2Index, 3), //"userId"
			comp.getCellText(row1Index, 5), //"regDate"
			comp.getCellText(row2Index, 5), //"sTime" 
			comp.getCellText(row2Index, 6)  //"eTime"
		];

	let win = new AWindow('consultDetailView');	
	win.setData(tData);	
	win.openFull('Source/admin/AdmConsultView.lay', this.getContainer());
	
};
