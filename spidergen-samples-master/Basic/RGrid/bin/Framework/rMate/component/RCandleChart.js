
afc.loadScript('Framework/rMate/library/RChart.js');

/**
 * @author asoocool
 */


function RCandleChart()
{
	RChart.call(this);
	
	this.ChartNameOfType = 'CandleChart';

}
afc.extendsClass(RCandleChart, RChart);

RCandleChart.CONTEXT = 
{
	
    tag:'<div data-base="RCandleChart" data-class="RCandleChart" data-layout-xml="empty" class="RChart-Style"></div>',

    defStyle: 
    {
    	width:'700px', height:'430px' 
    },
   
    events: []
};

function labelFunc(id, value){
	return value.substring(5,10);
}

RCandleChart.prototype.setLayoutTemplate = function()
{

var layoutStr = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
                     <Options>\
                       <Caption text="Candlestick Chart"/>\
                     </Options>\
                  <NumberFormatter id="nft" precision="0"/>\
                 <DualChart leftGutterSyncEnable="true" rightGutterSyncEnable="true">\
                        <mainChart>\
                            <Candlestick2DChart showDataTips="true" paddingBottom="0" dataTipDisplayMode="axis">\
                                <horizontalAxis>\
                                    <CategoryAxis id="hAxis" categoryField="date" labelJsFunction="labelFunc" />\
                                </horizontalAxis>\
                               <verticalAxis>\
                                  <LinearAxis id="vAxis" baseAtZero="false" formatter="{nft}"/>\
                               </verticalAxis>\
                                 <series>\
                                   <Candlestick2DSeries openField="openprc" closeField="closeprc" highField="highprc" lowField="lowprc" showMinValueLabel="true" showMaxValueLabel="true">\
                                      <fill>\
                                          <SolidColor color="#f14b4b"/>\
                                       </fill>\
                                       <stroke>\
                                            <Stroke color="#f14b4b"/>\
                                       </stroke>\
                                      <boxStroke>\
                                             <Stroke color="#f14b4b"/>\
                                       </boxStroke>\
                                      <declineFill>\
                                           <SolidColor color="#4452aa"/>\
                                       </declineFill>\
                                      <declineStroke>\
                                             <Stroke color="#4452aa"/>\
                                       </declineStroke>\
                                      <declineBoxStroke>\
                                          <Stroke color="#4452aa"/>\
                                       </declineBoxStroke>\
                                     </Candlestick2DSeries>\
                              </series>\
                               <horizontalAxisRenderers>\
                                   <Axis2DRenderer placement="bottom" axis="{hAxis}" tickLength="0" showLine="true"/>\
                              </horizontalAxisRenderers>\
                              <verticalAxisRenderers>\
                                     <Axis2DRenderer placement="left" axis="{vAxis}" showLine="false"/>\
                              </verticalAxisRenderers>\
                                <annotationElements>\
                                   <CrossRangeZoomer id="candleCRZ" enableZooming="false" syncCrossRangeZoomer="{columnCRZ}" zoomType="both" horizontalLabelFormatter="{nft}"/>\
                                </annotationElements>\
                           </Candlestick2DChart>\
                       </mainChart>\
                       <subChart>\
                          <Column2DChart showDataTips="true" height="20%" paddingTop="0" paddingBottom="0" gutterTop="6" gutterBottom="6">'  
                                 +'<horizontalAxis>\
                                    <CategoryAxis id="hAxis" categoryField="date" labelJsFunction="labelFunc"/>'
                                 +'</horizontalAxis>\
                               <verticalAxis>\
                                  <LinearAxis id="vAxis" formatter="{nft}"/>\
                              </verticalAxis>\
                                 <series>\
                                    <Column2DSeries yField="trdvolume" itemRenderer="BoxItemRenderer">\
                                      <fill>\
                                          <SolidColor color="#5487a2"/>\
                                       </fill>\
                                     </Column2DSeries>\
                               </series>\
                               <horizontalAxisRenderers>\
                                   <Axis2DRenderer axis="{hAxis}" showLine="true" showLabels="false" tickLength="0"/>\
                              </horizontalAxisRenderers>\
                              <annotationElements>\
                                    <CrossRangeZoomer id="columnCRZ" syncCrossRangeZoomer="{candleCRZ}" zoomType="both" verticalLabelPlacement="top" horizontalLabelFormatter="{nft}" enableZooming="false"/>\
                               </annotationElements>\
                           </Column2DChart>\
                        </subChart>\
                        <dataSelector>\
                        <DualScrollBar visibleItemSize="50"/>\
                      </dataSelector>\
                        </DualChart>\
                </rMateChart>';
	

	return layoutStr;
};

