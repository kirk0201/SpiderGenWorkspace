
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RLineScrollChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'LineScrollChart';

}
afc.extendsClass(RLineScrollChart, RChart);

RLineScrollChart.CONTEXT = 
{
	
    tag:'<div data-base="RLineScrollChart" data-class="RLineScrollChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RLineScrollChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
                   <Options>\
                       <Caption text="스크롤 2D 라인 차트" fontFamily="맑은 고딕"/>\
                       <SubCaption text="차트의 데이터팁(툴팁)을 사용자 정의한 예제입니다." textAlign="right" paddingRight="10" fontSize="11" fontFamily="맑은 고딕"/>\
                  </Options>\
                  <Line2DChart showDataTips="true" gutterRight="10" dataTipJsFunction="dataTipFunc">\
                    <verticalAxis>\
                          <LinearAxis interval="300"/>\
                        </verticalAxis>\
                         <series>\
                        <Line2DSeries id="cs1" yField="Data1" color="#eca614" displayName="Data1" interpolateValues="true" itemRenderer="CircleItemRenderer"/>\
                          <Line2DSeries id="cs2" yField="Data2" color="#6a8fa0" form="curve" displayName="Data2" interpolateValues="true" itemRenderer="CircleItemRenderer"/>\
                             <Line2DSeries id="cs3" yField="Data3" color="#c5607e" displayName="Data3" interpolateValues="true" itemRenderer="CircleItemRenderer"/>\
                      </series>\
                       <horizontalAxis>\
                            <CategoryLinearAxis id="hAxis" padding="0.5" categoryField="Gu"/>\
                      </horizontalAxis>\
                       <horizontalAxisRenderers>\
                           <ScrollableAxisRenderer axis="{hAxis}" visibleItemSize="7" fontFamily="맑은 고딕"/>\
                           </horizontalAxisRenderers>' 
                   +'</Line2DChart>\
              </rMateChart>';

	return layoutStr;
};

RLineScrollChart.prototype.getDataTemplate = function()
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