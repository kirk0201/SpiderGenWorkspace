
/**
Constructor
Do not call Function in Constructor.
*/
function DetailUserView()
{
	AView.call(this);
	this.skillArr = [];
	this.skillContent = null;
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
	
	this.job_skill_sb.addItem("초급", 0, 0);
	this.job_skill_sb.addItem("중급", 1, 1);
	this.job_skill_sb.addItem("고급", 2, 2);
	//TODO:edit here

};

DetailUserView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};



DetailUserView.prototype.onJob_skill_tfChange = function(comp, info, e)
{

	//TODO:edit here
	console.log(info);
	this.skillContent = info;
	
// 	console.log(e);

};


// 보유 기술 버튼 클릭시 
DetailUserView.prototype.onJob_skill_btnClick = function(comp, info, e)
{
	//TODO:edit here
	this.addSkillListItem();
};	

DetailUserView.prototype.onJob_skill_tfKeydown = function(comp, info, e)
{
	//TODO:edit here
	console.log("getText()", this.job_skill_tf.getText() !== null);
	if(e.keyCode == 13 && this.job_skill_tf.getText() !== "")
	{
		this.addSkillListItem();
	}
};

// 보유 기술 텍스트필드 Enter Keydown 입력시
DetailUserView.prototype.addSkillListItem = function()
{
	// 기존 아이템을 삭제하여 중복되는 아이템을 방지
	this.skill_list.removeAllItems();
	this.skillArr.push(this.skillContent);
	this.skill_list.addItem("Source/Layout/Items/DuSkillItemView.lay", this.skillArr);
	this.job_skill_tf.setText("");
	this.skillContent = null;
};

DetailUserView.prototype.onSkillListSelect = function(comp, info, e)
{

	//TODO:edit here
	this.skill_list.getContainer().getView();
};
