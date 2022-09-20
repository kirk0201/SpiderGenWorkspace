
/**
Constructor
Do not call Function in Constructor.
*/
function MoreDetailView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MoreDetailView, AView);


MoreDetailView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	Define.test();
	// 	Define.testFunction();
	
	//TODO:edit here

};

MoreDetailView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	this.portfolio_sb.addItem("파일업로드", 1, "file_upload");
	//TODO:edit here

};

MoreDetailView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
