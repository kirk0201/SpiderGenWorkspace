
/**
Constructor
Do not call Function in Constructor.
*/
function RoomView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(RoomView, AView);


RoomView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

};

RoomView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
};

RoomView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	this.roomData = this.getTabData();

	
	//방장 여부
	//this.roomData.isRoomHost;
	
	//방 참여 처리
	this.roomInManage();
};

RoomView.prototype.onDeactiveDone = function()
{
	AView.prototype.onDeactiveDone.call(this);
	
	
	this.chatList.removeAllItems();

};

RoomView.prototype.roomInManage = function()
{
	//this.requestUserList();
	
	this.addReportMessage({message: '알림 메시지 테스트...'});
};

/*
function RoomView*findUserItem(findFunc)
{
	var retItem = null;
	
	this.userList.getItems().each(function()
	{
		if(findFunc(this.itemData))
		{
			retItem = this;
			return false;
		}
	});
	
	return retItem;
};

function RoomView*findUserItemById(userId)
{
	return this.findUserItem(function(data)
	{
		return (data.userId==userId);
	});
};

function RoomView*removeListUserItem(userId)
{
	var item = this.findUserItemById(userId);
	
	this.userList.removeItem(item);
};
*/

RoomView.prototype.onExitBtnClick = function(comp, info, e)
{
	var thisObj = this;
	
	theApp.qmChat.sendProcessByName('tr0006', this.getContainerId(), null, 
	
	function(queryData)
	{
		//var blockData = queryData.getBlockData('InBlock1')[0];
		//blockData.roomId = thisObj.roomData.roomId;
	}, 
	
	function(queryData)
	{
		queryData.printQueryData();
		
		theApp.isRoomIn = false;
		
		var blockData = queryData.getBlockData('OutBlock1')[0];
		
		//방나가기 상태값이 들어 있음
		//blockData.result
		
		//var mainView = theApp.getMainContainer().getView();
		//mainView.tabview.selectTabById('home');
		
		
		//---------------------------------------------------------------------------
		//상황에 따라 채팅 종료처리 만들기
		
		thisObj.chatList.removeAllItems();
		
	});

};

RoomView.prototype.onChatTxtKeydown = function(comp, info, e)
{
	if(e.which==afc.KEY_ENTER)
	{
		this.onBtnSendTalkClick();
	}

};

RoomView.prototype.addChatMessage = function(msgObj)
{
	//this.chatMsg.appendText(msg);
	//this.chatMsg.scrollToBottom();
	
	console.log(msgObj);
	//userName, message
	
	if(msgObj.userId==theApp.userInfo.userId) 
	{
		this.chatList.addItem('Source/items/SendMsgView.lay', [msgObj]);
	}
	else
	{
		this.chatList.addItem('Source/items/RecvMsgView.lay', [msgObj]);
	}
	
	this.chatList.scrollToBottom();
};

RoomView.prototype.addReportMessage = function(msgObj)
{
	this.chatList.addItem('Source/items/ReportMsgView.lay', [msgObj]);
	this.chatList.scrollToBottom();
};



RoomView.prototype.onBtnSendTalkClick = function(comp, info, e)
{
	var thisObj = this;
	
	var msg = this.chatTxt.getText();
	msg = msg.trim();
	if(!msg) return;
	
	this.chatTxt.setText('');
	this.chatTxt.setFocus();
	
	theApp.qmChat.sendProcessByName('sn0001', this.getContainerId(), null, 
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1')[0];
		blockData.message = msg;
		
	}, -1);	//afterOutBlockData 값에 -1 을 셋팅하면 전송만 하고 응답 처리는 하지 않는다.

};
