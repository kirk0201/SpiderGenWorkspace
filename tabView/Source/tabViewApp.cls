
/**
Constructor
Do not call Function in Constructor.
*/
class tabViewApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function tabViewApp*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

function tabViewApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
