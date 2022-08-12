
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here


};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};






MainView.prototype.onAButton1Click = function(comp, info, e)
{
/*
// 	var wnd = new AWindow('test');
	var menuHidden = this.showmenu.element.hidden;
// 	this.showmenu.element.hidden = true;
	// menu 클릭 시 hidden 값을 바꿔주는 핸들러
	console.error(menuHidden);
		if(!menuHidden){
			menuHidden = true;
		} else {
			menuHidden = false;
		}
	//TODO:edit here
*/
	if(this.showmenu.isShow()) this.showmenu.hide();
	else this.showmenu.show();
	

};
