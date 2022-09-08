
/**
Constructor
Do not call Function in Constructor.
*/
function Item1View()
{
	SyncBaseView.call(this);

	//TODO:edit here

}
afc.extendsClass(Item1View, SyncBaseView);


Item1View.prototype.init = function(context, evtListener)
{
	SyncBaseView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

Item1View.prototype.onInitDone = function()
{
	SyncBaseView.prototype.onInitDone.call(this);

	//TODO:edit here
	
	this.testDrop.addItem('test 1');
	this.testDrop.addItem('test 2');
	this.testDrop.addItem('test 3');
	this.testDrop.addItem('test 4');
	this.testDrop.addItem('test 5');
		

};

Item1View.prototype.onActiveDone = function(isFirst)
{
	SyncBaseView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

Item1View.prototype.onNextButtonClick = function(comp, info, e)
{

	this.owner.selectTabByIndex(1);

};

Item1View.prototype.onOpenButton1Click = function(comp, info, e)
{

	var wnd = new ADialog();
	wnd.setOption({isFocusLostClose: true, inParent: true});
	wnd.open('Source/items/TestDlg.lay', this.getContainer() , 300, 300);

};

Item1View.prototype.onAButton1Click = function(comp, info, e)
{

	var data = [];
	data.length = 100;
	
	this.listView.addItem('Source/items/TestDlg.lay', data);

};
