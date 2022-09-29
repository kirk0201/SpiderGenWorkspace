
/**
Constructor
Do not call Function in Constructor.
*/
function DetailUserView()
{
	AView.call(this);
	this.type = "default";
	this.title = null;
	this.subTitle = null;
	this.listView = null;
	this.itemUrl = "Source/Layout/Items/DuSkillItemView.lay";
	this.listCount = null;
	//TODO:edit here
	this.compId = null;
	this.jobNumArr = [1, 2];
	
	// 서버로 넘기는 직무 배열
	this.jobList = [];
	
	// 서버로 넘기는 기술 배열 
	this.skillList = [];
}
afc.extendsClass(DetailUserView, AView);


DetailUserView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	//TODO:edit here
	
};

DetailUserView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.job_skill_sb.addItem("초급", 0, "초급");
	this.job_skill_sb.addItem("중급", 1, "중급");
	this.job_skill_sb.addItem("고급", 2, "고급");
	
	this.job_list.addItem("Source/Layout/Items/DuJobItemView.lay", this.jobNumArr);
};

DetailUserView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

};

// 직무 추가 버큰 클릭
DetailUserView.prototype.onJobAddBtnClick = function(comp, info, e)
{

	//TODO:edit here
	this.job_list.removeAllItems();	
	var idx = this.jobNumArr[this.jobNumArr.length - 1] + 1;
	this.jobNumArr.push(idx);
	this.job_list.addItem("Source/Layout/Items/DuJobItemView.lay", this.jobNumArr);
	
};

// 보유 기술 버튼 클릭시 
DetailUserView.prototype.onJob_skill_btnClick = function(comp, info, e)
{
	//TODO:edit here
	this.addSkillListItem();
};	

// 보유 기술 텍스트필드에서 Enter 입력시
DetailUserView.prototype.onJob_skill_tfKeydown = function(comp, info, e)
{
	//TODO:edit here
	// Error 핸들링 할 것!
	if(e.keyCode == 13)
	{
		this.addSkillListItem();
	}
};

// listView 아이템 추가 함수 및 초기화 함수 적용
DetailUserView.prototype.addSkillListItem = function()
{
	this.title = this.job_skill_tf.getText();
	this.subTitle = this.job_skill_sb.getData();
	this.listView = this.skill_list;
	
	// 할당된 값이 없을때 add하지 않는 조건
	// @@ 추가적인 오류 알림 핸들러 할 것
	if(this.title !== "" && this.subTitle !== "0")
	{
		Util.addListItem(this.type, this.title, this.subTitle, this.listView, this.itemUrl, this.skillList);
		
		// Text필드 초기화
		this.job_skill_tf.setText("");

		// Select박스 초기화
		this.job_skill_sb.selectItem(0);
		
		// list아이템 개수 체크
		this.listCount = this.skill_list.getItemCount();
		
		// 스킬 개수 텍스트 설정
		this.skill_count.setText(this.listCount);
		
	}
};





/*
function DetailUserView*onSelectSkillList(comp, info, e)
{
	// debugger;
	//TODO:edit here
	console.log(e);
	console.log(comp);
	console.log(info);
	console.log("getItems", this.skill_list.getItems());
	
	var selectIndex = this.skill_list.indexOfItem(info);
	console.log("selectIndex", selectIndex);
	info.view.doProcess(selectIndex);	
};
*/


DetailUserView.prototype.onNextButtonClick = function(comp, info, e)
{
	var thisObj = this;
	if(!this.isFiledTF()) return ;
	else if(theApp.uObj) 
	{
	theApp.qm.sendProcessByName("detailUser", this.getContainerId(), null, 	
		(queryData) => {
			queryData.printQueryData();
			var blockData = queryData.getBlockData('InBlock1');
			blockData[0].jobList = thisObj.jobList;
			blockData[0].skillList = thisObj.skillList;
			blockData[0].id = theApp.uObj.id;			
			console.log(theApp.uObj);
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


DetailUserView.prototype.isFiledTF = function()
{
	if(this.jobList.length < 2 || this.skillList.length === 0) 
	{
		AToast.show("직무는 2개 이상 기술은 1개 이상 작성해주세요");
		return false;
	} else return true;

};

DetailUserView.prototype.onSkipBtn = function(comp, info, e)
{
	// 상세페이지 -> 최종학력 페이지
	theApp.navi.goPage("MoreEduView");
	
};
