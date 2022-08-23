
/**
Constructor
Do not call Function in Constructor.
*/
function SlideView()
{
	AView.call(this);
	var data = null;
	//TODO:edit here

}
afc.extendsClass(SlideView, AView);


SlideView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	
	//TODO:edit here

};

SlideView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SlideView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SlideView.prototype.setData = function(data)
{
	console.log("data", data.imgUrl);
	this.slideImg.setImage(data.imgUrl);
	this.slideText.setText(data.text);
	if(data.text2) this.slideText2.setText(data.text2);
	//TODO:edit here
	this.data = data;

};
