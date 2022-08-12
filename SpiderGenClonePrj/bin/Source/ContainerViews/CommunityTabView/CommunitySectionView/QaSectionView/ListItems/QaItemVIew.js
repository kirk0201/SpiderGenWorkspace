
/**
Constructor
Do not call Function in Constructor.
*/
function QaItemVIew()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(QaItemVIew, AView);


QaItemVIew.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

QaItemVIew.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

QaItemVIew.prototype.setData = function(data)
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

QaItemVIew.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
