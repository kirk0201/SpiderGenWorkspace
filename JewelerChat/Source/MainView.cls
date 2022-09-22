
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

	//TODO:edit here

};

function MainView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here
	
	// GibberishAES 암호화, 복호화
	// 	var aaa = GibberishAES.enc("secret", "1234");
	// 	var bbb = GibberishAES.dec(aaa, "1234");

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function MainView*onRegisterBtnClick(comp, info, e)
{
	//TODO:edit here
	theApp.navi.goPage("SignUpView");
	
};

function MainView*onLoginBtnClick(comp, info, e)
{
	var thisObj = this;
	if(!this.isFilledTF()) return;
	theApp.qm.sendProcessByName("signIn", this.getContainerId(), null, 	
	(queryData) => {
		queryData.printQueryData();
	}, 	
	(queryData) => {
		queryData.printQueryData();
		// 버튼 클릭 후 TF 초기화
		thisObj.login_id.setText("");
		thisObj.login_pass.setText("");
		
		var blockData = queryData.getBlockData('OutBlock1')[0];

		theApp.uObj = blockData.result[0];
		console.log("uObj", theApp.uObj);
		AToast.show(blockData.message);
		
		if(blockData.result) theApp.navi.goPage("RegistUserView");
	});

};

// TF가 모두 채워졌는지 확인하는 함수
function MainView*isFilledTF()
{
	//TODO:edit here
	var id = this.login_id.getText();
	var pass = this.login_pass.getText();
	
	if(id && pass) {
		return true;
	} else {
		AToast.show("양식을 모두 채워주세요");
		return false;
	}
};