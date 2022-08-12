
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here


};

function MainView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};






function MainView*onAButton1Click(comp, info, e)
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
