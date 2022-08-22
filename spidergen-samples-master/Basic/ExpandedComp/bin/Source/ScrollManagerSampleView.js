
/**
Constructor
Do not call Function in Constructor.
*/
function ScrollManagerSampleView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ScrollManagerSampleView, AView);


ScrollManagerSampleView.prototype.onInitDone = function()
{
	var data = [];
	for(var i=0; i<40; i++)
		data.push(i);

	//listview
	this.testListView.addItem('Source/subviews/subview1.lay', data);
	
	
	//grid
	for(var i=0; i<50; i++)
		this.testGrid.addRow([i+1, i+2, i+3]);
	
};

ScrollManagerSampleView.prototype.onBackBtnClick = function(comp, info, e)
{

	this.getContainer().navigator.goPrevPage();

};

ScrollManagerSampleView.prototype.onListEnableBtnClick = function(comp, info, e)
{

	this.testListView.enableScrlManager();

};

ScrollManagerSampleView.prototype.onGridEnableBtnClick = function(comp, info, e)
{

	this.testGrid.enableScrlManager();

};
