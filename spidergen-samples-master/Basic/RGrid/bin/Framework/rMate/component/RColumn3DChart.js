
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RColumn3DChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'Column3DChart';
	
}
afc.extendsClass(RColumn3DChart, RChart);

RColumn3DChart.CONTEXT = 
{
	
    tag:'<div data-base="RColumn3DChart" data-class="RColumn3DChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RColumn3DChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
               <Options>\
                   <Caption text="Central Government Debt, Total in 2012" />\
                   <SubCaption text="Group of Eight (G8), (% of GDP)" textAlign="Center" />\
                </Options>\
              <NumberFormatter id="numFmt" precision="0"/>\
                <Column3DChart showDataTips="true"  columnWidthRatio="0.4">\
                     <horizontalAxis>\
                        <CategoryAxis categoryField="Country"/>\
                     </horizontalAxis>\
                   <verticalAxis>\
                      <LinearAxis maximum="100" interval="10"/>\
                   </verticalAxis>\
                     <series>\
                        <Column3DSeries labelPosition="outside" yField="dummyData1" displayName="dummy1" outsideLabelYOffset="-14" showValueLabels="[4,5]">\
                           <showDataEffect>\
                                <SeriesInterpolate/>\
                            </showDataEffect>\
                       </Column3DSeries>\
					   <Column3DSeries labelPosition="outside" yField="dummyData2" displayName="dummy2" outsideLabelYOffset="-14" showValueLabels="[4,5]">\
                           <showDataEffect>\
                                <SeriesInterpolate/>\
                            </showDataEffect>\
                       </Column3DSeries>\
					   <Column3DSeries labelPosition="outside" yField="dummyData3" displayName="dummy3" outsideLabelYOffset="-14" showValueLabels="[4,5]">\
                           <showDataEffect>\
                                <SeriesInterpolate/>\
                            </showDataEffect>\
                       </Column3DSeries>\
                   </series>\
               </Column3DChart>\
            </rMateChart>';

	
	return layoutStr;
};