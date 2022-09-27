
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RBar2DChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'Bar2DChart';
	
}
afc.extendsClass(RBar2DChart, RChart);

RBar2DChart.CONTEXT = 
{
	
    tag:'<div data-base="RBar2DChart" data-class="RBar2DChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RBar2DChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
                   <Options>\
                       <Caption text="Rainfall" />\
                         <SubCaption text="( mm )" textAlign="right" />\
                      <Legend />\
                  </Options>\
                  <Bar2DChart showDataTips="true">\
                        <horizontalAxis>\
                            <LinearAxis maximum="100"/>\
                         </horizontalAxis>\
                       <verticalAxis>\
                          <CategoryAxis categoryField="Month"/>\
                      </verticalAxis>\
                         <series>\
                            <Bar2DSeries labelPosition="inside" xField="dummyData1" displayName="dummy1" showValueLabels="[6,7]" color="#ffffff" insideLabelYOffset="-2">\
                                 <showDataEffect>\
                                    <SeriesInterpolate/>\
                               </showDataEffect>\
                           </Bar2DSeries>\
						   <Bar2DSeries labelPosition="inside" xField="dummyData2" displayName="dummy2" showValueLabels="[6,7]" color="#ffffff" insideLabelYOffset="-2">\
                                 <showDataEffect>\
                                    <SeriesInterpolate/>\
                               </showDataEffect>\
                           </Bar2DSeries>\
						   <Bar2DSeries labelPosition="inside" xField="dummyData3" displayName="dummy3" showValueLabels="[6,7]" color="#ffffff" insideLabelYOffset="-2">\
                                 <showDataEffect>\
                                    <SeriesInterpolate/>\
                               </showDataEffect>\
                           </Bar2DSeries>\
                      </series>\
                   </Bar2DChart>\
               </rMateChart>';

	
	return layoutStr;
};