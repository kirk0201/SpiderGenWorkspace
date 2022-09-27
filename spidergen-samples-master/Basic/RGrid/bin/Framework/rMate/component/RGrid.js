

if(window.afc_)
{
	afc_.loadScript('Framework/rMate/library/LicenseKey/rMateGridH5License.js');

	afc_.loadScript('Framework/rMate/library/rMateGridH5/rMateGridH5.js');
	//afc_.loadScript('Framework/rMate/library/rMateGridH5/cpexcel.js');
	afc_.loadScript('Framework/rMate/library/rMateGridH5/jszip.min.js');
	//afc_.loadScript('Framework/rMate/library/rMateGridH5/xlsx.min.js');

	afc_.loadCss('Framework/rMate/style/rMateH5.css');
}
else
{
	afc.loadScript('Framework/rMate/library/LicenseKey/rMateGridH5License.js');

	afc.loadScript('Framework/rMate/library/rMateGridH5/rMateGridH5.js');
	//afc.loadScript('Framework/rMate/library/rMateGridH5/cpexcel.js');
	afc.loadScript('Framework/rMate/library/rMateGridH5/jszip.min.js');
	//afc.loadScript('Framework/rMate/library/rMateGridH5/xlsx.min.js');

	afc.loadCss('Framework/rMate/style/rMateH5.css');
}

/**
 * @author asoocool
 */


function RGrid()
{
	AComponent.call(this);
	
	this.frwName = 'rMate';
	this.gridApp = null;
	this.delegatorArr = [];
	this.islayoutLoad = false;
	this.isdataLoad = false;
	this.dummyData = null;
	this.isFirstLoad = true;
	this.qryName = null;
}
afc.extendsClass(RGrid, AComponent);

RGrid.CONTEXT = 
{
	
    tag:'<div data-base="RGrid" data-class="RGrid" data-layout-xml="empty" class="RGrid-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: ['select', 'scrolltop', 'scrollbottom', 'menuItemSelect', 'itemDoubleClick']
};

RGrid.prototype.init = function(context, evtListener)
{
	AComponent.prototype.init.call(this, context, evtListener);
	var thisObj = this;
	this.createXml();
	if(this.isDev()) 
	{
		this.createData();
		//AIndicator_.show();
	}
	
	setTimeout(function()
	{	
		thisObj.createGrid();
	}, 0);
	
};

RGrid.prototype.makeComponentId = function()
{	
	if(this.getComponentId()) return;
	var d = new Date();
	var time = d.getTime()%1000000;
	this.setComponentId('RGrid'+time);
	if(this.isDev()) theApp.getLayoutView().layTreeView.treeRename(this, this.getComponentId());
};

RGrid.prototype.destroy = function()
{	
	if(this.gridApp)
		this.gridApp.destroy();
};

RGrid.prototype.removeFromView = function(onlyRelease)
{
	this.destroy();
	AComponent.prototype.removeFromView.call(this, onlyRelease);
};


RGrid.prototype.createGrid = function()
{
	if(!this.isValid()) return;

	this.makeComponentId();
	var gridVars = "rMateOnLoadCallFunction=RGrid.gridReadyHandler";
	this.gridName = this.getComponentId()+Math.floor(Math.random()*100000000);
	
	if(this.element.getAttribute('data-layout-xml') != "empty")
	{
		this.element.innerHTML='';
	}
	rMateGridH5.setAssetsPath('./Framework/rMate/image/rMateGridH5/');
	rMateGridH5.create(this.gridName, this.getElementId(), gridVars, "100%", "100%");
};

RGrid.prototype.updatePosition = function(pWidth, pHeight)
{
	AComponent.prototype.updatePosition.call(this, pWidth, pHeight);
	
	if(this.gridApp)
		this.gridApp.resize();
};


RGrid.gridReadyHandler = function(id)
{
	var ele = $('#'+id)[0];
	var rgrid = $(ele).parent()[0].acomp;
	rgrid.gridApp = document.getElementById(id);
	rgrid.gridRoot = rgrid.gridApp.getRoot();  // 데이터와 그리드를 포함하는 객체  		
	
	rgrid.gridRoot.addEventListener('layoutComplete',function(event){
	});
	
	var dataCompleteCnt = 0;
	
	rgrid.gridRoot.addEventListener('dataComplete',function(event){
		dataCompleteCnt++;
		if(!rgrid.isDev())
		{	
			if(dataCompleteCnt == 1) 
			{
				rgrid.gridRoot.removeItemAt(0);
				rgrid.aevent._select();
				rgrid.aevent._itemDoubleClick();
				rgrid.aevent._scroll();
				rgrid.aevent._menuItemSelect();
				if(rgrid.events && !rgrid.events.actiondown) rgrid.aevent.actiondown();
			}
			
			for(var i=0;i<rgrid.delegatorArr.length;i++)
			{
				if(rgrid.delegatorArr[i].onGridReady)
				{	
					rgrid.delegatorArr[i].onGridReady(rgrid);
				}
			}
			
		}
		//else AIndicator_.hide();
	});
	
	rgrid.createLayout(id);
	if(rgrid.isDev()) rgrid.setData(rgrid.dummyData);	
	else rgrid.setData([{"tempData451242":''}]);
		
};

