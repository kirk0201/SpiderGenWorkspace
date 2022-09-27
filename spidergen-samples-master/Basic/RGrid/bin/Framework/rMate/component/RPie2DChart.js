
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RPie2DChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'Pie2DChart';

}
afc.extendsClass(RPie2DChart, RChart);

RPie2DChart.CONTEXT = 
{
	
    tag:'<div data-base="RPie2DChart" data-class="RPie2DChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RPie2DChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none" >\
                   <Options>\
                       <Caption text="Annual Report"/>\
                         <SubCaption text="2013"/>\
                       <Legend useVisibleCheck="true"/>\
                    </Options>\
                  <Pie2DChart showDataTips="true">\
                <series>\
                            <Pie2DSeries nameField="Month" field="dummyData1" labelPosition="inside" color="#ffffff" startAngle="136">\
                             <showDataEffect>\
                                <SeriesSlide duration="1000"/>\
                           </showDataEffect>\
                           </Pie2DSeries>\
                      </series>\
                   </Pie2DChart>\
               </rMateChart>';

	
	return layoutStr;
};