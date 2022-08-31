
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
	console.log("@@@@@@@@@@@@ChatsItemView@@@@@@@@@@@@@@@@@@@@", data.user.user_name);
	this.chat_img.setImage(data.user.user_img);
	var newComment = null;
	if(data.chat_comment.length> 20) {
		newComment = data.chat_comment.slice(0, 50);
		this.chat_name.setText(newComment);

	} else {
		this.chat_name.setText(data.chat_comment);
	}
// 	console.log("chat_content",);
// 	this.chat_content.setText(data.chat_content[data.chat_content.length - 1].content);

	this.data = data;
// 	console.log("ChatsItemView Data", this.data);
};

