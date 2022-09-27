
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RRadarChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'RadarChart';

}
afc.extendsClass(RRadarChart, RChart);

RRadarChart.CONTEXT = 
{
	
    tag:'<div data-base="RRadarChart" data-class="RRadarChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RRadarChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
                   <Options>\
                       <Caption text="2010~2013 연도별 가계 지출 품목 분석" fontFamily="맑은 고딕"/>\
                      <Legend useVisibleCheck="true" defaultMouseOverAction="true" fontFamily="맑은 고딕"/>\
                   </Options>\
                  <RadarChart id="chart1" isSeriesOnAxis="false" type="polygon" paddingTop="20" paddingBottom="30" showDataTips="true" mouseSensitivity="4">\
                	<radialAxis>\
                            <LinearAxis id="rAxis"/>\
                        </radialAxis>\
                         <angularAxis>\
                           <CategoryAxis id="aAxis" categoryField="Month" displayName="Category"/>'
                       +'</angularAxis>\
                        <radialAxisRenderers>\
                       <Axis2DRenderer axis="{rAxis}" horizontal="true" visible="true" tickPlacement="outside"/>\
                           <Axis2DRenderer axis="{rAxis}" horizontal="false" visible="true" tickPlacement="outside"/>'
						   +'</radialAxisRenderers>\
                      <angularAxisRenderers>\
                          <AngularAxisRenderer axis="{aAxis}"/>\
                       </angularAxisRenderers>\
                       <series>\
                      <RadarSeries radius="0" field="dummyData1" displayName="dummy1" selectionRadius="0">\
                           <lineStroke>\
                                <Stroke color="#41b2e6" alpha="0.6"/>\
                           </lineStroke>\
                           <areaFill>\
                              <SolidColor color="#41b2e6" alpha="0.6"/>\
                           </areaFill>\
                        <showDataEffect>\
                                 <SeriesInterpolate/>\
                           </showDataEffect>\
                       </RadarSeries>\
                      <RadarSeries radius="0" field="dummyData2" displayName="dummy2" selectionRadius="0">\
                           <lineStroke>\
                                <Stroke color="#074d81" alpha="0.6"/>\
                           </lineStroke>\
                           <areaFill>\
                              <SolidColor color="#074d81" alpha="0.6"/>\
                           </areaFill>\
                             <showDataEffect>\
                                <SeriesInterpolate/>\
                            </showDataEffect>\
                       </RadarSeries>\
                    </series>\
                 </RadarChart>\
       </rMateChart>';

	
	return layoutStr;
};