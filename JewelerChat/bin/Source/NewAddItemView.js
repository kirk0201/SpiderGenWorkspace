
/**
Constructor
Do not call Function in Constructor.
*/
function NewAddItemView()
{
	AView.call(this);

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
	this.rbm = new RadioBtnManager(this);
	this.onTabClick(this.tab1);
	//TODO:edit here

};

NewAddItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
