
/**
Constructor
Do not call Function in Constructor.
*/
function DuAccItemView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(DuAccItemView, AView);


DuAccItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

DuAccItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

DuAccItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


DuAccItemView.prototype.setData = function(data)
{

	//TODO:edit here
	this.category_name.setText(data);
};
