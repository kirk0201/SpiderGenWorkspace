
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RColumnScrollChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'ColumnScrollChart';

}
afc.extendsClass(RColumnScrollChart, RChart);

RColumnScrollChart.CONTEXT = 
{
	
    tag:'<div data-base="RColumnScrollChart" data-class="RColumnScrollChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RColumnScrollChart.prototype.setLayoutTemplate = function()
{	
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
                   <Options>\
                       <Caption text="스크롤 2D 칼럼 차트" fontFamily="맑은 고딕"/>\
                   </Options>\
                  <NumberFormatter id="numfmt" useThousandsSeparator="true"/>\
                     <Column2DChart showDataTips="true" gutterRight="10" columnWidthRatio="0.6">\
                         <verticalAxis>\
                          <LinearAxis interval="300" formatter="{numfmt}"/>\
                       </verticalAxis>\
                         <series>\
                        <Column2DSeries labelPosition="inside" labelAlign="top" insideLabelXOffset="-2" insideLabelYOffset="15" color="#ffffff" id="cs1" yField="Data1" showLabelVertically="true" displayName="Data1"/>\
                            <Column2DSeries labelPosition="inside" labelAlign="top" insideLabelXOffset="-2" insideLabelYOffset="15" color="#ffffff" id="cs2" yField="Data2" showLabelVertically="true" displayName="Data2"/>\
                            <Column2DSeries labelPosition="inside" labelAlign="top" insideLabelXOffset="-2" insideLabelYOffset="15" color="#ffffff" id="cs3" yField="Data3" showLabelVertically="true" displayName="Data3"/>'
                        +'</series>\
                       <horizontalAxis>\
                            <CategoryLinearAxis id="hAxis" categoryField="Gu"/>\
                         </horizontalAxis>\
                       <horizontalAxisRenderers>\
                           <ScrollableAxisRenderer axis="{hAxis}" visibleItemSize="7" fontFamily="맑은 고딕"/>\
                         </horizontalAxisRenderers>' 
                   +'</Column2DChart>\
                </rMateChart>';

	return layoutStr;
};

RColumnScrollChart.prototype.getDataTemplate = function()
{
	var chartData = [{"Gu":"A구","Data1":1000,"Data2":1200,"Data3":1500},
					 {"Gu":"B구","Data1":1900,"Data2":2200,"Data3":1800},
					 {"Gu":"C구","Data1":1150,"Data2":1550,"Data3":950},
					 {"Gu":"D구","Data1":1400,"Data2":1100,"Data3":800},
					 {"Gu":"E구","Data1":1300,"Data2":1500,"Data3":1800},
					 {"Gu":"F구","Data1":1100,"Data2":1500,"Data3":800},
					 {"Gu":"G구","Data1":1200,"Data2":900,"Data3":800},
					 {"Gu":"H구","Data1":2500,"Data2":1000,"Data3":900},
					 {"Gu":"I구","Data1":3000,"Data2":1000,"Data3":1000},
					 {"Gu":"J구","Data1":2000,"Data2":1400,"Data3":1600},
					 {"Gu":"K구","Data1":2100,"Data2":1400,"Data3":2000},
					 {"Gu":"L구","Data1":1700,"Data2":1500,"Data3":1400},
					 {"Gu":"M구","Data1":1000,"Data2":1000,"Data3":1000},
					 {"Gu":"N구","Data1":1400,"Data2":1700,"Data3":2000},
					 {"Gu":"O구","Data1":1500,"Data2":2000,"Data3":1700},
					 {"Gu":"P구","Data1":1900,"Data2":2000,"Data3":1000},
					 {"Gu":"Q구","Data1":1400,"Data2":1900,"Data3":1400},
					 {"Gu":"R구","Data1":2000,"Data2":2000,"Data3":1500},
					 {"Gu":"S구","Data1":1800,"Data2":1400,"Data3":1000},
					 {"Gu":"T구","Data1":2500,"Data2":1700,"Data3":1900},
					 {"Gu":"U구","Data1":3000,"Data2":1700,"Data3":1500},
					 {"Gu":"V구","Data1":2000,"Data2":1500,"Data3":1800},
					 {"Gu":"W구","Data1":2100,"Data2":1400,"Data3":1800},
					 {"Gu":"X구","Data1":1700,"Data2":1500,"Data3":2000}];

	return chartData;
};