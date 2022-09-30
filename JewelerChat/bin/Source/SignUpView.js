
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
	var thisObj = this;
	
	//TODO:edit here
	if(!this.isFilledTF()) return;
	this.isValidAccount();
	theApp.qm.sendProcessByName("signUp", this.getContainerId(), null, 	
	(queryData) => {
		queryData.printQueryData();
	}, 	
	(queryData) => {
		queryData.printQueryData();
		// 버튼 클릭 후 TF 초기화
		thisObj.tf_id.setText("");
		thisObj.tf_pass1.setText("");
		thisObj.tf_pass2.setText("");
		
		var blockData = queryData.getBlockData('OutBlock1')[0];
		
		AToast.show(blockData.message);
		if(blockData.result) theApp.navi.goPage("MainView");
	});

};

// TF가 모두 채워졌는지 확인하는 함수


SignUpView.prototype.isFilledTF = function()
{
	//TODO:edit here
	var id = this.tf_id.getText();
	var pass1 = this.tf_pass1.getText();
	var pass2 = this.tf_pass2.getText();
	
	if(id && pass1 && pass2) {
		return true;
	} else {
		AToast.show("양식을 모두 채워주세요");
		return false;
	}
};

SignUpView.prototype.isValidAccount = function()
{
	var id = this.tf_id.getText();
	var pass1 = this.tf_pass1.getText();
	var pass2 = this.tf_pass2.getText();

	if(pass1 !== pass2) 
	{
		AToast.show("비밀번호를 확인해주세요");
		return false;
	}
	else return true; 
};
