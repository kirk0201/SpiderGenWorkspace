
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
	
	/*
	this.listView.setOption(
	{
		'isLongTabDrag': false,
	});
	*/
	
	//왼쪽 리스트뷰 아이템만 오른쪽으로 옮길 수 있게 함.
	this.listView.enableGlobalDrag();
	//this.listView2.enableGlobalDrag();
	

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.listView.addItem('Source/subview1.lay', [1,2,3,4,5,6,7,8,9,0]);

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
