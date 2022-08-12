
/**
Constructor
Do not call Function in Constructor.
*/
function SubSlideView1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SubSlideView1, AView);


SubSlideView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SubSlideView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SubSlideView1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
