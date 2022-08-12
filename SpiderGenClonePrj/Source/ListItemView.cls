
/**
Constructor
Do not call Function in Constructor.
*/
class ListItemView()
{
	super();
	this.data = null;
	//TODO:edit here

}
extends AView;


function ListItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function ListItemView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function ListItemView*setData(data)
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

function ListItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
