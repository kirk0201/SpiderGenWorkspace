
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RArea2DChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'Area2DChart';
	
}
afc.extendsClass(RArea2DChart, RChart);

RArea2DChart.CONTEXT = 
{
	
    tag:'<div data-base="RArea2DChart" data-class="RArea2DChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RArea2DChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
                  <Options>\
                      <Caption text="Balance on Current Account"/>\
                       <SubCaption text="( billion $ )" textAlign="right" />\
                       <Legend defaultMouseOverAction="false"/>\
                    </Options>\
                  <Area2DChart showDataTips="true" dataTipDisplayMode="axis">\
                         <horizontalAxis>\
                            <CategoryAxis categoryField="Month" padding="0.5"/>\
                        </horizontalAxis>\
                       <verticalAxis>\
                          <LinearAxis />\
                      </verticalAxis>\
                         <series>\
                        <Area2DSeries yField="dummyData1" form="curve" displayName="dummy1">\
                              <showDataEffect>\
                                    <SeriesInterpolate/>\
                               </showDataEffect>\
                           </Area2DSeries>\
                             <Area2DSeries yField="dummyData2" form="curve" displayName="dummy2">\
                                <showDataEffect>\
                                    <SeriesInterpolate/>\
                               </showDataEffect>\
                           </Area2DSeries>\
                             <Area2DSeries yField="dummyData3" form="curve" displayName="dummy3">\
                              <showDataEffect>\
                                    <SeriesInterpolate/>\
                               </showDataEffect>\
                           </Area2DSeries>\
                         </series>\
                   </Area2DChart>\
              </rMateChart>';


	
	return layoutStr;
};
