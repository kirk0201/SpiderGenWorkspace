
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RBar3DChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'Bar3DChart';
	
}
afc.extendsClass(RBar3DChart, RChart);

RBar3DChart.CONTEXT = 
{
	
    tag:'<div data-base="RBar3DChart" data-class="RBar3DChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RBar3DChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
                   <Options>\
                       <Caption text="Rainfall" />\
                         <SubCaption text="( mm )" textAlign="right" />\
                      <Legend />\
                  </Options>\
                  <Bar3DChart showDataTips="true">\
                    <horizontalAxis>\
                            <LinearAxis minimum="0" maximum="80" interval="5"/>\
                         </horizontalAxis>\
                       <verticalAxis>\
                     	  <CategoryAxis categoryField="Month"/>\
                      </verticalAxis>\
                         <series>\
                            <Bar3DSeries labelPosition="inside" showValueLabels="[4,5]" xField="dummyData1" displayName="dummy1" color="#ffffff" insideLabelYOffset="-2" insideLabelXOffset="-4" labelAlign="right">\
                        	  <showDataEffect>\
                               		 <SeriesInterpolate/>\
                               </showDataEffect>\
                           </Bar3DSeries>\
						    <Bar3DSeries labelPosition="inside" showValueLabels="[4,5]" xField="dummyData2" displayName="dummy2" color="#ffffff" insideLabelYOffset="-2" insideLabelXOffset="-4" labelAlign="right">\
                         	  <showDataEffect>\
                               		 <SeriesInterpolate/>\
                                </showDataEffect>\
                           </Bar3DSeries>\
						    <Bar3DSeries labelPosition="inside" showValueLabels="[4,5]" xField="dummyData3" displayName="dummy3" color="#ffffff" insideLabelYOffset="-2" insideLabelXOffset="-4" labelAlign="right">\
                        	  <showDataEffect>\
                               		  <SeriesInterpolate/>\
                                   </showDataEffect>\
                           </Bar3DSeries>\
                      </series>\
                   </Bar3DChart>\
               </rMateChart>';
 

	
	return layoutStr;
};