
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
	
	//리스트뷰는 isUpdatePosition 옵션이 기본적으로 false 이다.
	//리스트뷰가 동적으로 리사이즈 될 때 
	//슬라이드뷰의 아이템이 리사이즈 되려면 옵션을 true 로 셋팅해야 한다.
	
	this.listView.setOption({isUpdatePosition: true});
	

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	
	this.listView.addItem('Source/subview1.lay', [1]);
	this.listView.addItem('Source/SlideSubview.lay', [1]);
	this.listView.addItem('Source/subview1.lay', [1]);
	this.listView.addItem('Source/SlideSubview.lay', [1]);
	this.listView.addItem('Source/subview1.lay', [1]);

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MainView.prototype.onAView1Swipe = function(comp, info, e)
{

	AToast.show('Main View Swipe');

};
