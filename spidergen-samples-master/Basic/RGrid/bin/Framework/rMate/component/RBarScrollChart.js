
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RBarScrollChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'BarScrollChart';

}
afc.extendsClass(RBarScrollChart, RChart);

RBarScrollChart.CONTEXT = 
{
	
    tag:'<div data-base="RBarScrollChart" data-class="RBarScrollChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RBarScrollChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
                   <Options>\
                       <Caption text="스크롤 2D 바 차트" fontFamily="맑은 고딕"/>\
                    </Options>\
                  <NumberFormatter id="numfmt" useThousandsSeparator="true"/>\
                   <Bar2DChart showDataTips="true" gutterRight="20" gutterTop="10" gutterBottom="50" gutterLeft="60" barWidthRatio="0.7">\
                     <horizontalAxis>\
                            <LinearAxis interval="300" formatter="{numfmt}"/>\
                       </horizontalAxis>\
                       <series>\
                        <Bar2DSeries labelPosition="inside" color="#ffffff" id="cs1" xField="Data1" displayName="Data1" itemRenderer="SemiCircleBarItemRenderer" halfWidthOffset="1" insideLabelYOffset="-2"/>\
                          <Bar2DSeries labelPosition="inside" color="#ffffff" id="cs2" xField="Data2" displayName="Data2" itemRenderer="SemiCircleBarItemRenderer" halfWidthOffset="1" insideLabelYOffset="-2"/>\
                          <Bar2DSeries labelPosition="inside" color="#ffffff" id="cs3" xField="Data3" displayName="Data3" itemRenderer="SemiCircleBarItemRenderer" halfWidthOffset="1" insideLabelYOffset="-2"/>\
                      </series>\
                       <verticalAxis>\
                          <CategoryLinearAxis id="hAxis" categoryField="Gu" ticksBetweenLabels="true"/>\
                            </verticalAxis>\
                         <verticalAxisRenderers>\
                             <ScrollableAxisRenderer axis="{hAxis}" visibleItemSize="5" fontFamily="맑은 고딕"/>\
					  </verticalAxisRenderers>'  
                     +'</Bar2DChart>\
               </rMateChart>';
	return layoutStr;
};

RBarScrollChart.prototype.getDataTemplate = function()
{
	var chartData = [{"Gu":"A구","Data1":1000,"Data2":900,"Data3":800},
					 {"Gu":"B구","Data1":1500,"Data2":1600,"Data3":1300},
					 {"Gu":"C구","Data1":1000,"Data2":1200,"Data3":1100},
					 {"Gu":"D구","Data1":1900,"Data2":2000,"Data3":1800},
					 {"Gu":"E구","Data1":1000,"Data2":1450,"Data3":1550},
					 {"Gu":"F구","Data1":2000,"Data2":1400,"Data3":1500},
					 {"Gu":"G구","Data1":1800,"Data2":2000,"Data3":500},
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