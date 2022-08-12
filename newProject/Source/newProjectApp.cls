
/**
Constructor
Do not call Function in Constructor.
*/
class newProjectApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function newProjectApp*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

function newProjectApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
