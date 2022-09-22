
/**
Constructor
Do not call Function in Constructor.
*/
class RegistUserView()
{
	super();

	//TODO:edit here

}
extends AView;


function RegistUserView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function RegistUserView*onInitDone()
{
	super.onInitDone();
	console.log(Boolean(theApp.uObj));
	//TODO:edit here

};

function RegistUserView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function RegistUserView*onTFChange(comp, info, e)
{
	console.log(comp);
	console.log(info);
	//TODO:edit here

};

function RegistUserView*isFilledTF()
{
	var name = this.tf_name.getText();
	var nickName = this.tf_nick.getText();
	var period = this.tf_period.getText();
	var graduate = this.tf_graduate.getText();
	var intro = this.ta_intro.getText();
	
	if (name, nickName, period, graduate, intro) return true;
	else AToast.show("모든 항목을 입력하세요");
};

function RegistUserView*onNextBtnClick(comp, info, e)
{
	var thisObj = this;
	//TODO:edit here
	if(!this.isFilledTF()) return;
	else if(theApp.uObj) {

	theApp.qm.sendProcessByName("registUser", this.getContainerId(), null, 	
	(queryData) => {
		var blockData = queryData.getBlockData('InBlock1')[0];
		
		blockData.id = theApp.uObj.id;
		queryData.printQueryData();
	}, 	
	(queryData) => {
		queryData.printQueryData();
		var blockData = queryData.getBlockData('OutBlock1')[0];
		thisObj.tf_name.setText("");
		thisObj.tf_nick.setText("");
		thisObj.tf_period.setText("");
		thisObj.tf_graduate.setText("");
		thisObj.ta_intro.setText("");
		
		// 기존 theApp.uObj id,uid에 추가된 객체 정보 업데이트
		Object.assign(theApp.uObj, blockData.result[0]);
		console.log(theApp.uObj);
		
		AToast.show(blockData.message);
		if(blockData.result) theApp.navi.goPage("DetailUserView");
	});
	} else if(!theApp.uObj){
		theApp.navi.goPage("MainView");
		AToast.show("유저 인증 정보가 만료되었습니다. 다시 로그인 해주세요");
	} 
};
