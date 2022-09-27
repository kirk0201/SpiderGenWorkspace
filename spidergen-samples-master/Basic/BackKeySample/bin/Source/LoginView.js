
/**
Constructor
Do not call Function in Constructor.
*/
function LoginView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(LoginView, AView);


LoginView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

LoginView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

LoginView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

LoginView.prototype.onLoginBtnClick = function(comp, info, e)
{
	var navi = ANavigator.getRootNavigator();
	
	navi.goPage('MainView');
};
