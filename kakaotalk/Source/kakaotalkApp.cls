import "Framework/afc/component/ANavigator.js";
/**
Constructor
Do not call Function in Constructor.
*/
class kakaotalkApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function kakaotalkApp*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	// new Navigator 생성
	var navigator = new ANavigator('navigator', null);
	
	navigator.registerPage('Source/MainView.lay', 'MainView');
	navigator.registerPage('Source/MainChatView/MainChatView.lay', 'MainChatView');
	
	navigator.goPage('MainView');
	//TODO:edit here

};

function kakaotalkApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
