
/**
Constructor
Do not call Function in Constructor.
*/
function DuAccListView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(DuAccListView, AView);


DuAccListView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

DuAccListView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

DuAccListView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	
	//TODO:edit here

};

DuAccListView.prototype.setData = function(data)
{

	//TODO:edit here
	console.log("data", data);
// 	debugger;
	this.accListItem = data[0];
	this.acclist.addItem("Source/Layout/Items/DuAccItemView.lay", data);
};

DuAccListView.prototype.onAccListSelect = function(comp, info, e)
{
// debugger;

	const cateName = info.view.category_name.getText();
	
	this.getContainer().close(true, {name: cateName});

	//TODO:edit here
	//var getText = info.view.category_name.getText();
	//var tfData = this.owner.getContainer().getData();
	//tfData.text = getText;
	// 	this.owner.getContainer().getData().view.tf_job.setText(getText);
	// 	var obj = this.owner.parent.getContainer().getData().view.tf_job;
	// 	var compId = this.owner.getContainer().getData();
	// 	console.log("getText",getText);
	// 	console.log("owner",this.owner);
	//console.log(tfData);
	//theApp.navi.goPage("DetailUserView");
	
// 	console.log(info.view);
	
};
