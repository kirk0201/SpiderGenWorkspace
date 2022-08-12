
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

	//TODO:edit here

};

function kakaotalkApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
