
/**
Constructor
Do not call Function in Constructor.
*/
class MdLIstItemView()
{
	super();
	this.ownerRootView = null;
	this.ownerView = null;
	//TODO:edit here

}
extends AView;


function MdLIstItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MdLIstItemView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function MdLIstItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};



function MdLIstItemView*setData(data)
{
	//TODO:edit here
	console.log("data", data);
		if(data.subName === "link")	this.pf_name.setText("http://www." + data.name);
	
};

function MdLIstItemView*onDeleteBtnClick(comp, info, e)
{

	//TODO:edit here
// 	console.log(this.owner.getRootView());
		this.ownerRootView = this.owner.getRootView();
		this.ownerView = this.owner;
		
		Util.removeListitem(this._item, this.ownerRootView, this.ownerView);

};
