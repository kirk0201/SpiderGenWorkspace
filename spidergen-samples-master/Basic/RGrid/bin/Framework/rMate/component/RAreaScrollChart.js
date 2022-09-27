
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RAreaScrollChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'AreaScrollChart';

}
afc.extendsClass(RAreaScrollChart, RChart);

RAreaScrollChart.CONTEXT = 
{
	
    tag:'<div data-base="RAreaScrollChart" data-class="RAreaScrollChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RAreaScrollChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
                   <Options>\
                       <Caption text="스크롤 2D 영역 차트" fontFamily="맑은 고딕"/>\
                   </Options>\
                  <NumberFormatter id="numfmt" useThousandsSeparator="true"/>\
                    <Area2DChart showDataTips="true" gutterRight="10">\
                         <verticalAxis>\
                          <LinearAxis interval="300"/>\
                        </verticalAxis>\
                         <series>\
                        <Area2DSeries yField="Data1" form="curve" displayName="Profit">\
                             </Area2DSeries>\
                             <Area2DSeries yField="Data2" form="curve" displayName="Cost">\
                           </Area2DSeries>\
                             <Area2DSeries yField="Data3" form="curve" displayName="Revenue">\
                            </Area2DSeries>\
                         </series>\
                       <horizontalAxis>\
                            <CategoryLinearAxis id="hAxis" categoryField="Gu" padding="0.2"/>\
                       </horizontalAxis>\
                       <horizontalAxisRenderers>\
                           <ScrollableAxisRenderer axis="{hAxis}" visibleItemSize="7" fontFamily="맑은 고딕"/>\
                         </horizontalAxisRenderers>'  
                       +'<verticalAxis>\
                          <LinearAxis formatter="{numfmt}"/>'
					   +'</verticalAxis>\
                     </Area2DChart>\
              </rMateChart>';
	
	return layoutStr;
};

RAreaScrollChart.prototype.getDataTemplate = function()
{
	var chartData = [{"Gu":"A구","Data1":1350,"Data2":600,"Data3":1200},
					 {"Gu":"B구","Data1":1700,"Data2":700,"Data3":1200},
					 {"Gu":"C구","Data1":1400,"Data2":1200,"Data3":1800},
					 {"Gu":"D구","Data1":2000,"Data2":900,"Data3":1400},
					 {"Gu":"E구","Data1":1200,"Data2":2200,"Data3":1500},
					 {"Gu":"F구","Data1":1500,"Data2":1200,"Data3":2000},
					 {"Gu":"G구","Data1":1200,"Data2":700,"Data3":1500},
					 {"Gu":"H구","Data1":1300,"Data2":600,"Data3":1150},
					 {"Gu":"I구","Data1":1700,"Data2":1100,"Data3":1500},
					 {"Gu":"J구","Data1":1400,"Data2":600,"Data3":1000},
					 {"Gu":"K구","Data1":2000,"Data2":1200,"Data3":1800},
					 {"Gu":"L구","Data1":1500,"Data2":300,"Data3":1650},
					 {"Gu":"M구","Data1":1200,"Data2":800,"Data3":1000},
					 {"Gu":"N구","Data1":1500,"Data2":300,"Data3":1350},
					 {"Gu":"O구","Data1":1500,"Data2":900,"Data3":1200},
					 {"Gu":"P구","Data1":1900,"Data2":1500,"Data3":2100},
					 {"Gu":"Q구","Data1":1400,"Data2":900,"Data3":1550},
					 {"Gu":"R구","Data1":2000,"Data2":500,"Data3":1570},
					 {"Gu":"S구","Data1":1400,"Data2":900,"Data3":1100},
					 {"Gu":"T구","Data1":1500,"Data2":400,"Data3":1400},
					 {"Gu":"U구","Data1":2000,"Data2":1200,"Data3":1500},
					 {"Gu":"V구","Data1":1300,"Data2":600,"Data3":1600},
					 {"Gu":"W구","Data1":2500,"Data2":1400,"Data3":2000},
					 {"Gu":"X구","Data1":1700,"Data2":600,"Data3":1400}];
	return chartData;

};