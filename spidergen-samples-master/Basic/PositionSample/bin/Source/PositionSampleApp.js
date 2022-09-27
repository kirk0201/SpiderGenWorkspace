
afc.loadScript("Framework/afc/component/ANavigator.js");


/**
Constructor
Do not call Function in Constructor.
*/
function PositionSampleApp()
{
	AApplication.call(this);

	//TODO:edit here

}
afc.extendsClass(PositionSampleApp, AApplication);


PositionSampleApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	var navigator = new ANavigator();
	navigator.registerPage('Source/MainView.lay', 'MainView');
	
	//AutoSizeView 는 실행하지 말고 lay 파일을 직접 열어서 컨텐츠 내용을 바꿔가면 확인
	//navigator.registerPage('Source/AutoSizeView.lay', 'AutoSizeView'); 
	
	navigator.registerPage('Source/GridLayoutView.lay', 'GridLayoutView'); 
	navigator.registerPage('Source/GridLayoutView2.lay', 'GridLayoutView2'); 
	
	navigator.registerPage('Source/FlexLayoutView.lay', 'FlexLayoutView'); 
	navigator.registerPage('Source/FlexLayoutView2.lay', 'FlexLayoutView2'); 
	navigator.registerPage('Source/FlexLayoutView3.lay', 'FlexLayoutView3'); 
	
	//페이지 아이디를 변경하여 원하는 화면을 실행해 볼 수 있습니다.
	navigator.goPage('MainView');

};

PositionSampleApp.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};

var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new PositionSampleApp();
	    theApp.isLoadTheme = false;
        if(PROJECT_OPTION.unitUrl) theApp.unitTest(PROJECT_OPTION.unitUrl);
        else theApp.onReady();
    });
};

if(!AApplication.manualStart)
{
    $(document).ready(function()
    {
        AApplication.start();
    });
}
else if(AApplication.manualStart == 2)
{
    AApplication.start();
}

