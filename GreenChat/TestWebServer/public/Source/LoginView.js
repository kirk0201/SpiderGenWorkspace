
/**
Constructor
Do not call Function in Constructor.
*/
function LoginView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(LoginView, AView);


LoginView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

LoginView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

LoginView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	
	let uid = localStorage.getItem("cob.userId");
	if(uid) this.idTxt.setText(uid);
	

};


//아이디 체크
LoginView.prototype.doValidUid = function()
{
	let uid = this.idTxt.getText();

	if(!uid)
	{
		AfcMessageBox('오류', '아이디를 입력해 주세요.');
		return false;
	}
	
	uid = uid.trim();
	
	if(uid.length < 6 || uid.length > 20)
	{
		AfcMessageBox('오류', '아이디는 6~20자까지만 가능합니다.');
		return false;
	}
		
	let regExp = /^[a-z0-9]+$/g; 
	if(!regExp.test(uid))
	{
		AfcMessageBox('오류', '아이디는 영문, 숫자만 가능합니다.');
		return false;
	}
	
	return true;
	
};



LoginView.prototype.onLoginBtnClick = function(comp, info, e)
{
	if(!this.doValidUid()) return;

	var strId = this.idTxt.getText();

	theApp.qmChat.sendProcessByName('tr0001', this.getContainerId(), null, 
	
	(queryData) =>{
	
		queryData.printQueryData();
		
		var item = queryData.getBlockData('InBlock1')[0];
		
		//theApp.userInfo.userId = item.uid.trim();		
		
	}, 	
	(queryData) => {
	
		queryData.printQueryData();
		
		var blockData = queryData.getBlockData('OutBlock1');
		
		if(blockData[0].result==1)
		{
			var mainView = theApp.getMainContainer().getView();
			mainView.tabview.selectTabById('home');
		
			theApp.userInfo.userId = strId.trim();		
			
			localStorage.setItem("cob.userId", theApp.userInfo.userId);
			
		}
		else
		{
			alert('Login Fail!');
		}
		
	});
	

};

LoginView.prototype.onBtnCreateIdClick = function(comp, info, e)
{

	let win = new AWindow('makeUserIdWin');
	
	win.setResultCallback( (ret, data) => {
	
		if(ret)
		{
			this.idTxt.setText(data);		
		}
		
	});
	
	win.openFull('Source/MakeUserId.lay');

};


LoginView.prototype.onPwTxtKeyup = function(comp, info, e)
{
	if(e.keyCode == 13) 
	{
		this.onLoginBtnClick(this.btnLogin);
	}
	

};

LoginView.prototype.onClientEnterBtnClick = function(comp, info, e)
{
	var userId = this.clientSelect.getSelectedItemValue();
	
	theApp.qmChat.sendProcessByName('tr0001', this.getContainerId(), null, 
	
	(queryData) =>{
	
		var item = queryData.getBlockData('InBlock1')[0];
		item.uid = userId;
		item.secKey = 'test00';
	}, 	
	(queryData) => {
	
		queryData.printQueryData();
		
		var blockData = queryData.getBlockData('OutBlock1');
		
		if(blockData[0].result==1)
		{
			//var mainView = theApp.getMainContainer().getView();
			//mainView.tabview.selectTabById('home');
		
			theApp.userInfo.userId = userId;
			
			this.reqMakeRoom();
		}
		else
		{
			alert('Login Fail!');
		}
		
	});

};

LoginView.prototype.reqMakeRoom = function()
{
	//방만들기 요청
	theApp.qmChat.sendProcessByName('tr0004', this.getContainerId(), null, 
	
	(queryData)=>
	{
		var blockData = queryData.getBlockData('InBlock1');
		
		blockData[0].roomName = '상담방('+theApp.userInfo.userId+'):' + Date.now();
		blockData[0].roomPw = '';
		blockData[0].roomType = 0;
		
		//queryData.printQueryData();		
	}, 
	
	(queryData)=>
	{
		queryData.printQueryData();
		
		var blockData = queryData.getBlockData('OutBlock1');
		
		
		//방만들기 성공
		if(blockData[0].result==Define.RESULT.SUCCESS)
		{
			theApp.isRoomIn = true;
		
			var mainView = theApp.getMainContainer().getView();
			
			blockData[0].isRoomHost = true;	//방만들기로 방에 들어가는지 여부
			mainView.tabview.selectTabByIndex(2, blockData[0]);	//룸 아이디가 들어있는 OutBlockData 전달			
			
		}
		else
		{
			alert('Login Fail!');
		}
	});

};