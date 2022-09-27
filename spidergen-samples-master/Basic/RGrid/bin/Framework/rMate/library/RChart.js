

if(window.afc_)
{
	afc_.loadScript('Framework/rMate/library/LicenseKey/rMateChartH5License.js');
	afc_.loadScript('Framework/rMate/library/rMateChartH5/rMateIntegrationH5.js');
	afc_.loadCss('Framework/rMate/style/rMateChartH5.css');
}
else
{
	afc.loadScript('Framework/rMate/library/LicenseKey/rMateChartH5License.js');
	afc.loadScript('Framework/rMate/library/rMateChartH5/rMateIntegrationH5.js');
	afc.loadCss('Framework/rMate/style/rMateChartH5.css');
}



/**
 * @author asoocool
 */


function RChart()
{
	AComponent.call(this);
	
	this.frwName = 'rMate';
	this.rChartElement = null;
	this.delegatorArr = [];
	this.dummyData = null;
}
afc.extendsClass(RChart, AComponent);

RChart.rChartThis = null;

RChart.prototype.init = function(context, evtListener)
{
	AComponent.prototype.init.call(this, context, evtListener);
	var thisObj = this;
	
	this.createLayout();
	if(this.isDev()) 
	{
		this.createData();
		//AIndicator.show();
	}
	
	setTimeout(function()
	{	
		thisObj.createChart();
	}, 0);
	
};


RChart.prototype.makeComponentId = function()
{
	if(!this.getComponentId())
	{
		var d = new Date();
		var time = d.getTime()%1000000;
		this.setComponentId(this.ChartNameOfType+time);	
		if(this.isDev()) theApp.getLayoutView().layTreeView.treeRename(this, this.getComponentId());
	}
	
};

RChart.prototype.destroy = function()
{
	if(this.rChartElement)
		this.rChartElement.destroy();
};

RChart.prototype.removeFromView = function(onlyRelease)
{	
	this.destroy();
	AComponent.prototype.removeFromView.call(this, onlyRelease);
};

RChart.prototype.createChart = function()
{
	if(!this.isValid()) return;

	this.makeComponentId();
	var chartVars = "rMateOnLoadCallFunction=RChart.chartReadyHandler";
	this.chartName = this.getComponentId()+Math.floor(Math.random()*100000000);
	
	if(this.element.getAttribute('data-layout-xml') != "empty")
	{
		this.element.innerHTML='';
	}
	
	rMateChartH5.create(this.chartName, this.getElementId(), chartVars, "100%", "100%");
};

RChart.prototype.updatePosition = function(pWidth, pHeight)
{
	AComponent.prototype.updatePosition.call(this, pWidth, pHeight);
	
	if(this.rChartElement) 
		this.rChartElement.resize();
};

RChart.chartReadyHandler = function(id)
{
	var ele = $('#'+id)[0];
	var rchart = $(ele).parent()[0].acomp;
	rchart.rChartElement = ele;
	rchart.updateXml(null, true);	
	//if(this.isDev()) AIndicator.hide();
	rchart.chartReady();
};

RChart.prototype.setQueryData = function(queryData)
{	
	if(queryData) this.rChartElement.setData(queryData);
};

RChart.prototype.setDelegator = function(delegator)
{
	this.delegatorArr.push(delegator);
};

