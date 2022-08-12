
/**
Constructor
Do not call Function in Constructor.
*/
function IntroduceView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(IntroduceView, AView);


IntroduceView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

IntroduceView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

IntroduceView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
