
/**
Constructor
Do not call Function in Constructor.
*/
function ListItemView()
{
	AView.call(this);
	this.data = null;
	//TODO:edit here

}
afc.extendsClass(ListItemView, AView);


ListItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ListItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ListItemView.prototype.setData = function(data)
{
	console.log("data", data);
	this.itemImage.setImage(data.img);
	this.itemTitle.setText(data.title);
	this.itemContent.setText(data.content);
	this.itemPost.setText(data.post);
	this.itemReply.setText(data.reply);
	this.itemRecom.setText(data.recom);
	
	this.data = data;
};

ListItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
