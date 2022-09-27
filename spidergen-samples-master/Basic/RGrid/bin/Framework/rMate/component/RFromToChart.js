
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RFromToChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'FromToChart';

}
afc.extendsClass(RFromToChart, RChart);

RFromToChart.CONTEXT = 
{
	
    tag:'<div data-base="RFromToChart" data-class="RFromToChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'500px', height:'420px' 
    },
   
    events: []
};

RFromToChart.prototype.setLayoutTemplate = function()
{
	var layoutStr = '<rMateChart backgroundColor="rgb(255, 255, 255)">\
                   <Options>\
                       <Caption text="하루 일과표" fontFamily="맑은 고딕"/>\
                     </Options>\
                  <DateFormatter id="dateFmt" formatString="HH:NN"/>\
                  <Bar2DChart showDataTips="true" fontSize="11" fontFamily="맑은 고딕" barWidthRatio="0.65">\
                      <verticalAxis>\
                          <CategoryAxis id="vAxis" categoryField="cat"/>\
                      </verticalAxis>\
                         <horizontalAxis>\
                            <DateTimeAxis displayLocalTime="true" id="hAxis" labelUnits="hours" formatter="{dateFmt}" minimum="2017/08/01 8:00:00" maximum="2017/08/01 18:00:00"/>\
                         </horizontalAxis>\
                       <series>\
                            <Bar2DSeries id="series1" minField="date1" xField="date2" labelPosition="inside" showValueLabels="[3,4,5]" formatter="{dateFmt}" color="#ffffff" insideLabelYOffset="-2">\
                               <showDataEffect>\
                                    <SeriesSlide direction="right" duration="600" elementOffset="0"/>\
                               </showDataEffect>\
                           </Bar2DSeries>\
                      </series>\
                       <verticalAxisRenderers>\
                             <Axis2DRenderer axis="{vAxis}" fontFamily="맑은 고딕" showLine="true"/>\
                         </verticalAxisRenderers>\
                    </Bar2DChart>\
               </rMateChart>';
	return layoutStr;
};

RFromToChart.prototype.getDataTemplate = function()
{
	var chartData = [{"cat":"티타임","date1":"2017/08/01 08:30:00","date2":"2017/08/01 09:10:00"},
					{"cat":"팀미팅","date1":"2017/08/01 09:00:00","date2":"2017/08/01 10:30:00"},
					{"cat":"A업무","date1":"2017/08/01 10:10:00","date2":"2017/08/01 11:50:00"},
					{"cat":"점심식사","date1":"2017/08/01 11:50:00","date2":"2017/08/01 14:20:00"},
					{"cat":"B업무","date1":"2017/08/01 13:00:00","date2":"2017/08/01 15:00:00"},
					{"cat":"보고회의","date1":"2017/08/01 15:00:00","date2":"2017/08/01 16:30:00"},
					{"cat":"B업무","date1":"2017/08/01 16:20:00","date2":"2017/08/01 17:30:00"},
					{"cat":"정리및보고","date1":"2017/08/01 17:30:00","date2":"2017/08/01 18:00:00"}];
  
	return chartData;

};