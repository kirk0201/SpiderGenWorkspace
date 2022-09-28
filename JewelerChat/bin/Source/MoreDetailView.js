
/**
Constructor
Do not call Function in Constructor.
*/
function MoreDetailView()
{
	AView.call(this);
	this.type = "link";
	this.title = null;
	this.subTitle = null;
	this.listView = null;
	this.itemUrl = "Source/Layout/Items/MdLIstItemView.lay";
	this.dataArr = [];
	//TODO:edit here
	this.isClicked = null;
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
	
	this.cert_name = this.cert_name;
// 	console.log(this.cert_name);
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
	/*this.subTitle = this.pf_sb.getData();
	this.title = this.pf_tf.getText();
	this.listView = this.pf_list;
	
	if(this.title !== "" && this.subTitle === "link")
	{
		Util.addListItem(this.type, this.title, this.subTitle, this.listView, this.itemUrl, this.dataArr);
		this.pf_tf.setText("");
	}*/

};



MoreDetailView.prototype.onRegisterBtnClick = function(comp, info, e)
{
	// 자격증
	// 	this.cert_date.getDate();
	// 	this.cert_tf.getText();
	//TODO:edit here
	// 	console.log("this.cert_namee",this.cert_name);
	
	
	console.log("comp", comp);
	console.log("info", info);
	console.log("e", e);
	console.log("this.cert_btn",this.cert_btn);
	
	this.isClicked = comp.compId;
	console.log("this.clicked",this.isClicked);
	// 포트폴리오
	if(this.isClicked ==="pf_btn")
	{
		this.subTitle = this.pf_sb.getData();
		this.title = this.pf_tf.getText();
		this.listView = this.pf_list;
	
		if(this.title !== "" && this.subTitle === "link")
		{
			Util.addListItem(this.type, this.title, this.subTitle, this.listView, this.itemUrl, this.dataArr);
			this.pf_tf.setText("");
		}
	} else if (this.isClicked === "cert_btn")
	{
		var title = this.cert_tf.getText();
		var subTitle = this.cert_date.getDate();
		var listView = this.cert_list;
		var itemUrl = "Source/Layout/Items/MdLIstItemView.lay";
		var dataArr = [];
		
	if(title !== "" && this.subTitle !== {})
		{
			Util.addListItem("date", title, subTitle, listView, itemUrl, dataArr );
			this.cert_tf.setText("");
		}
	}

// 	console.log(comp);
// 	console.log(e);
// 	console.log(comp.owner);
	
	console.log(this.cert_date.getDate());
	console.log(this.cert_tf.getText());
};

/*function MoreDetailView*onCallOwner()
{
	this.
};*/

MoreDetailView.prototype.onTextFieldChange = function(comp, info, e)
{

	//TODO:edit here

};
