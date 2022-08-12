
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

LoginView.prototype.onAButton1Click = function(comp, info, e)
{
	console.log(comp);
	//TODO:edit here
	this.loginView.owner.close();
};
