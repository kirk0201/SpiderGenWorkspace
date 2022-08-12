
/**
Constructor
Do not call Function in Constructor.
*/
class PositionSampleApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function PositionSampleApp*onReady()
{
	super.onReady();

	var navigator = new ANavigator();
	navigator.registerPage('Source/MainView.lay', 'MainView');
	navigator.registerPage('Source/LayoutView.lay', 'LayoutView'); 
	
	navigator.registerPage('Source/FlexLayoutView.lay', 'FlexLayoutView'); 
	navigator.registerPage('Source/FlexLayoutView2.lay', 'FlexLayoutView2'); 
	navigator.registerPage('Source/FlexLayoutView3.lay', 'FlexLayoutView3'); 
	
	
	navigator.goPage('FlexLayoutView3');


};

function PositionSampleApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
