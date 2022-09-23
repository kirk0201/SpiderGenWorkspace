
/**
Constructor
Do not call Function in Constructor.
*/
class DuAccListView()
{
	super();

	//TODO:edit here

}
extends AView;


function DuAccListView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function DuAccListView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function DuAccListView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	
	//TODO:edit here

};

function DuAccListView*setData(data)
{

	//TODO:edit here
	console.log("data", data);
// 	debugger;
	this.accListItem = data[0];
	this.acclist.addItem("Source/Layout/Items/DuAccItemView.lay", data);
};

function DuAccListView*onAccListSelect(comp, info, e)
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
