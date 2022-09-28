
/**
Constructor
Do not call Function in Constructor.
*/
class MainHomeView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainHomeView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MainHomeView*onInitDone()
{
	super.onInitDone();
	this.rbm = new RadioBtnManager(this);
	this.home_tabview.addTab("tab_home", "Source/Layout/HomeTabListView.lay", "home");
	
	this.onTabClick(this.tab_home);	
	//TODO:edit here

};

function MainHomeView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function MainHomeView*onTabClick(comp, info, e)
{

	//TODO:edit here
	this.rbm.selectButton(comp);
	this.home_tabview.selectTabById(comp.compId);
	/*comp.setStyle("border-bottom", "2px solid black");*/
};
