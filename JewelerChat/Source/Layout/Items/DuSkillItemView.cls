
/**
Constructor
Do not call Function in Constructor.
*/
class DuSkillItemView()
{
	super();

	//TODO:edit here

}
extends AView;


function DuSkillItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function DuSkillItemView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function DuSkillItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};


function DuSkillItemView*setData(data)
{
	// skill_grade, skill_name, skill_del_btn
	//TODO:edit here
	console.log("skill_data", data);
	this.skill_name.setText(data);
// 	this.skill_grade.setText();
};

function DuSkillItemView*onSkillDelClick(comp, info, e)
{
	
	//TODO:edit here
	console.log(e);
	console.log(info);
	console.log(comp);
	
};


