
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
	this.user_pwd.setText("");
	this.user_pwd_confirm.setText("");
};

SignUpView.prototype.onBackBtnClick = function(comp, info, e)
{
	ANavigator.find('navigator').closePage('SignUpView');
	ANavigator.find('navigator').goPage("MainView");
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

// 	this.connectServer();
	var thisObj = this;
	theApp.qm.startManager("http://192.168.0.155:3000/user/signup");
	theApp.qm.sendProcessByName('signup', this.getContainerId(), null,
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1');
		blockData[0].user_email = thisObj.user_email.getText();
		blockData[0].user_pwd = thisObj.user_pwd_confirm.getText();
		blockData[0].user_name = thisObj.user_name.getText();
	
		// 		console.log("InBlock queryData",queryData);
		console.log("printQueryData",queryData.printQueryData());
	},
	function(queryData)
	{
		// 		queryData.printQueryData();
		console.log("OutBlock1 queryData:", queryData);
		var msg = queryData.queryObj.OutBlock1.msg;
		AToast.show(msg);
		if(msg ==="회원가입을 성공했습니다")
		{
			ANavigator.find('navigator').closePage('SignUpView');
			ANavigator.find('navigator').goPage("MainView");
		}
	}
	);
};


SignUpView.prototype.connectServer = function()
{

	//TODO:edit here
	var serverUrl = Define.SERVER_URL = "http://192.168.0.155:3000/user/signup";
	console.log("test",Define.SERVER_URL);
	this.qm = new WebQueryManager();
	this.qm.removeQueryListener(this);
	
	var nio = new HttpIO(this.qm);
	this.qm.setNetworkIo(nio);
	this.qm.startManager("http://192.168.0.155:3000/user/signup");
		console.log("theApp", theApp);
};
