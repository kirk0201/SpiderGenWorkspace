
/**
Constructor
Do not call Function in Constructor.
*/
function SignUpView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SignUpView, AView);


SignUpView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SignUpView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SignUpView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SignUpView.prototype.onSignUpBtnClick = function(comp, info, e)
{
	this.loginApi();
};

SignUpView.prototype.onBackBtnClick = function(comp, info, e)
{
	this.getContainer().navigator.goPrevPage();
};

SignUpView.prototype.onWrongPassChange = function(comp, info, e)
{
	if(this.user_pwd.getText() !== this.user_pwd_confirm.getText()) {
		this.user_pwd.setStyle("color", "red");
		this.user_pwd_confirm.setStyle("color", 'red');
	} else {
		this.user_pwd.setStyle("color", "green");
		this.user_pwd_confirm.setStyle("color", 'green');
	}
};

SignUpView.prototype.loginApi = function()
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