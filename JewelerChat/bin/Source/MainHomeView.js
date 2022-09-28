
/**
Constructor
Do not call Function in Constructor.
*/
function MainHomeView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainHomeView, AView);


MainHomeView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainHomeView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	this.rbm = new RadioBtnManager(this);
	this.home_tabview.addTab("tab_home", "Source/Layout/HomeTabListView.lay", "home");
	
	this.onTabClick(this.tab_home);	
	//TODO:edit here

};

MainHomeView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MainHomeView.prototype.onTabClick = function(comp, info, e)
{

	//TODO:edit here
	this.rbm.selectButton(comp);
	this.home_tabview.selectTabById(comp.compId);
	/*comp.setStyle("border-bottom", "2px solid black");*/
};
