
/**
Constructor
Do not call Function in Constructor.
*/
function Subview1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(Subview1, AView);


Subview1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

Subview1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

Subview1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


Subview1.prototype.setData = function(data)
{

	this.cntLabel.setText( 'Data : ' + data );

};
