
/**
Constructor
Do not call Function in Constructor.
*/
function DuSkillItemView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(DuSkillItemView, AView);


DuSkillItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

DuSkillItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

DuSkillItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


DuSkillItemView.prototype.setData = function(data)
{
	// skill_grade, skill_name, skill_del_btn
	//TODO:edit here
	console.log("skill_data", data);
	this.skill_name.setText(data);
// 	this.skill_grade.setText();
};

DuSkillItemView.prototype.onSkillDelClick = function(comp, info, e)
{
	
	//TODO:edit here
	console.log(e);
	console.log(info);
	console.log(comp);
	
};