RCandleChart.prototype.getDataTemplate = function()
{
	var dummyChartData = 
	[
		{
        "openprc" : 22000,
        "highprc" : 22222,
        "lowprc" : 21400,
        "closeprc" : 21500,
        "trdvolume" : 14033,
        "trdamnt" : 324987500,
        "date" : "2013-01-11"
},{
        "openprc" : 21400,
        "highprc" : 21300,
        "lowprc" : 21700,
        "closeprc" : 21250,
        "trdvolume" : 11608,
        "trdamnt" : 266665250,
        "date" : "2013-01-14"
},{
        "openprc" : 21630,
        "highprc" : 22500,
        "lowprc" : 21200,
        "closeprc" : 22300,
        "trdvolume" : 31502,
        "trdamnt" : 713561800,
        "date" : "2013-01-15"
},{
        "openprc" : 22000,
        "highprc" : 22500,
        "lowprc" : 21600,
        "closeprc" : 22300,
        "trdvolume" : 16853,
        "trdamnt" : 383179850,
        "date" : "2013-01-16"
},{
        "openprc" : 22850,
        "highprc" : 23050,
        "lowprc" : 22550,
        "closeprc" : 22850,
        "trdvolume" : 7571,
        "trdamnt" : 172444650,
        "date" : "2013-01-17"
},{
        "openprc" : 22850,
        "highprc" : 22900,
        "lowprc" : 22400,
        "closeprc" : 22500,
        "trdvolume" : 11942,
        "trdamnt" : 269458200,
        "date" : "2013-01-18"
},{
        "openprc" : 22450,
        "highprc" : 22550,
        "lowprc" : 21550,
        "closeprc" : 21700,
        "trdvolume" : 50060,
        "trdamnt" : 1094399700,
        "date" : "2013-01-21"
},{
        "openprc" : 21750,
        "highprc" : 21950,
        "lowprc" : 21550,
        "closeprc" : 21700,
        "trdvolume" : 23327,
        "trdamnt" : 505653900,
        "date" : "2013-01-22"
},{
        "openprc" : 21950,
        "highprc" : 21950,
        "lowprc" : 21500,
        "closeprc" : 21700,
        "trdvolume" : 11106,
        "trdamnt" : 241429700,
        "date" : "2013-01-23"
},{
        "openprc" : 21900,
        "highprc" : 21900,
        "lowprc" : 21550,
        "closeprc" : 21650,
        "trdvolume" : 10902,
        "trdamnt" : 237351300,
        "date" : "2013-01-24"
},{
        "openprc" : 21800,
        "highprc" : 21850,
        "lowprc" : 21300,
        "closeprc" : 21800,
        "trdvolume" : 17613,
        "trdamnt" : 379367900,
        "date" : "2013-01-25"
},{
        "openprc" : 21950,
        "highprc" : 22150,
        "lowprc" : 21650,
        "closeprc" : 22050,
        "trdvolume" : 13681,
        "trdamnt" : 299266150,
        "date" : "2013-01-28"
},{
        "openprc" : 22050,
        "highprc" : 22400,
        "lowprc" : 22050,
        "closeprc" : 22350,
        "trdvolume" : 13651,
        "trdamnt" : 303871550,
        "date" : "2013-01-29"
},{
        "openprc" : 22400,
        "highprc" : 22400,
        "lowprc" : 21900,
        "closeprc" : 21900,
        "trdvolume" : 11833,
        "trdamnt" : 260954750,
        "date" : "2013-01-30"
},{
        "openprc" : 21950,
        "highprc" : 21950,
        "lowprc" : 21550,
        "closeprc" : 21700,
        "trdvolume" : 16518,
        "trdamnt" : 358109800,
        "date" : "2013-02-01"
},{
        "openprc" : 21800,
        "highprc" : 21850,
        "lowprc" : 21500,
        "closeprc" : 21750,
        "trdvolume" : 9485,
        "trdamnt" : 205373700,
        "date" : "2013-02-04"
},{
        "openprc" : 21700,
        "highprc" : 21800,
        "lowprc" : 21450,
        "closeprc" : 21600,
        "trdvolume" : 10826,
        "trdamnt" : 234154100,
        "date" : "2013-02-05"
},{
        "openprc" : 21300,
        "highprc" : 21550,
        "lowprc" : 21000,
        "closeprc" : 21500,
        "trdvolume" : 15898,
        "trdamnt" : 338072500,
        "date" : "2013-02-06"
},{
        "openprc" : 21400,
        "highprc" : 21450,
        "lowprc" : 21100,
        "closeprc" : 21450,
        "trdvolume" : 15513,
        "trdamnt" : 329680000,
        "date" : "2013-02-07"
},{
        "openprc" : 21000,
        "highprc" : 21750,
        "lowprc" : 21000,
        "closeprc" : 21500,
        "trdvolume" : 8835,
        "trdamnt" : 189128000,
        "date" : "2013-02-08"
},{
        "openprc" : 21500,
        "highprc" : 21550,
        "lowprc" : 21300,
        "closeprc" : 21450,
        "trdvolume" : 5568,
        "trdamnt" : 119232800,
        "date" : "2013-02-12"
},{
        "openprc" : 21450,
        "highprc" : 21500,
        "lowprc" : 21000,
        "closeprc" : 21300,
        "trdvolume" : 14793,
        "trdamnt" : 314701900,
        "date" : "2013-02-13"
},{
        "openprc" : 21300,
        "highprc" : 21700,
        "lowprc" : 21100,
        "closeprc" : 21600,
        "trdvolume" : 13703,
        "trdamnt" : 294467800,
        "date" : "2013-02-14"
},{
        "openprc" : 21350,
        "highprc" : 22200,
        "lowprc" : 21350,
        "closeprc" : 22050,
        "trdvolume" : 19506,
        "trdamnt" : 428998650,
        "date" : "2013-02-15"
},{
        "openprc" : 22050,
        "highprc" : 22250,
        "lowprc" : 21800,
        "closeprc" : 22100,
        "trdvolume" : 10535,
        "trdamnt" : 231930000,
        "date" : "2013-02-18"
},{
        "openprc" : 22150,
        "highprc" : 22300,
        "lowprc" : 21750,
        "closeprc" : 22050,
        "trdvolume" : 7478,
        "trdamnt" : 164174050,
        "date" : "2013-02-19"
},{
        "openprc" : 22050,
        "highprc" : 22600,
        "lowprc" : 21750,
        "closeprc" : 22450,
        "trdvolume" : 31989,
        "trdamnt" : 717825050,
        "date" : "2013-02-20"
},{
        "openprc" : 22800,
        "highprc" : 23000,
        "lowprc" : 22600,
        "closeprc" : 22750,
        "trdvolume" : 43192,
        "trdamnt" : 986617500,
        "date" : "2013-02-21"
},{
        "openprc" : 22750,
        "highprc" : 23050,
        "lowprc" : 22500,
        "closeprc" : 23000,
        "trdvolume" : 18101,
        "trdamnt" : 413611500,
        "date" : "2013-02-22"
},{
        "openprc" : 22900,
        "highprc" : 23250,
        "lowprc" : 22500,
        "closeprc" : 22950,
        "trdvolume" : 15730,
        "trdamnt" : 360649600,
        "date" : "2013-02-25"
},{
        "openprc" : 22950,
        "highprc" : 23000,
        "lowprc" : 22450,
        "closeprc" : 22650,
        "trdvolume" : 14739,
        "trdamnt" : 334992150,
        "date" : "2013-02-26"
},{
        "openprc" : 22400,
        "highprc" : 22700,
        "lowprc" : 22300,
        "closeprc" : 22350,
        "trdvolume" : 13181,
        "trdamnt" : 296051850,
        "date" : "2013-02-27"
},{
        "openprc" : 22400,
        "highprc" : 22850,
        "lowprc" : 22400,
        "closeprc" : 22600,
        "trdvolume" : 8493,
        "trdamnt" : 192255800,
        "date" : "2013-02-28"
},{
        "openprc" : 22650,
        "highprc" : 22900,
        "lowprc" : 22400,
        "closeprc" : 22450,
        "trdvolume" : 20015,
        "trdamnt" : 450178750,
        "date" : "2013-03-04"
},{
        "openprc" : 22500,
        "highprc" : 22700,
        "lowprc" : 22250,
        "closeprc" : 22250,
        "trdvolume" : 10649,
        "trdamnt" : 239470100,
        "date" : "2013-03-05"
},{
        "openprc" : 22500,
        "highprc" : 22750,
        "lowprc" : 22300,
        "closeprc" : 22750,
        "trdvolume" : 14249,
        "trdamnt" : 321942250,
        "date" : "2013-03-06"
},{
        "openprc" : 23050,
        "highprc" : 23050,
        "lowprc" : 22550,
        "closeprc" : 22650,
        "trdvolume" : 17493,
        "trdamnt" : 398302450,
        "date" : "2013-03-07"
},{
        "openprc" : 22650,
        "highprc" : 22750,
        "lowprc" : 22400,
        "closeprc" : 22600,
        "trdvolume" : 22230,
        "trdamnt" : 502561500,
        "date" : "2013-03-08"
},{
        "openprc" : 22500,
        "highprc" : 22800,
        "lowprc" : 22350,
        "closeprc" : 22600,
        "trdvolume" : 24390,
        "trdamnt" : 549322800,
        "date" : "2013-03-11"
},{
        "openprc" : 22750,
        "highprc" : 23850,
        "lowprc" : 22500,
        "closeprc" : 23750,
        "trdvolume" : 76266,
        "trdamnt" : 1790184800,
        "date" : "2013-03-12"
},{
        "openprc" : 24000,
        "highprc" : 24100,
        "lowprc" : 23550,
        "closeprc" : 23750,
        "trdvolume" : 44292,
        "trdamnt" : 1056366800,
        "date" : "2013-03-13"
},{
        "openprc" : 23500,
        "highprc" : 23800,
        "lowprc" : 23250,
        "closeprc" : 23500,
        "trdvolume" : 27532,
        "trdamnt" : 647408500,
        "date" : "2013-03-14"
},{
        "openprc" : 23650,
        "highprc" : 23750,
        "lowprc" : 23150,
        "closeprc" : 23700,
        "trdvolume" : 31302,
        "trdamnt" : 733654300,
        "date" : "2013-03-15"
},{
        "openprc" : 23800,
        "highprc" : 23900,
        "lowprc" : 23300,
        "closeprc" : 23400,
        "trdvolume" : 30092,
        "trdamnt" : 708495300,
        "date" : "2013-03-18"
},{
        "openprc" : 23450,
        "highprc" : 23450,
        "lowprc" : 22800,
        "closeprc" : 22900,
        "trdvolume" : 35027,
        "trdamnt" : 807846800,
        "date" : "2013-03-19"
},{
        "openprc" : 22900,
        "highprc" : 23400,
        "lowprc" : 22800,
        "closeprc" : 23000,
        "trdvolume" : 19735,
        "trdamnt" : 454065200,
        "date" : "2013-03-20"
},{
        "openprc" : 23150,
        "highprc" : 23550,
        "lowprc" : 22900,
        "closeprc" : 23050,
        "trdvolume" : 25989,
        "trdamnt" : 604140950,
        "date" : "2013-03-21"
},{
        "openprc" : 23050,
        "highprc" : 23300,
        "lowprc" : 22400,
        "closeprc" : 22500,
        "trdvolume" : 34390,
        "trdamnt" : 784818500,
        "date" : "2013-03-22"
},{
        "openprc" : 22550,
        "highprc" : 22650,
        "lowprc" : 22200,
        "closeprc" : 22350,
        "trdvolume" : 28704,
        "trdamnt" : 640821350,
        "date" : "2013-03-25"
},{
        "openprc" : 22450,
        "highprc" : 22550,
        "lowprc" : 21900,
        "closeprc" : 22200,
        "trdvolume" : 41842,
        "trdamnt" : 925086900,
        "date" : "2013-03-26"
},{
        "openprc" : 22100,
        "highprc" : 22100,
        "lowprc" : 21700,
        "closeprc" : 21750,
        "trdvolume" : 19553,
        "trdamnt" : 427234250,
        "date" : "2013-03-27"
},{
        "openprc" : 21950,
        "highprc" : 21950,
        "lowprc" : 21100,
        "closeprc" : 21350,
        "trdvolume" : 53686,
        "trdamnt" : 1147812100,
        "date" : "2013-03-28"
},{
        "openprc" : 21200,
        "highprc" : 21850,
        "lowprc" : 21200,
        "closeprc" : 21800,
        "trdvolume" : 12092,
        "trdamnt" : 261516900,
        "date" : "2013-03-29"
},{
        "openprc" : 21900,
        "highprc" : 21950,
        "lowprc" : 21600,
        "closeprc" : 21900,
        "trdvolume" : 13756,
        "trdamnt" : 298807800,
        "date" : "2013-04-01"
},{
        "openprc" : 21700,
        "highprc" : 21800,
        "lowprc" : 21200,
        "closeprc" : 21300,
        "trdvolume" : 22631,
        "trdamnt" : 483894300,
        "date" : "2013-04-02"
},{
        "openprc" : 21200,
        "highprc" : 21350,
        "lowprc" : 21000,
        "closeprc" : 21150,
        "trdvolume" : 41151,
        "trdamnt" : 869132250,
        "date" : "2013-04-03"
},{
        "openprc" : 21150,
        "highprc" : 21250,
        "lowprc" : 20200,
        "closeprc" : 21050,
        "trdvolume" : 57184,
        "trdamnt" : 1178032850,
        "date" : "2013-04-04"
},{
        "openprc" : 20800,
        "highprc" : 20800,
        "lowprc" : 20200,
        "closeprc" : 20500,
        "trdvolume" : 21093,
        "trdamnt" : 430063450,
        "date" : "2013-04-05"
},{
        "openprc" : 20500,
        "highprc" : 20700,
        "lowprc" : 19250,
        "closeprc" : 19550,
        "trdvolume" : 47885,
        "trdamnt" : 944553250,
        "date" : "2013-04-08"
},{
        "openprc" : 20100,
        "highprc" : 20100,
        "lowprc" : 18750,
        "closeprc" : 18900,
        "trdvolume" : 37943,
        "trdamnt" : 725405750,
        "date" : "2013-04-09"
},{
        "openprc" : 18900,
        "highprc" : 19100,
        "lowprc" : 18150,
        "closeprc" : 18500,
        "trdvolume" : 32707,
        "trdamnt" : 604953900,
        "date" : "2013-04-10"
},{
        "openprc" : 18850,
        "highprc" : 18950,
        "lowprc" : 18500,
        "closeprc" : 18700,
        "trdvolume" : 12374,
        "trdamnt" : 232046800,
        "date" : "2013-04-11"
},{
        "openprc" : 18700,
        "highprc" : 19650,
        "lowprc" : 18700,
        "closeprc" : 19550,
        "trdvolume" : 21210,
        "trdamnt" : 410406650,
        "date" : "2013-04-12"
},{
        "openprc" : 19850,
        "highprc" : 20950,
        "lowprc" : 19850,
        "closeprc" : 20600,
        "trdvolume" : 57561,
        "trdamnt" : 1187007100,
        "date" : "2013-04-15"
},{
        "openprc" : 20850,
        "highprc" : 20850,
        "lowprc" : 20100,
        "closeprc" : 20650,
        "trdvolume" : 25121,
        "trdamnt" : 515988900,
        "date" : "2013-04-16"
},{
        "openprc" : 20500,
        "highprc" : 20600,
        "lowprc" : 20100,
        "closeprc" : 20450,
        "trdvolume" : 17718,
        "trdamnt" : 361004100,
        "date" : "2013-04-17"
},{
        "openprc" : 20450,
        "highprc" : 20850,
        "lowprc" : 20450,
        "closeprc" : 20850,
        "trdvolume" : 19612,
        "trdamnt" : 406032200,
        "date" : "2013-04-18"
},{
        "openprc" : 20800,
        "highprc" : 20800,
        "lowprc" : 20450,
        "closeprc" : 20650,
        "trdvolume" : 12360,
        "trdamnt" : 254768500,
        "date" : "2013-04-19"
},{
        "openprc" : 20850,
        "highprc" : 21500,
        "lowprc" : 20500,
        "closeprc" : 21500,
        "trdvolume" : 35507,
        "trdamnt" : 746405400,
        "date" : "2013-04-22"
},{
        "openprc" : 21450,
        "highprc" : 22300,
        "lowprc" : 21100,
        "closeprc" : 22000,
        "trdvolume" : 42655,
        "trdamnt" : 922388500,
        "date" : "2013-04-23"
},{
        "openprc" : 22250,
        "highprc" : 24000,
        "lowprc" : 22250,
        "closeprc" : 24000,
        "trdvolume" : 202322,
        "trdamnt" : 4743886200,
        "date" : "2013-04-24"
},{
        "openprc" : 24500,
        "highprc" : 27600,
        "lowprc" : 24400,
        "closeprc" : 27600,
        "trdvolume" : 327752,
        "trdamnt" : 8760292200,
        "date" : "2013-04-25"
},{
        "openprc" : 28100,
        "highprc" : 29350,
        "lowprc" : 27150,
        "closeprc" : 28700,
        "trdvolume" : 302078,
        "trdamnt" : 8538513500,
        "date" : "2013-04-26"
},{
        "openprc" : 28350,
        "highprc" : 29000,
        "lowprc" : 27800,
        "closeprc" : 28550,
        "trdvolume" : 119271,
        "trdamnt" : 3381162450,
        "date" : "2013-04-29"
},{
        "openprc" : 26300,
        "highprc" : 26650,
        "lowprc" : 25800,
        "closeprc" : 26350,
        "trdvolume" : 129413,
        "trdamnt" : 3398779000,
        "date" : "2013-05-02"
},{
        "openprc" : 26400,
        "highprc" : 26500,
        "lowprc" : 25800,
        "closeprc" : 26200,
        "trdvolume" : 70543,
        "trdamnt" : 1838515400,
        "date" : "2013-05-03"
},{
        "openprc" : 26500,
        "highprc" : 26500,
        "lowprc" : 25150,
        "closeprc" : 25400,
        "trdvolume" : 97005,
        "trdamnt" : 2477164750,
        "date" : "2013-05-06"
},{
        "openprc" : 25400,
        "highprc" : 26300,
        "lowprc" : 25400,
        "closeprc" : 25950,
        "trdvolume" : 103902,
        "trdamnt" : 2696342850,
        "date" : "2013-05-07"
},{
        "openprc" : 25750,
        "highprc" : 26300,
        "lowprc" : 25400,
        "closeprc" : 26250,
        "trdvolume" : 67573,
        "trdamnt" : 1753774750,
        "date" : "2013-05-08"
},{
        "openprc" : 26650,
        "highprc" : 27350,
        "lowprc" : 26150,
        "closeprc" : 27350,
        "trdvolume" : 202842,
        "trdamnt" : 5450073900,
        "date" : "2013-05-09"
},{
        "openprc" : 27400,
        "highprc" : 27700,
        "lowprc" : 26750,
        "closeprc" : 27500,
        "trdvolume" : 85816,
        "trdamnt" : 2338946750,
        "date" : "2013-05-10"
},{
        "openprc" : 27650,
        "highprc" : 28400,
        "lowprc" : 27050,
        "closeprc" : 27850,
        "trdvolume" : 101021,
        "trdamnt" : 2812784850,
        "date" : "2013-05-13"
},{
        "openprc" : 28100,
        "highprc" : 28150,
        "lowprc" : 26400,
        "closeprc" : 27000,
        "trdvolume" : 95149,
        "trdamnt" : 2582945450,
        "date" : "2013-05-14"
},{
        "openprc" : 27000,
        "highprc" : 27050,
        "lowprc" : 25450,
        "closeprc" : 26450,
        "trdvolume" : 94302,
        "trdamnt" : 2457925450,
        "date" : "2013-05-15"
},{
        "openprc" : 26400,
        "highprc" : 26700,
        "lowprc" : 25900,
        "closeprc" : 26450,
        "trdvolume" : 25526,
        "trdamnt" : 670889700,
        "date" : "2013-05-16"
},{
        "openprc" : 26500,
        "highprc" : 26750,
        "lowprc" : 25350,
        "closeprc" : 25350,
        "trdvolume" : 36630,
        "trdamnt" : 948575100,
        "date" : "2013-05-20"
},{
        "openprc" : 25350,
        "highprc" : 25350,
        "lowprc" : 24200,
        "closeprc" : 24700,
        "trdvolume" : 77838,
        "trdamnt" : 1909128100,
        "date" : "2013-05-21"
},{
        "openprc" : 24750,
        "highprc" : 25750,
        "lowprc" : 24650,
        "closeprc" : 25650,
        "trdvolume" : 42532,
        "trdamnt" : 1068849450,
        "date" : "2013-05-22"
},{
        "openprc" : 26000,
        "highprc" : 26100,
        "lowprc" : 25300,
        "closeprc" : 25750,
        "trdvolume" : 54693,
        "trdamnt" : 1409916450,
        "date" : "2013-05-23"
},{
        "openprc" : 25750,
        "highprc" : 25850,
        "lowprc" : 25300,
        "closeprc" : 25650,
        "trdvolume" : 30314,
        "trdamnt" : 776006500,
        "date" : "2013-05-24"
},{
        "openprc" : 25450,
        "highprc" : 25800,
        "lowprc" : 25400,
        "closeprc" : 25750,
        "trdvolume" : 28993,
        "trdamnt" : 742722250,
        "date" : "2013-05-27"
},{
        "openprc" : 26100,
        "highprc" : 26100,
        "lowprc" : 25450,
        "closeprc" : 25750,
        "trdvolume" : 26267,
        "trdamnt" : 676555900,
        "date" : "2013-05-28"
},{
        "openprc" : 25850,
        "highprc" : 26550,
        "lowprc" : 25750,
        "closeprc" : 26200,
        "trdvolume" : 40424,
        "trdamnt" : 1054019250,
        "date" : "2013-05-29"
},{
        "openprc" : 26500,
        "highprc" : 26900,
        "lowprc" : 26250,
        "closeprc" : 26800,
        "trdvolume" : 45237,
        "trdamnt" : 1202755600,
        "date" : "2013-05-30"
},{
        "openprc" : 26850,
        "highprc" : 26850,
        "lowprc" : 25750,
        "closeprc" : 26250,
        "trdvolume" : 49443,
        "trdamnt" : 1294503250,
        "date" : "2013-05-31"
},{
        "openprc" : 27500,
        "highprc" : 29850,
        "lowprc" : 27100,
        "closeprc" : 29350,
        "trdvolume" : 329599,
        "trdamnt" : 9357107050,
        "date" : "2013-06-03"
},{
        "openprc" : 29900,
        "highprc" : 31500,
        "lowprc" : 29400,
        "closeprc" : 30300,
        "trdvolume" : 225795,
        "trdamnt" : 6892663000,
        "date" : "2013-06-04"
},{
        "openprc" : 29950,
        "highprc" : 30100,
        "lowprc" : 28000,
        "closeprc" : 28150,
        "trdvolume" : 143289,
        "trdamnt" : 4138222300,
        "date" : "2013-06-05"
},{
        "openprc" : 28150,
        "highprc" : 28250,
        "lowprc" : 27100,
        "closeprc" : 27250,
        "trdvolume" : 73529,
        "trdamnt" : 2021234250,
        "date" : "2013-06-07"
},{
        "openprc" : 27500,
        "highprc" : 29100,
        "lowprc" : 27400,
        "closeprc" : 28000,
        "trdvolume" : 113197,
        "trdamnt" : 3191438550,
        "date" : "2013-06-10"
},{
        "openprc" : 27700,
        "highprc" : 28350,
        "lowprc" : 27300,
        "closeprc" : 27550,
        "trdvolume" : 59818,
        "trdamnt" : 1662085400,
        "date" : "2013-06-11"
},{
        "openprc" : 28150,
        "highprc" : 28750,
        "lowprc" : 27650,
        "closeprc" : 28200,
        "trdvolume" : 57037,
        "trdamnt" : 1614537550,
        "date" : "2013-06-12"
},{
        "openprc" : 28000,
        "highprc" : 29750,
        "lowprc" : 27850,
        "closeprc" : 29200,
        "trdvolume" : 91431,
        "trdamnt" : 2657152700,
        "date" : "2013-06-13"
},{
        "openprc" : 29250,
        "highprc" : 30000,
        "lowprc" : 28750,
        "closeprc" : 28750,
        "trdvolume" : 82214,
        "trdamnt" : 2416049800,
        "date" : "2013-06-14"
},{
        "openprc" : 29150,
        "highprc" : 29900,
        "lowprc" : 28900,
        "closeprc" : 29200,
        "trdvolume" : 47053,
        "trdamnt" : 1378648000,
        "date" : "2013-06-17"
},{
        "openprc" : 29000,
        "highprc" : 29050,
        "lowprc" : 26750,
        "closeprc" : 28150,
        "trdvolume" : 95183,
        "trdamnt" : 2646608450,
        "date" : "2013-06-18"
},{
        "openprc" : 27750,
        "highprc" : 28900,
        "lowprc" : 27450,
        "closeprc" : 28750,
        "trdvolume" : 48512,
        "trdamnt" : 1373558000,
        "date" : "2013-06-19"
},{
        "openprc" : 28950,
        "highprc" : 29100,
        "lowprc" : 28500,
        "closeprc" : 29050,
        "trdvolume" : 28523,
        "trdamnt" : 821401750,
        "date" : "2013-06-20"
},{
        "openprc" : 28350,
        "highprc" : 28900,
        "lowprc" : 28000,
        "closeprc" : 28700,
        "trdvolume" : 44906,
        "trdamnt" : 1277604950,
        "date" : "2013-06-21"
},{
        "openprc" : 28050,
        "highprc" : 28350,
        "lowprc" : 27500,
        "closeprc" : 28350,
        "trdvolume" : 41731,
        "trdamnt" : 1167362600,
        "date" : "2013-06-24"
},{
        "openprc" : 28350,
        "highprc" : 28350,
        "lowprc" : 26750,
        "closeprc" : 26750,
        "trdvolume" : 46937,
        "trdamnt" : 1296878850,
        "date" : "2013-06-25"
},{
        "openprc" : 26350,
        "highprc" : 26600,
        "lowprc" : 24600,
        "closeprc" : 25900,
        "trdvolume" : 107451,
        "trdamnt" : 2756046300,
        "date" : "2013-06-26"
},{
        "openprc" : 26500,
        "highprc" : 26800,
        "lowprc" : 26100,
        "closeprc" : 26350,
        "trdvolume" : 26308,
        "trdamnt" : 694781200,
        "date" : "2013-06-27"
},{
        "openprc" : 27150,
        "highprc" : 27800,
        "lowprc" : 26700,
        "closeprc" : 27700,
        "trdvolume" : 37076,
        "trdamnt" : 1011800850,
        "date" : "2013-06-28"
},{
        "openprc" : 27950,
        "highprc" : 28250,
        "lowprc" : 27200,
        "closeprc" : 28100,
        "trdvolume" : 40376,
        "trdamnt" : 1119329500,
        "date" : "2013-07-01"
},{
        "openprc" : 28100,
        "highprc" : 28100,
        "lowprc" : 27550,
        "closeprc" : 27700,
        "trdvolume" : 22383,
        "trdamnt" : 622138200,
        "date" : "2013-07-02"
},{
        "openprc" : 27700,
        "highprc" : 28600,
        "lowprc" : 27450,
        "closeprc" : 28400,
        "trdvolume" : 30108,
        "trdamnt" : 846081700,
        "date" : "2013-07-03"
},{
        "openprc" : 28450,
        "highprc" : 28700,
        "lowprc" : 27800,
        "closeprc" : 28700,
        "trdvolume" : 37686,
        "trdamnt" : 1067585900,
        "date" : "2013-07-04"
},{
        "openprc" : 28900,
        "highprc" : 29300,
        "lowprc" : 28150,
        "closeprc" : 29000,
        "trdvolume" : 30693,
        "trdamnt" : 884765150,
        "date" : "2013-07-05"
},{
        "openprc" : 29050,
        "highprc" : 29700,
        "lowprc" : 28400,
        "closeprc" : 29700,
        "trdvolume" : 46506,
        "trdamnt" : 1360504800,
        "date" : "2013-07-08"
},{
        "openprc" : 29750,
        "highprc" : 30050,
        "lowprc" : 29000,
        "closeprc" : 29450,
        "trdvolume" : 38002,
        "trdamnt" : 1122625400,
        "date" : "2013-07-09"
},{
        "openprc" : 29650,
        "highprc" : 29800,
        "lowprc" : 28750,
        "closeprc" : 29450,
        "trdvolume" : 25625,
        "trdamnt" : 751600250,
        "date" : "2013-07-10"
},{
        "openprc" : 29500,
        "highprc" : 29500,
        "lowprc" : 28550,
        "closeprc" : 28600,
        "trdvolume" : 31484,
        "trdamnt" : 911000750,
        "date" : "2013-07-11"
},{
        "openprc" : 29000,
        "highprc" : 29250,
        "lowprc" : 28950,
        "closeprc" : 29150,
        "trdvolume" : 7060,
        "trdamnt" : 205001500,
        "date" : "2013-07-12"
}
	];
	
	return dummyChartData;
};