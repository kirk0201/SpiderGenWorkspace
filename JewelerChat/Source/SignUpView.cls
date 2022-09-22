
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
	var thisObj = this;
	
	//TODO:edit here
	if(!this.isFilledTF()) return;
	theApp.qm.sendProcessByName("signUp", this.getContainerId(), null, 	
	(queryData) => {
		queryData.printQueryData();
	}, 	
	(queryData) => {
		queryData.printQueryData();
		// 버튼 클릭 후 TF 초기화
		thisObj.tf_id.setText("");
		thisObj.tf_pass.setText("");
		thisObj.tf_ispass.setText("");
		
		var blockData = queryData.getBlockData('OutBlock1')[0];
		
		AToast.show(blockData.message);
		if(blockData.result) theApp.navi.goPage("MainView");
	});

};

// TF가 모두 채워졌는지 확인하는 함수
function SignUpView*isFilledTF()
{
	//TODO:edit here
	var id = this.tf_id.getText();
	var pass1 = this.tf_pass.getText();
	var pass2 = this.tf_ispass.getText();
	
	if(id && pass1 && pass2) {
		return true;
	} else {
		AToast.show("양식을 모두 채워주세요");
		return false;
	}
};
