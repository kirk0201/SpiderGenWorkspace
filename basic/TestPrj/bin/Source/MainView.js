/**
Constructor
*/
class MainView extends AView
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

		//TODO:edit here

	}
	onAButton1Click(comp, info, e)
	{
		this.btn1.option.isCheckBtn = true
		console.log("체크여부?", this.btn1.getCheck())
		
		if (!this.btn1.getCheck())this.hello.setText("Text Change!!!")
		else {
			this.hello.setText("Hello World!!!")
			this.btn1.defaultBtnState()
		}
		//TODO:edit here

	}

}

window["MainView"] = MainView