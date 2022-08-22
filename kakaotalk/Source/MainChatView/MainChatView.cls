import 'Framework/afc/component/AMenu.js';

/**
Constructor
Do not call Function in Constructor.
*/
class MainChatView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainChatView*init(context, evtListener)
{
	super.init(context, evtListener);
	
	//TODO:edit here

};

function MainChatView*onInitDone()
{
	super.onInitDone();
	this.rbm = new RadioBtnManager(this);
	this.onTabClick(this.friendsBtn);
	//TODO:edit here

	

};

function MainChatView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	var data = this.getContainer().getData();
	console.log("MainChatViewData",data);
	//TODO:edit here

};

function MainChatView*onTabClick(comp, info, e)
{

	//TODO:edit here
	console.log(comp.compId);
	this.rbm.selectButton(comp);
	this.section.selectTabById(comp.compId);
};

function MainChatView*onAButtonActionup(comp, info, e)
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

function MainChatView*onEtcClick(comp, info, e)
{
	AToast.show("아직 준비중이에요");
	//TODO:edit here

};
