afc.loadScript("Framework/afc/component/AMenu.js");

/**
Constructor
Do not call Function in Constructor.
*/
function MainChatView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainChatView, AView);


MainChatView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	
	//TODO:edit here

};

MainChatView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	this.rbm = new RadioBtnManager(this);
	this.onTabClick(this.friendsBtn);
	//TODO:edit here

	

};

MainChatView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	var data = this.getContainer().getData();
	console.log("MainChatViewData",data);
	//TODO:edit here

};

MainChatView.prototype.onTabClick = function(comp, info, e)
{

	//TODO:edit here
	console.log(comp.compId);
	this.rbm.selectButton(comp);
	this.section.selectTabById(comp.compId);
};

MainChatView.prototype.onAButtonActionup = function(comp, info, e)
{
	var menu = new AMenu();
	var data = this.getContainer().getData();
	var itemInfo = 
	[
		{text: '로그아웃'}
	];
	
	menu.setItemInfoArr(itemInfo);
	
	menu.popupEx({ left:e.pageX, top:e.pageY}, function(result)
	{
/*		this.isBgCheck = false;
		this.isFocusLostClose = false;
		console.log(this);
		console.log("comp", comp);
		console.log("info", info);
		console.log("e", e);*/
 		ANavigator.find('navigator').goPage('MainView', data);

			

// 		this.selItem.onclick(() => ANavigator.find('navigator').goPage('MainView'));

		
// 		ANavigator.find('navigator').goPage('MainView');	
		
	});
	//TODO:edit here

};

MainChatView.prototype.onEtcClick = function(comp, info, e)
{
	AToast.show("아직 준비중이에요");
	//TODO:edit here

};
