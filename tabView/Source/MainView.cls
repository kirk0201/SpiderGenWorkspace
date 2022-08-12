
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MainView*onInitDone()
{
	super.onInitDone();
	this.tabview.addTab("탭1", "Source/subView/subView1.lay", "tab1");
	this.tabview.addTab("탭2", "Source/subView/subView2.lay", "tab2");
	this.tabview.addTab("탭3", "Source/subView/subView3.lay", "tab3");
	
	this.tabview.selectTabById("tab2");
	//TODO:edit here

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
