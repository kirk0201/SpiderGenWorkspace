
/**
 * @author asoocool
 */

function RGridEvent(acomp)
{
	AEvent.call(this, acomp);
	
}
afc.extendsClass(RGridEvent, AEvent);




//---------------------------------------------------------------------------------------------------
//	Component Event Functions


//---------------------------------------------------------------------------------------------------


//context메뉴 버그를 위한 이벤트 오버라이딩
RGridEvent.prototype.actionDownState = function()
{
	var rgrid = this.acomp;
	if(rgrid.getDataGrid()) var ConMenu = rgrid.getDataGrid().getContextMenu();
	if(ConMenu && ConMenu._visible) rgrid.getDataGrid().removePopUpContextMenu();
};

RGridEvent.prototype._scroll = function()
{
	/*if(this.bScrollBind) return;
	this.bScrollBind = true;*/
	
	var rgrid = this.acomp;

	rgrid.getDataGrid().addEventListener('scroll', function(event)
	{
		var pos = event.position;
		if(rgrid.lastPos && rgrid.lastPos == pos) return;
		else rgrid.lastPos = pos;
		if(pos == 0)
		{
			rgrid.reportEvent('scrolltop', null, event);
		}
		else if(pos >= rgrid.getDataGrid().getMaxVerticalScrollPosition())
		{
			rgrid.reportEvent('scrollbottom', null, event);	
		}

	});
};

//cell, row 이벤트 처리
RGridEvent.prototype._select = function()
{
	var rgrid = this.acomp;
	rgrid.getDataGrid().addEventListener('itemClick', function(event){
		setTimeout(function(){	
			rgrid.reportEvent('select', event, event);
		}, 0);
	});
};

RGridEvent.prototype._itemDoubleClick = function()
{
	var rgrid = this.acomp;
	rgrid.getDataGrid().addEventListener('itemDoubleClick', function(event){
		setTimeout(function(){	
			rgrid.reportEvent('itemDoubleClick', null ,event);
		}, 0);
	});
};

RGridEvent.prototype._menuItemSelect = function()
{
	var rgrid = this.acomp;
	rgrid.getDataGrid().addEventListener('menuItemSelect', function(event)
	{
		if(event.menuItemCaption == 'Print') 
		{
			if(afc.isIE)
			{
				var PrintWebBrowser = '<OBJECT ID="iPrint" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>';
				document.body.insertAdjacentHTML('beforeEnd', PrintWebBrowser);
				iPrint.ExecWB(7,1);
				iPrint.outerHTML="";
			}
			else
				window.print();
		}
		else if(event.menuItemCaption =='Export Excel')
		{
			 rgrid.gridRoot.excelExportSave("http://127.0.0.1/saveExcel.jsp", false);
		}
		rgrid.reportEvent('menuItemSelect', event.menuItemCaption, event);
	});
};



