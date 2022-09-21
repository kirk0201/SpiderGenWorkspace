
/**
Constructor
Do not call Function in Constructor.
*/
function MoreDetailView()
{
	AView.call(this);
	this.type = "default";
	this.title = null;
	this.subTitle = null;
	this.listView = null;
	this.itemUrl = "Source/Layout/Items/MdLIstItemView.lay";
	this.dataArr = [];
	//TODO:edit here

}
afc.extendsClass(MoreDetailView, AView);


MoreDetailView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	//TODO:edit here

};

MoreDetailView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	this.pf_sb.addItem("링크", 0, "link");
	this.pf_sb.addItem("파일업로드", 1, "upload");
	
	//TODO:edit here

};

MoreDetailView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MoreDetailView.prototype.onPortfolio_btnClick = function(comp, info, e)
{

	//TODO:edit here
	this.addPfListItem();

};



MoreDetailView.prototype.addPfListItem = function()
{
	//TODO:edit here
	this.subTitle = this.pf_sb.getData();
	this.title = this.pf_tf.getText();
	this.listView = this.pf_list;
	
	if(this.title !== "" && this.subTitle === "link")
	{
		Util.addListItem(this.type, this.title, this.subTitle, this.listView, this.itemUrl, this.dataArr);
		this.pf_tf.setText("");
	}

};
