/**
Constructor
*/
class flexLayoutVIew2App extends AApplication
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	onReady()
	{
		super.onReady();

		this.setMainContainer(new APage('main'));
		this.mainContainer.open('Source/MainView.lay');

		//TODO:edit here

	}

	unitTest(unitUrl)
	{
		//TODO:edit here

		this.onReady();

		super.unitTest(unitUrl);
	}

}

window["flexLayoutVIew2App"] = flexLayoutVIew2App