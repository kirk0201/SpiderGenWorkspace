
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RPie3DChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'Pie3DChart';

}
afc.extendsClass(RPie3DChart, RChart);

RPie3DChart.CONTEXT = 
{
	
    tag:'<div data-base="RPie3DChart" data-class="RPie3DChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RPie3DChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
                   <Options>\
                       <Caption text="Annual Report"/>\
                         <SubCaption text="2012"/>\
                       <Legend useVisibleCheck="true"/>\
                    </Options>\
                  <NumberFormatter id="numFmt"/>\
                 <Pie3DChart showDataTips="true"  depth="50" paddingLeft="100" paddingTop="50" paddingRight="100" paddingBottom="50">\
                        <series>\
                            <Pie3DSeries nameField="Month" field="dummyData1" labelPosition="inside" color="#ffffff"  startAngle="240">\
                           <showDataEffect>\
                                   <SeriesInterpolate duration="1000"/>\
                                   </showDataEffect>\
                           </Pie3DSeries>\
                      </series>\
                   </Pie3DChart>\
               </rMateChart>';

	
	return layoutStr;
};