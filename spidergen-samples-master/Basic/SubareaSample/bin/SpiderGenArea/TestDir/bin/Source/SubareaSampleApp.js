
/**
Constructor
Do not call Function in Constructor.
*/
function SubareaSampleApp()
{
	AApplication.call(this);

	//TODO:edit here

}
afc.extendsClass(SubareaSampleApp, AApplication);


SubareaSampleApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	// 스파이더젠 영역의 TAG 에 relative 셋팅을 할 수 없다면 여기에 다음 코드 추가
	// ---->
	// this.mainContainer.$ele.css('position', 'relative');

};

SubareaSampleApp.prototype.unitTest = function(unitUrl)
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
	    theApp = new SubareaSampleApp();
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

