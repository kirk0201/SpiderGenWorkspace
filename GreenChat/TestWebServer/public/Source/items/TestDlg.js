
/**
Constructor
Do not call Function in Constructor.
*/
function TestDlg()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestDlg, AView);


TestDlg.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestDlg.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestDlg.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
