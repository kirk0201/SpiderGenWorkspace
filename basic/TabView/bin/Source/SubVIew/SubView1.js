/**
Constructor
*/

class SubView1 extends AView
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
		var toast = new AToast();
		toast.show('Hello World!') // 작동안함


	}
	onDeactiveDone()
	{
		super.onDeactiveDone()
		this.tab1.setText("Hello!!")
	}

}

window["SubView1"] = SubView1