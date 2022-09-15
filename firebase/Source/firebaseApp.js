/**
Constructor
*/
import {initializeApp} from 'Assets/firebase/app'
class firebaseApp extends AApplication
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
		console.log(initializeApp);
		//TODO:edit here

	}

	unitTest(unitUrl)
	{
		//TODO:edit here

		this.onReady();

		super.unitTest(unitUrl);
	}

}

window["firebaseApp"] = firebaseApp