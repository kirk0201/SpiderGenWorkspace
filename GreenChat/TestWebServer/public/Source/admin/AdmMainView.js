
/**
Constructor
Do not call Function in Constructor.
*/
function AdmMainView()
{
	AView.call(this);

	

}
afc.extendsClass(AdmMainView, AView);


AdmMainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	this.tabview.addTab('admHome', 'Source/admin/AdmHomeView.lay', 'admHome');	
	this.tabview.addTab('admConsList', 'Source/admin/AdmConsultsListView.lay', 'admConsList');
	
};

AdmMainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.tabview.selectTabByIndex(1);

};

AdmMainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	this.lbl_uid.setText(theApp.userInfo.userId + '님 환영합니다.');

};


AdmMainView.prototype.onAdmTabBtnClick = function(comp, info, e)
{
	let  tabId = comp.getComponentId();
	
	this.tabview.selectTabById(tabId);	
	
};


AdmMainView.prototype.onBtnCloseClick = function(comp, info, e)
{

	this.getContainer().close(true);
	
};
