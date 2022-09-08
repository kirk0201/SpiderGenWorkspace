
/**
Constructor
Do not call Function in Constructor.
*/
class MakeUserId()
{
	super();

	this.isCheckId = false;

}
extends AView;


function MakeUserId*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MakeUserId*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function MakeUserId*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};


//아이디 체크
function MakeUserId*doValidUid()
{
	let uid = this.uid.getText();

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



//비밀번호 체크
function MakeUserId*doValidSecKey()
{
	let secKey1 = this.secKey1.getText(),
		secKey2 = this.secKey2.getText();

	if(!secKey1)
	{
		AfcMessageBox('오류', '비밀번호를 입력해 주세요.');
		return false;
	}
	
	if(!secKey2)
	{
		AfcMessageBox('오류', '비밀번호 확인을 입력해 주세요.');
		return false;
	}
	
	secKey1 = secKey1.trim();
	secKey2 = secKey2.trim();
	
	if(secKey1.length < 4 || secKey1.length > 20)
	{
		AfcMessageBox('오류', '비밀번호는 4~20자까지만 가능합니다.');
		return false;
	}
	
	
	if(secKey2.length < 4 || secKey2.length > 20)
	{
		AfcMessageBox('오류', '비밀번호 확인은 4~20자까지만 가능합니다.');
		return false;
	}
	
	
	if(secKey1 != secKey2)
	{
		AfcMessageBox('오류', '비밀번호가 일치하지 않습니다.');
		return false;
	}
	
	return true;
	
};




function MakeUserId*onBtnCheckIdClick(comp, info, e)
{

	if(!this.doValidUid()) return;
			
	theApp.qmChat.sendProcessByName('tr1001', this.getContainerId(), null, 	
	(queryData) => {
		queryData.printQueryData();		
	}, 	
	(queryData) => {
		queryData.printQueryData();
		
		var blockData = queryData.getBlockData('OutBlock1');
		
		if(blockData[0].result==1)
		{
			this.isCheckId = false;
			AfcMessageBox('알림', '현재 사용이 불가능한 아이디입니다.');
		}
		else
		{
			this.isCheckId = true;
			AfcMessageBox('알림', '사용 가능한 아이디입니다.');
		}
		
	});

};




function MakeUserId*onBtnMakeUserIdClick(comp, info, e)
{

	if(!this.isCheckId)
	{
		AfcMessageBox('오류', '아이디 중복확인후 이용해주세요.');
		return;
	}

	if(!this.doValidUid()) return;
	
	
	if(!this.doValidSecKey()) return;
	
		
	theApp.qmChat.sendProcessByName('tr1000', this.getContainerId(), null, 	
	(queryData) => {
		queryData.printQueryData();		
	}, 	
	(queryData) => {
		queryData.printQueryData();
		
				
		var blockData = queryData.getBlockData('OutBlock1');
		
		if(blockData[0].result==1)
		{			
			AfcMessageBox('알림', blockData[0].message);
			
			this.getContainer().close(1, this.uid.getText().trim());
			
		}
		else
		{	
		
			AfcMessageBox('오류', !blockData[0].message ? '아이디 생성을 실패하였습니다.' : blockData[0].message);			
		}
		
	});
	
	

};

function MakeUserId*onUidChange(comp, info, e)
{

	this.isCheckId = false;

};

function MakeUserId*onBtnCloseClick(comp, info, e)
{

	this.getContainer().close();

};