RGrid.prototype.createData = function()
{
	if(this.element.getAttribute('data-dummyData') == null)
	{
		this.dummyData = [
			{"dummy0":'2017년', "dummy1":'서울', "dummy2":"400", "dummy3":"1"},
			{"dummy0":'2017년', "dummy1":'서울', "dummy2":"300", "dummy3":"2"},
			{"dummy0":'2017년', "dummy1":'부산', "dummy2":"200", "dummy3":"3"}
		];

		this.element.setAttribute('data-dummyData', JSON.stringify(this.dummyData));
	}
	else
	{
		this.dummyData = JSON.parse(this.element.getAttribute('data-dummyData'));
	}
};

RGrid.prototype.useDummyData = function()
{
	this.createData();
	this.gridApp.addData(this.dummyData);
};


RGrid.prototype.getDataGrid = function()
{
	if(this.gridApp && this.gridApp.getRoot()) return this.gridApp.getRoot().getDataGrid();
};

RGrid.prototype.setDelegator = function(delegator)
{
	this.delegatorArr.push(delegator);
};

RGrid.prototype.setData = function(gridData)
{
	if(gridData) this.gridApp.setData(gridData);
	else this.gridApp.setData();
};

RGrid.prototype.addData = function(gridData, index)
{
	this.gridApp.addData(gridData, index);
};

RGrid.prototype.removeItemAt = function(index)
{
	this.gridRoot.removeItemAt(index);
};

RGrid.prototype.removeAll = function()
{
	this.gridRoot.removeAll();
};

RGrid.prototype.createXml = function()
{
	if(this.element.getAttribute('data-layout-xml') == "empty")
	{
		var layoutStr ='<rMateGrid>\
					 	<NumberFormatter id="numfmt" useThousandsSeparator="true"/>\
						<PercentFormatter id="percfmt" useThousandsSeparator="true"/>\
						<ContextMenu id="cMenu">\
							<ContextMenuItem caption="Print"/>\
							<ContextMenuItem caption="Export Excel"/>\
						</ContextMenu>\
    					<DataGrid contextMenu="{cMenu}" dragSelectable="true" height="22" id="dg1" selectionMode="singleRows" styleName="gridStyle" verticalAlign="middle">\
        					<columns>\
								<DataGridColumn dataField="dummy0" headerText="year"/>\
								<DataGridColumn dataField="dummy1" headerText="region"/>\
								<DataGridColumn dataField="dummy2" headerText="score"/>\
								<DataGridColumn dataField="dummy3" headerText="rank"/>\
							</columns>\
        					<dataProvider>\
								<SpanArrayCollection source="{$gridData}"/></dataProvider>\
    					</DataGrid>\
    					<Style>\
		.gridStyle\n\
		{\n\
			color:#333333;\n\
			alternatingItemColors:#ffffff,#f5f5f5;\n\
			borderTopColor:#c2c2c2;\n\
			headerColors:#d9dce0,#d9dce0;\n\
			headerStyleName:gridHeaderStyle;\n\
			headerSeparatorColor:#c2c2c2;\n\
			headerBorderTopColor:#c2c2c2;\n\
			horizontalGridLines:true;\n\
			horizontalGridLineColor:#c2c2c2;\n\
			selectionColor:#9ebbdd;\n\
			rollOverColor:#d4dbe4;\n\
			fontSize:12px;\n\
			verticalAlign:middle;\n\
			verticalGridLines:false;\n\
			verticalGridLineColor:#abd3bf;\n\
		}\n\
		.gridHeaderStyle\n\
		{\n\
			color:#333333;\n\
			fontSize:12px;\n\
			horizontalAlign:center;\n\
			verticalAlign:middle;\n\
			separatorColor:#c2c2c2;\n\
		}\n\
    					</Style>\
					</rMateGrid>';
					 
		this.element.setAttribute('data-layout-xml', layoutStr);
	}
	else
	{
		var layoutStr = this.element.getAttribute('data-layout-xml');
	}
	
	this.parser = new DOMParser();
	this.layoutXml = this.parser.parseFromString(layoutStr,"text/xml");
	
};

