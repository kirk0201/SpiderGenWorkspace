
afc.loadScript("Framework/afc/component/ANavigator.js");


/**
Constructor
Do not call Function in Constructor.
*/
function BackKeySampleApp()
{
	AApplication.call(this);

	//TODO:edit here

}
afc.extendsClass(BackKeySampleApp, AApplication);


BackKeySampleApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);
	
	//Library 폴더 우클릭 후 Add System LIB 메뉴 선택
	//위와 같이 Library 에 WebHistoryManager 를 추가하면
	//모바일의 BackKey 나 브라우저의 뒤로가기 버튼이 작동합니다.
	
	var navigator = new ANavigator();
	navigator.registerPage('Source/LoginView.lay', 'LoginView');
	navigator.registerPage('Source/MainView.lay', 'MainView');
	
	navigator.goPage('LoginView');
};

BackKeySampleApp.prototype.unitTest = function(unitUrl)
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
	    theApp = new BackKeySampleApp();
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

