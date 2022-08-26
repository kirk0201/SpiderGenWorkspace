
/**
Constructor
Do not call Function in Constructor.
*/
class RegisterView()
{
	super();

	//TODO:edit here

}
extends AView;


function RegisterView*init(context, evtListener)
{
	super.init(context, evtListener);
	
	//TODO:edit here

};

function RegisterView*onInitDone()
{
	super.onInitDone();
	console.log(this.owner);
	//TODO:edit here

};

function RegisterView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function RegisterView*onBackBtnClick(comp, info, e)
{

};


function RegisterView*onWrongPassChange(comp, info, e)
{	
	console.log();
	
};

function RegisterView*registerApi()
{
	Define.SERVER_URL = "http://192.168.0.155:3000/user/signup"
	var thisObj = this;
	
	theApp.qm.sendProcessByName('register', this.getContainerId(), null,
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1');
		
		blockData[0].user_email = thisObj.user_email.getText();
		blockData[0].user_pwd = thisObj.user_pwd_confirm.getText();
		blockData[0].user_name = thisObj.user_name.getText();
	
		console.log();
		console.log("printQueryData",queryData.printQueryData());
	},
	function(queryData)
	{
/*		queryData.printQueryData();
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
