
/**
Constructor
Do not call Function in Constructor.
*/
class QaItemVIew()
{
	super();

	//TODO:edit here

}
extends AView;


function QaItemVIew*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function QaItemVIew*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function QaItemVIew*setData(data)
{
	console.log("data", data);
	this.qaImg.setImage(data.img);
	this.qaTitle.setText(data.title);
	this.qaName.setText(data.name);
	this.qaDate.setText(data.date);
	this.qaReply.setText(data.reply);
	this.qaView.setText(data.view);
	this.qaRecom.setText(data.recom);
	
};

function QaItemVIew*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
