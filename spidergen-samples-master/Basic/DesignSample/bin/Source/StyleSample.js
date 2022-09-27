
/**
Constructor
Do not call Function in Constructor.
*/
function StyleSample()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(StyleSample, AView);


StyleSample.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

StyleSample.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

StyleSample.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
