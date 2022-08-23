
/**
Constructor
Do not call Function in Constructor.
*/
class SlideView()
{
	super();
	var data = null;
	//TODO:edit here

}
extends AView;


function SlideView*init(context, evtListener)
{
	super.init(context, evtListener);
	
	//TODO:edit here

};

function SlideView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function SlideView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function SlideView*setData(data)
{
	console.log("data", data.imgUrl);
	this.slideImg.setImage(data.imgUrl);
	this.slideText.setText(data.text);
	if(data.text2) this.slideText2.setText(data.text2);
	//TODO:edit here
	this.data = data;

};
