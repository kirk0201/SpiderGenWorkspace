/**
Constructor
Do not call Function in Constructor.
*/
class ChatsView()
{
	super();
	var selectIdx = null;
}
extends AView;


function ChatsView*init(context, evtListener)
{
	super.init(context, evtListener);
};

function ChatsView*onInitDone()
{
	super.onInitDone();

};



function ChatsView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	console.log("4");
	this.navi();
	var listData = this.getContainer().getData().loginData[0].Chats;

	this.chatsList.addItem('Source/MainChatView/SubView/ChatsView/ChatsItemView/ChatsItemView.lay', listData);
/*	
	var data = this.getContainer().getData().loginData[0].Chats;
	console.log("ChatsData", this.data);
	this.chatsList.addItem('Source/MainChatView/SubView/ChatsView/ChatsItemView/ChatsItemView.lay', data);
*/
	//TODO:edit here

};

function ChatsView*onChatsViewSelect(comp, info, e)
{
	//TODO:edit here
/*	
	console.log("comp",comp);
	console.log("e",e);
	console.log('info', info);
	console.log(this.getContainer());
*/
	/*var data = this.getContainer().getData().loginData[0].Chats[selectIdx];*/
	var data = this.getContainer().getData();
	if (data)data.choice = selectIdx;
	console.log("챗뷰오브젝트", data );
	ANavigator.find('navigator').goPage('ChatRoomView', data);
};
function ChatsView*navi(){
	var navi = ANavigator.find('navigator');
	console.log("네비게이터",navi);
};
function ChatsView*onAView1Click(comp, info, e)
{
	console.log("comp",comp);
	console.log("info",info);
	console.log("e", e);
	// ListView 선택시 선택된 아이템 인덱스번호
	console.log("select", this.chatsList.indexOfItem(this.chatsList.getSelectItem()));
	selectIdx= this.chatsList.indexOfItem(this.chatsList.getSelectItem());
	console.log(selectIdx);
	//TODO:edit here

};


