
/**
Constructor
Do not call Function in Constructor.
*/
class StyleDesignApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function StyleDesignApp*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

function StyleDesignApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