RChart.prototype.createData = function()
{	
	if(this.element.getAttribute('data-dummyData') == null)
	{
		if(this.getDataTemplate)
		{
			this.dummyData = this.getDataTemplate();
		}
		else 
		{
			this.dummyData = 
				[
				{"Month":"1월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1},
				{"Month":"2월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1},
				{"Month":"3월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1},
				{"Month":"4월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1},
				{"Month":"5월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1},
				{"Month":"6월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1},
				{"Month":"7월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1},
				{"Month":"8월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1},
				{"Month":"9월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1},
				{"Month":"10월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1},
				{"Month":"11월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1},
				{"Month":"12월", "dummyData1":Math.floor(Math.random() * 100) + 1, "dummyData2":Math.floor(Math.random() * 100) + 1, "dummyData3":Math.floor(Math.random() * 100) + 1}
			];
			this.element.setAttribute('data-dummyData', JSON.stringify(this.dummyData));
		}
	}
	else
	{
		this.dummyData = JSON.parse(this.element.getAttribute('data-dummyData'));
	}	
	
};

RChart.prototype.chartReady = function()
{	
	if(this.isDev()) 
	{
		this.setData(this.dummyData);
	}
	else
	{
		this.setData([]);
		var time = new Date().getTime() % 10000000;
		this.rChartElement.id = 'RChart'+time;
	}
	
	for(var i=0;i<this.delegatorArr.length;i++)
	{
		if(this.delegatorArr[i].onChartReady)
		{
			this.delegatorArr[i].onChartReady(this);
		}
	}
};


RChart.prototype.setData = function(data)
{
	this.rChartElement.setData(data);
};

RChart.prototype.useDummyData = function()
{
	this.createData();
	this.rChartElement.setData(this.dummyData);
};

RChart.prototype.createLayout = function()
{
	if(this.element.getAttribute('data-layout-xml') == "empty")
	{
		//각 컴포넌트에서 선언해둔 초기제공차트
		var layoutStr = this.setLayoutTemplate();
		this.parser = new DOMParser();
		this.layoutXml = this.parser.parseFromString(layoutStr,"text/xml");
		this.element.setAttribute('data-layout-xml', layoutStr);
	}
	else
	{
		var layoutStr = this.element.getAttribute('data-layout-xml');
		this.parser = new DOMParser();
		this.layoutXml = this.parser.parseFromString(layoutStr,"text/xml");
	}
		
};

RChart.prototype.updateDummyData = function(data)
{
	var view = theApp.getLayoutView();
	//레이아웃 뷰가 활성화되어져 있는 경우만
	if(view) 
	{
		if(this.isDev())
			theApp.mdiManager.reportModify(view.getDocument(), true);
	}
	this.element.setAttribute('data-dummyData', data);
	this.dummyData = JSON.parse(data);
	this.setData(this.dummyData);
};




RChart.prototype.updateXml = function(xml, isFirst)
{
	if(!isFirst)
	{
		var view = theApp.getLayoutView();
		//레이아웃 뷰가 활성화되어져 있는 경우만
		if(view) 
		{
			if(this.isDev())
				theApp.mdiManager.reportModify(view.getDocument(), true);
		}
	}
	if(xml) this.layoutXml = xml;
	
	this.rChartElement.setLayout(this.layoutXml);
	var layoutStr = new XMLSerializer().serializeToString(this.layoutXml.documentElement);
	this.element.setAttribute('data-layout-xml', layoutStr);
};

RChart.prototype.doubleClickView = function(e)
{
	if(AWindow_.findWindow('RChartXmlFrame'))
	{
		var wnd = AWindow_.findWindow('RChartXmlFrame');
	}
	else
	{
		var wnd = new AFrameWnd_('RChartXmlFrame');
		wnd.open('Framework/rMate/attribute/RMateDlg/RChartLayoutDlg.lay', null, 400, 400 , 650, 570);
		wnd.setTitleText('RChart Xml Editor');
		wnd.setWindowOption(
		{
			isCenter: true
		});
	}
	
	wnd.layoutXml = this.layoutXml;
	wnd.dummyData = this.dummyData;
	wnd.parser = this.parser;
	wnd.callbackView = this;
	
	
	/*wnd.setResultCallback(function(result)
	{
		if(result)
		{
			
		}
	});*/

};

RChart.prototype.getMappingCount  = function()
{
	var seriesEle = this.layoutXml.getElementsByTagName('series');
	var cnt = 0;
	for(var i=0; i<seriesEle.length;i++)
	{
		cnt = cnt + this.layoutXml.getElementsByTagName('series')[i].childNodes.length;
	}
	
	return cnt;
	
};

RChart.prototype.setLayout  = function(xml)
{
	this.rChartElement.setLayout(xml);
};

