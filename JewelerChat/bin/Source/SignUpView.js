
/**
Constructor
Do not call Function in Constructor.
*/
function SignUpView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SignUpView, AView);


SignUpView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SignUpView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SignUpView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SignUpView.prototype.onSignUpBtnClick = function(comp, info, e)
{

	//TODO:edit here
	theApp.qmChat.sendProcessByName("signUp", this.getContainerId(), null, 	
	(queryData) => {
		queryData.printQueryData();
	}, 	
	(queryData) => {
		queryData.printQueryData();
		
		var blockData = queryData.getBlockData('OutBlock1')[0];
		AToast.show(blockData.message);
		
	});

};
