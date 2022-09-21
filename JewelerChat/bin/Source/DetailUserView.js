
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
	this.dataArr = [];
	this.listCount = null;
	//TODO:edit here

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
	//TODO:edit here

};

DetailUserView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

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
		Util.addListItem(this.type, this.title, this.subTitle, this.listView, this.itemUrl, this.dataArr);
		
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

DetailUserView.prototype.onSelectSkillList = function(comp, info, e)
{
debugger;
	//TODO:edit here
	console.log(e);
	console.log(comp);
	console.log(info);
	console.log("getItems", this.skill_list.getItems());
	
	var selectIndex = this.skill_list.indexOfItem(info);
	console.log("selectIndex", selectIndex);
	info.view.doProcess(selectIndex);
	
};


