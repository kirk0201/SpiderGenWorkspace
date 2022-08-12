
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	this.tabview.addTab("탭1", "Source/subView/subView1.lay", "tab1");
	this.tabview.addTab("탭2", "Source/subView/subView2.lay", "tab2");
	this.tabview.addTab("탭3", "Source/subView/subView3.lay", "tab3");
	
	this.tabview.selectTabById("tab2");
	//TODO:edit here

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
