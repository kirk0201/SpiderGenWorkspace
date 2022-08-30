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
	this.loginApi();
};



function ChatsView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
		

	console.log("4");
	this.navi();
// 	var listData = this.getContainer().getData().loginData[0].Chats;

// 	this.chatsList.addItem('Source/MainChatView/SubView/ChatsView/ChatsItemView/ChatsItemView.lay', listData);
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
// 	console.log("챗뷰오브젝트", data );
	ANavigator.find('navigator').goPage('ChatRoomView', data);
};
function ChatsView*navi(){
	var navi = ANavigator.find('navigator');
	console.log("네비게이터",navi);
};
function ChatsView*onAView1Click(comp, info, e)
{
// 	console.log("comp",comp);
// 	console.log("info",info);
// 	console.log("e", e);
	// ListView 선택시 선택된 아이템 인덱스번호
// 	console.log("select", this.chatsList.indexOfItem(this.chatsList.getSelectItem()));
	selectIdx= this.chatsList.indexOfItem(this.chatsList.getSelectItem());
// 	console.log(selectIdx);
	//TODO:edit here

};
function ChatsView*loginApi()
{
	this.token = this.getContainer().getData().loginData.token;
// 	console.log("ChatsView@@@@@@",this.token);
	//TODO:edit here
	var thisObj = this;
	theApp.qm.startManager("http://192.168.0.155:3000/chat/chatlist");
	theApp.qm.sendProcessByName('friend', this.getContainerId(), null,
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1');
		blockData[0].token = thisObj.token;
	
	
		// 		console.log("InBlock queryData",queryData);
		// 		console.log("printQueryData@@@@@@@@@@@@",queryData.printQueryData());
	},
	function(queryData)
	{
		var blockData = queryData.getBlockData('OutBlock1');
		console.log("!!!!@@@@@", blockData);
		// 		queryData.printQueryData();
		// 		console.log("friendsView queryData@@@@@@@@@@@@@@:", queryData);
		thisObj.chatsList.addItem('Source/MainChatView/SubView/ChatsView/ChatsItemView/ChatsItemView.lay', blockData);

	}
	);
};


