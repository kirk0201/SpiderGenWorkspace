
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

	

};

function MainView*onInitDone()
{
	super.onInitDone();
	
	theApp.qmChat.addQueryListener(this);

	this.tabview.addTab(null, 'Source/LoginView.lay', 'login');
	this.tabview.addTab(null, 'Source/HomeView.lay', 'home');
	this.tabview.addTab(null, 'Source/RoomView.lay', 'room');
	
	this.tabview.selectTabById('login');
};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

//registerReal 로 등록하지 않은 noti 패킷들은 이곳으로 온다. 코딩으로 처리
function MainView*notiDataProcess(queryData, qm)
{
	var qryName = queryData.getQueryName(), thisObj = this, blockData, tab, roomView = null;
	
	switch(qryName)
	{
		//대기실 방정보 추가
		case 'nt0002':
		{
			blockData = queryData.getBlockData('OutBlock1');
		
			tab = this.tabview.getSelectedTab();
			if(tab.tabId=='home')
			{
				tab.content.view.roomListView.addItem('Source/RoomItemView.lay', blockData);
			}
		}
		break;
		
		//대기실 방정보 변경
		case 'nt0003':
		{
			blockData = queryData.getBlockData('OutBlock1');
		
			tab = this.tabview.getSelectedTab();
			if(tab.tabId=='home')
			{
				tab.content.view.setRoomItemInfo(blockData[0]);
			}
		}
		break;
		
		//대기실 방정보 삭제
		case 'nt0005':
		{
			blockData = queryData.getBlockData('OutBlock1');
		
			tab = this.tabview.getSelectedTab();
			if(tab.tabId=='home')
			{
				tab.content.view.removeRoomItem(blockData[0].roomId);
			}
		}
		break;
		
	
		//방 참여자 추가
		case 'nt0004':
		{
			blockData = queryData.getBlockData('OutBlock1');
		
			tab = this.tabview.getSelectedTab();
			
			if(tab.tabId=='room') roomView = tab.content.view;
			else if(tab.tabId=='home') roomView = tab.content.view.chatRoomArea.getLoadView();
			
			if(roomView) roomView.addReportMessage({message: blockData[0].userId + ' 님이 입장하셨습니다.'});
		}
		break;
		
		//방 참여자 삭제
		case 'nt0006':
		{
			queryData.printQueryData();

			blockData = queryData.getBlockData('OutBlock1');
			
			tab = this.tabview.getSelectedTab();
			
			if(tab.tabId=='room') roomView = tab.content.view;
			else if(tab.tabId=='home') roomView = tab.content.view.chatRoomArea.getLoadView();
			
			if(roomView) roomView.addReportMessage({message: blockData[0].userId + ' 님이 퇴장하셨습니다.'});
		}
		break;
		
		//채팅 메시지 전송
		case 'sn0001':
		{
			var obj = queryData.getBlockData('OutBlock1')[0];

			tab = this.tabview.getSelectedTab();
			
			if(tab.tabId=='room') roomView = tab.content.view;
			else if(tab.tabId=='home') roomView = tab.content.view.chatRoomArea.getLoadView();
				
			if(roomView) roomView.addChatMessage(obj);
		}
		break;
		
		
		case 'nt0010':
		{			
			theApp.userInfo.userId = '';			
			alert('중복 로그인으로 연결을 종료합니다.');
			document.location.replace(document.location.href);
		}
		break;
				
	}
};

function MainView*jsonDataProcess(msg, qm)
{
	switch(msg.id) 
	{
		//co-browsing 관련 패킷
		case 'syncEvent':
		{
		}
		break;

		default:
			//onError('Unrecognized message', parsedMessage);
		break;
	}

};

