/**
Constructor
Do not call Function in Constructor.
*/
function ChatsView()
{
	AView.call(this);
	var selectIdx = null;
	//TODO:edit here

}
afc.extendsClass(ChatsView, AView);


ChatsView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

/*	this.chatListData =
	[
		{
			id: 1,
			img: '',
			chat_name: '재현',
			chat_content: '개발에 대해서 궁금한 무엇이든 물어보고 공유하세요.'
		},
		{
			id: 2,
			img: '',
			chat_name: '민수',
			chat_content: '당황하지 마시고 제보해주세요.'
		},
		{
			id: 3,
			img: '',
			chat_name: '철수',
			chat_content: '스파이더젠에 대해서 무엇이든 물어보세요.'
		},
		{
			id: 4,
			img: '',
			chat_name: '동수',
			chat_content: '반짝반짝 멋진 아이디어를 기다립니다.'
		},
		{
			id: 5,
			img: '',
			chat_name: '고수',
			chat_content: '개발 공부는 꾸준히 하셔야 해요'
		},
		{
			id: 6,
			img: '',
			chat_name: '하수',
			chat_content: '질문좀 해도 될까요?'
		},
	];*/
	//TODO:edit here

};

ChatsView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	var data = this.getContainer().getData().loginData[0].Chats;

	console.log("ChatsData", this.data);

	//TODO:edit here
	this.chatsList.addItem('Source/MainChatView/SubView/ChatsView/ChatsItemView/ChatsItemView.lay', data);
};

ChatsView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

ChatsView.prototype.onChatsViewSelect = function(comp, info, e)
{

	//TODO:edit here
/*	
	console.log("comp",comp);
	console.log("e",e);
	console.log('info', info);
	console.log(this.getContainer());
*/
	var data = this.getContainer().getData().loginData[0].Chats[selectIdx];

	console.log("navidata", data);
	ANavigator.find('navigator').goPage('ChatRoomView', data);
};

ChatsView.prototype.onAView1Click = function(comp, info, e)
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
