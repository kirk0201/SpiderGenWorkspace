
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RLine2DChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'Line2DChart';

}
afc.extendsClass(RLine2DChart, RChart);

RLine2DChart.CONTEXT = 
{
	
    tag:'<div data-base="RLine2DChart" data-class="RLine2DChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RLine2DChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">\
      <Options>\
           <Caption text="Rainfall" />\
             <SubCaption text="( mm )" textAlign="right" />\
          <Legend />\
      </Options>\
      <NumberFormatter id="numFmt" precision="0"/>\
        <Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">\
          <horizontalAxis>\
                <CategoryAxis categoryField="Month"/>\
           </horizontalAxis>\
           <verticalAxis>\
              <LinearAxis minimum="0" maximum="100" interval="10" />\
          </verticalAxis>\
             <series>\
                <Line2DSeries yField="dummyData1" displayName="dummy1">\
                   <showDataEffect>\
                       <SeriesClip duration="1000"/>\
                  </showDataEffect>\
               </Line2DSeries>\
			    <Line2DSeries yField="dummyData2" displayName="dummy2">\
                   <showDataEffect>\
                       <SeriesClip duration="1000"/>\
                  </showDataEffect>\
               </Line2DSeries>\
			    <Line2DSeries yField="dummyData3" displayName="dummy3">\
                   <showDataEffect>\
                       <SeriesClip duration="1000"/>\
                  </showDataEffect>\
               </Line2DSeries>\
             </series>\
           <annotationElements>\
                <CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>\
            </annotationElements>\
       </Line2DChart>\
  </rMateChart>';

	
	return layoutStr;
};