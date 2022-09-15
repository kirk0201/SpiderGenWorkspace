
/**
Constructor
Do not call Function in Constructor.
*/
class JewelerChatApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function JewelerChatApp*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

function JewelerChatApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
