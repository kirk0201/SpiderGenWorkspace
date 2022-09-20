
/**
Constructor
Do not call Function in Constructor.
*/
class MoreDetailView()
{
	super();

	//TODO:edit here

}
extends AView;


function MoreDetailView*init(context, evtListener)
{
	super.init(context, evtListener);
	Define.test();
	// 	Define.testFunction();
	
	//TODO:edit here

};

function MoreDetailView*onInitDone()
{
	super.onInitDone();
	this.portfolio_sb.addItem("파일업로드", 1, "file_upload");
	//TODO:edit here

};

function MoreDetailView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
