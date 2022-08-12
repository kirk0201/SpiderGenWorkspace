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
		this.tabview.addTab('탭1', 'Source/items/tabview1.lay', 'tab1');
		this.tabview.addTab('탭2', 'Source/items/tabview2.lay', 'tab2');
		this.tabview.addTab('탭3', 'Source/items/tabview3.lay', 'tab3');
		
		this.tabview.selectTabById('tab3');

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

window["MainView"] = MainView