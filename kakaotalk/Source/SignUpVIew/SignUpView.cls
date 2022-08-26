
/**
Constructor
Do not call Function in Constructor.
*/
class SignUpView()
{
	super();

	//TODO:edit here

}
extends AView;


function SignUpView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SignUpView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function SignUpView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function SignUpView*onSignUpBtnClick(comp, info, e)
{
	this.loginApi();
};

function SignUpView*onBackBtnClick(comp, info, e)
{
	this.getContainer().navigator.goPrevPage();
};

function SignUpView*onWrongPassChange(comp, info, e)
{
	if(this.user_pwd.getText() !== this.user_pwd_confirm.getText()) {
		this.user_pwd.setStyle("color", "red");
		this.user_pwd_confirm.setStyle("color", 'red');
	} else {
		this.user_pwd.setStyle("color", "green");
		this.user_pwd_confirm.setStyle("color", 'green');
	}
};

function SignUpView*loginApi()
{
	Define.SERVER_URL = "http://192.168.0.155:3000/user/signup";
	var thisObj = this;
	
	theApp.qm.sendProcessByName('signup', this.getContainerId(), null,
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1');
		blockData[0].user_email = thisObj.user_email.getText();
		blockData[0].user_pwd = thisObj.user_pwd.getText();
	
		console.log(queryData);
// 		console.log("printQueryData",queryData.printQueryData());
	},
	function(queryData)
	{
		console.log("OutBound1 queryData:",queryData);
	/*	queryData.printQueryData();
		console.log("queryData",queryData);
		var block1Data = queryData.getBlockData('OutBlock1');
		var block2Data = queryData.getBlockData('OutBlock2');
		console.log("block1Data", block1Data);
		console.log("block2Data",block2Data);
		
		if (block2Data){
			thisObj.inputIdField.setText("");
			thisObj.inputPassField.setText("");
			
			console.log("this.isCheck", thisObj.isCheck);
			var data = {
				loginData:block2Data,
				autoLogin: thisObj.isCheck
			};
			
			ANavigator.find('navigator').goPage('MainChatView', data);			
		} else AToast.show(block1Data[0].errMsg);*/
	}
	);
};