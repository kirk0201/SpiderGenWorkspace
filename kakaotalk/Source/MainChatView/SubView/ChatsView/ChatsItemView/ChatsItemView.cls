
/**
Constructor
Do not call Function in Constructor.
*/
class ChatsItemView()
{
	super();
	this.data = null;
	//TODO:edit here

}
extends AView;


function ChatsItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here
	
	

};

function ChatsItemView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function ChatsItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function ChatsItemView*setData(data)
{
	this.chat_img.setImage(data.chat_img);
	this.chat_name.setText(data.chat_name);
	this.chat_content.setText(data.chat_content[0].content);

	this.data = data;
	console.log(this.data);
};
