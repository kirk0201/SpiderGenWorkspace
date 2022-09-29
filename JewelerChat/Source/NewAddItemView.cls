
/**
Constructor
Do not call Function in Constructor.
*/
class NewAddItemView()
{
	super();
	this.tabComp = null;
	//TODO:edit here

}
extends AView;


function NewAddItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function NewAddItemView*onInitDone()
{
	super.onInitDone();
	
	this.periodRbm = new RadioBtnManager(this);
	this.typeRbm = new RadioBtnManager(this);
	this.onTabBtnClick(this.period_tab1);
	this.onTabBtnClick(this.type_tab1);
	//TODO:edit here

};

function NewAddItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function NewAddItemView*onTabBtnClick(comp, info, e)
{
	console.log(comp);
	console.log(comp.owner.compId);
	var tabGroupId = comp.owner.compId;
	this.tabComp = tabGroupId;
	if (tabGroupId === "period_tabgroup") this.periodRbm.selectButton(comp);
	else if(tabGroupId === "type_tabgroup") this.typeRbm.selectButton(comp);
};
