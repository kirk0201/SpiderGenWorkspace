/**
Constructor
*/
import * from "Framework/afc/component/AToast.js";
class tabview1 extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()

		//TODO:edit here

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)
		AToast.show("Hello World!")
		//TODO:edit here

	}

}

window["tabview1"] = tabview1