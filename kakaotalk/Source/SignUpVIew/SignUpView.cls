
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
	this.user_pwd.setText("");
	this.user_pwd_confirm.setText("");
};

function SignUpView*onBackBtnClick(comp, info, e)
{
	ANavigator.find('navigator').closePage('SignUpView');
	ANavigator.find('navigator').goPage("MainView");
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

function SignUpView*connectServer()
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
