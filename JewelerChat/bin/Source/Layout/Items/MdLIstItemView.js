
/**
Constructor
Do not call Function in Constructor.
*/
function MdLIstItemView()
{
	AView.call(this);
	this.ownerRootView = null;
	this.ownerView = null;
	//TODO:edit here

}
afc.extendsClass(MdLIstItemView, AView);


MdLIstItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MdLIstItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MdLIstItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};



MdLIstItemView.prototype.setData = function(data)
{
	//TODO:edit here
	console.log("data", data);
		if(data.subName === "link")	this.pf_name.setText("http://www." + data.name);
	
};

MdLIstItemView.prototype.onDeleteBtnClick = function(comp, info, e)
{

	//TODO:edit here
// 	console.log(this.owner.getRootView());
		this.ownerRootView = this.owner.getRootView();
		this.ownerView = this.owner;
		
		Util.removeListitem(this._item, this.ownerRootView, this.ownerView);

};
