
/**
Constructor
Do not call Function in Constructor.
*/
// afc.loadScript('Assets/firebase/firebase-app.js');

class chattestApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function chattestApp*onReady()
{
	super.onReady();
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');
// 	console.log(firebase);
	console.log("test", initializeApp);
	//TODO:edit here

};

function chattestApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