RGrid.prototype.createLayout = function()
{
	this.gridApp.setLayout(this.layoutXml);
	
	if(this.callback)
	{
		this.callback.call();
		this.callback = null;
	}
};

RGrid.prototype.setCreateDoneCallback = function(callback)
{
	this.callback = callback;
};

RGrid.prototype.updateLayout = function(xml, isFirst)
{
	if(!isFirst)
	{
		var view = theApp.getLayoutView();
		//레이아웃 뷰가 활성화되어져 있는 경우만
		if(view) 
		{
			if(this.isDev()) theApp.mdiManager.reportModify(view.getDocument(), true);
		}
	}
	if(xml) this.layoutXml = xml;
		
	this.gridApp.setLayout(this.layoutXml);
	var layoutStr = new XMLSerializer().serializeToString(this.layoutXml.documentElement);
	this.element.setAttribute('data-layout-xml', layoutStr);
};

RGrid.prototype.doubleClickView = function(e)
{
	var wnd = new AFrameWnd_('RgridLayoutDlg');
	var gridWidth = this.$ele.css('width');
	
	var widthForOpen = parseInt(gridWidth)+20;
	if(widthForOpen < 500) wnd.openAsDialog('Framework/rMate/attribute/RMateDlg/RGridLayoutDlg.lay', null, 500, 700);
	else if(widthForOpen > 1500) wnd.openAsDialog('Framework/rMate/attribute/RMateDlg/RGridLayoutDlg.lay', null, 1500, 700);
	else wnd.openAsDialog('Framework/rMate/attribute/RMateDlg/RGridLayoutDlg.lay', null, parseInt(gridWidth)+20, 700);
	var layoutStr = new XMLSerializer().serializeToString(this.layoutXml.documentElement);
	wnd.layoutStr = layoutStr;
	wnd.gridWidth = gridWidth;
	wnd.dummyData = this.dummyData;
	wnd.setTitleText('RGrid Editor');
	var thisObj = this;
	wnd.setResultCallback(function(result)
	{
		if(result)
		{
			thisObj.onFrameResult(result);
		}
	});

};

RGrid.prototype.onFrameResult  = function(result)
{
	this.updateLayout(this.parser.parseFromString(result[0],"text/xml"), false);
	this.dummyData = result[1];
	this.setData(result[1]);
	this.element.setAttribute('data-dummyData', JSON.stringify(result[1]));
	
};

RGrid.prototype.getMappingCount  = function()
{
	return this.getDataGrid().getColumns().length;
};

RGrid.prototype.setQueryData = function(dataArr, keyArr, queryData)
{
	if(!keyArr) return;
	if(dataArr.length==0) return;
	
	var isFieldChange = true;
	if(queryData)
	{
		if(this.qryName == queryData.getQueryName()) isFieldChange = false;
		else this.qryName = queryData.getQueryName();
	}
	
	if(isFieldChange)
	{
		var colLength = this.getDataGrid().getColumns().length;

		//키값 바꾸고 xml갱신
		for(var i=0;i<colLength;i++)
		{
			if(keyArr[i] && this.getDataGrid().getColumns()[i].getDataField() !== undefined) 
				this.getDataGrid().getColumns()[i].setDataField(keyArr[i]);
		}
		var gridKeyIndex = 0;
		if(this.layoutXml.getElementsByTagName('columns')[0])
		{
			var colEle = this.layoutXml.getElementsByTagName('columns')[0].childNodes;
		}
		else if(this.layoutXml.getElementsByTagName('groupedColumns')[0])
		{
			var colEle = this.layoutXml.getElementsByTagName('groupedColumns')[0].childNodes;
		}

		var setQueryDataGroupEle = function(item)
		{
			if(item.nodeName == "#text" || item.nodeName == "#comment") return;
			else if(item.nodeName == 'DataGridColumnGroup')
			{
				for(var i=0;i<item.childNodes.length;i++)
				{
					setQueryDataGroupEle(item.childNodes[i], keyArr);
				}
			}
			else 
			{
				if(keyArr[gridKeyIndex]) item.setAttribute('dataField', keyArr[gridKeyIndex]);

				gridKeyIndex++;
			}
		}

		if(colEle)
		{
			for(var i=0;i<colEle.length;i++)
			{
				setQueryDataGroupEle(colEle[i]);
			}
		}
	}
	
	//데이터 삽입
	this.addData(dataArr);
	this.gridRoot.calculateAutoHeight();
	
};


