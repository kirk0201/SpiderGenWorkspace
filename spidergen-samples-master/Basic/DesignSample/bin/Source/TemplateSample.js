
/**
Constructor
Do not call Function in Constructor.
*/
function TemplateSample()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TemplateSample, AView);


TemplateSample.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TemplateSample.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TemplateSample.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
