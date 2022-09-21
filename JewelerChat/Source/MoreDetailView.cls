
/**
Constructor
Do not call Function in Constructor.
*/
class MoreDetailView()
{
	super();
	this.type = "default";
	this.title = null;
	this.subTitle = null;
	this.listView = null;
	this.itemUrl = "Source/Layout/Items/MdLIstItemView.lay";
	this.dataArr = [];
	//TODO:edit here

}
extends AView;


function MoreDetailView*init(context, evtListener)
{
	super.init(context, evtListener);
	//TODO:edit here

};

function MoreDetailView*onInitDone()
{
	super.onInitDone();
	this.pf_sb.addItem("링크", 0, "link");
	this.pf_sb.addItem("파일업로드", 1, "upload");
	
	//TODO:edit here

};

function MoreDetailView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function MoreDetailView*onPortfolio_btnClick(comp, info, e)
{

	//TODO:edit here
	this.addPfListItem();

};



function MoreDetailView*addPfListItem()
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
