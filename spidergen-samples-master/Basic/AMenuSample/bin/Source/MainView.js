
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

MainView.prototype.onATextBox1Actionup = function(comp, info, e)
{
	var menu = new AMenu();
	
	var itemInfos = 
	[
		{ text:'Menu1' },
		{ text:'Menu2' },
		{ text:'Menu3' },
		{ text:'SubMenu', sub: [ {text:'Sub1'}, {text:'Sub2'}, {text:'Sub3'} ] }
	];

	menu.setItemInfoArr(itemInfos);
	
	//콜백 함수에서 메뉴 선택 이번트를 처리합니다.
	menu.popupEx({left:e.pageX, top:e.pageY}, function(result)
	{
		console.log(result);
	
	});

};
