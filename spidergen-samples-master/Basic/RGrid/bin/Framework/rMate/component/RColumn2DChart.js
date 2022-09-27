
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RColumn2DChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'Column2DChart';
	
}
afc.extendsClass(RColumn2DChart, RChart);

RColumn2DChart.CONTEXT = 
{
	
    tag:'<div data-base="RColumn2DChart" data-class="RColumn2DChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RColumn2DChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
                   <Options>\
                       <Caption text="World Top 10 - Fastest Growing Economies (2017)" />\
                      <SubCaption text="GDP Growth (In %)" textAlign="center" />\
                  </Options>\
                  <SeriesInterpolate id="ss"/>\
                    <Column2DChart showDataTips="true" selectionMode="multiple" columnWidthRatio="0.48">\
                        <horizontalAxis>\
                            <CategoryAxis categoryField="Country"/>\
                         </horizontalAxis>\
                       <verticalAxis>\
                          <LinearAxis maximum="100" interval="10"/>\
                       </verticalAxis>\
                         <series>\
                            <Column2DSeries labelPosition="outside" yField="dummyData1" displayName="dummy1" showDataEffect="{ss}" showValueLabels="[4]">\
                           </Column2DSeries>\
						   <Column2DSeries labelPosition="outside" yField="dummyData2" displayName="dummy2" showDataEffect="{ss}" showValueLabels="[4]">\
                           </Column2DSeries>\
						   <Column2DSeries labelPosition="outside" yField="dummyData3" displayName="dummy3" showDataEffect="{ss}" showValueLabels="[4]">\
                           </Column2DSeries>\
                       </series>\
                   </Column2DChart>\
                </rMateChart>';

	
	return layoutStr;
};

