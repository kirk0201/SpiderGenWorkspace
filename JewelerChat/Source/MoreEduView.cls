
/**
Constructor
Do not call Function in Constructor.
*/
class MoreEduView()
{
	super();

	//TODO:edit here

}
extends AView;


function MoreEduView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MoreEduView*onInitDone()
{
	super.onInitDone();
// 	this.tf_admission.set
// 	var date = new ADatePicker();
//TODO:edit here

};

function MoreEduView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function MoreEduView*onNextButtonClick(comp, info, e)
{
	var thisObj = this;
// 	if(!this.isFiledTF()) return ;
	if(theApp.uObj) 
	{
	theApp.qm.sendProcessByName("eduUser", this.getContainerId(), null, 	
		(queryData) => {
			queryData.printQueryData();
			var blockData = queryData.getBlockData('InBlock1');
			console.log(theApp.uObj);
			blockData[0].id = theApp.uObj.id;			
// 			console.log("BlockData",blockData);
		}, 	
		(queryData) => {
			queryData.printQueryData();
		var blockData = queryData.getBlockData('OutBlock1')[0];
		console.log("blockData", blockData);
		
		AToast.show(blockData.message);
		if(blockData.result) theApp.navi.goPage("MoreEduView");
	});
	} 
	else if(!theApp.uObj)
	{
		theApp.navi.goPage("MainView");
		AToast.show("유저 인증 정보가 만료되었습니다. 다시 로그인 해주세요");
	}
};

function MoreEduView*isFiledTF()
{
	var name = this.tf_name.getText();
	var degree = this.tf_degree.getText();
	var major = this.tf_major.getText();
	var admission = this.tf_admission.getText();
	var graduate = this.tf_graduate.getText();
	
/*	if(this.jobList.length < 2 || this.skillList.length === 0) 
	{
		AToast.show("직무는 2개 이상 기술은 1개 이상 작성해주세요");
		return false;
	} else return true;*/

};

function MoreEduView*onTestClick(comp, info, e)
{

	//TODO:edit here
// 	console.log(this.cp_admission.getDate());
	console.log(this.is_current.getValue());
// 	this.is_current.setSelect(false);
};

function MoreEduView*onRadioBtnClick(comp, info, e)
{
	comp.setValue(1);

};

function MoreEduView*onSkipBtnClick(comp, info, e)
{
	theApp.navi.goPage("MoreExpView");
	//TODO:edit here

};
