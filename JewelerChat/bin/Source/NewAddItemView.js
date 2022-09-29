
/**
Constructor
Do not call Function in Constructor.
*/
function NewAddItemView()
{
	AView.call(this);
	this.tabComp = null;
	//TODO:edit here

}
afc.extendsClass(NewAddItemView, AView);


NewAddItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

NewAddItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	this.periodRbm = new RadioBtnManager(this);
	this.typeRbm = new RadioBtnManager(this);
	this.onTabBtnClick(this.period_tab1);
	this.onTabBtnClick(this.type_tab1);
	//TODO:edit here

};

NewAddItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

NewAddItemView.prototype.onTabBtnClick = function(comp, info, e)
{
	console.log(comp);
	console.log(comp.owner.compId);
	var tabGroupId = comp.owner.compId;
	this.tabComp = tabGroupId;
	if (tabGroupId === "period_tabgroup") this.periodRbm.selectButton(comp);
	else if(tabGroupId === "type_tabgroup") this.typeRbm.selectButton(comp);
};
