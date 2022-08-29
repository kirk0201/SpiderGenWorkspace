afc.loadScript("Framework/afc/component/AMenu.js");

/**
Constructor
Do not call Function in Constructor.
*/
function MainChatView()
{
	AView.call(this);
	this.token = null;
	//TODO:edit here

}
afc.extendsClass(MainChatView, AView);


MainChatView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	this.SetTimeSlider();

	console.log("!!!!!!!!!!!!!!!!!!!!q",this.getContainer().getData());
/*	setTimeout(() => {
		setInter++;
		console.log("setInter", setInter);
		this.bannerSlide.slideNext();
// 		this.bannerSlide.addItem('Source/MainChatView/SlideVIew/SlideView.lay', banner1);
		
		
// 		this.bannerSlide.removeAllItems();
		
		setTimeout(() =>
		{	
			setTime++;
			console.log("setTime", setTime);
		
			
// 		this.bannerSlide.slideTo(1);
// 			this.bannerSlide.removeAllItems();
		}, 3000);
	}, 5000);*/
	//TODO:edit here

};

MainChatView.prototype.SetTimeSlider = function() {
	var setOutTime = 0;
	var setInTime = 0;
	this.bannerSlide.setSpeed(300);
	var banner1 = [{imgUrl:"Assets/MainChat/Slide/galaxywatch.jpg", text: "갤럭시 워치5 사전예약 하시고 혜택 받아 가세요!"}];
	var banner2 = [{imgUrl:'Assets/MainChat/Slide/lenova.jpg', text: "다재다능한 컨버터블 노트북", text2: "ASUS"}];
	
	this.bannerSlide.addItem('Source/MainChatView/SlideVIew/SlideView.lay', banner1);
	setTimeout(() => {
		setOutTime++;
		console.log("setOutTime",setOutTime);
		this.bannerSlide.addItem('Source/MainChatView/SlideVIew/SlideView.lay', banner2);
		this.bannerSlide.slideNext();
		setTimeout(() => {
			setInTime++;
			console.log("setInTime",setInTime);
			this.bannerSlide.addItem('Source/MainChatView/SlideVIew/SlideView.lay', banner1);
			this.bannerSlide.slideNext();
			this.SetTimeSlider();
		}, 5000);
	}, 5000);
};

MainChatView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	this.token = this.getContainer().getData().loginData.token;
	this.loginApi();
	console.log("token", this.token);
	this.rbm = new RadioBtnManager(this);
	this.onTabClick(this.friendsBtn);
	//TODO:edit here
};

MainChatView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	var data = this.getContainer().getData();
	console.log("MainChatViewData",data);
};

MainChatView.prototype.onTabClick = function(comp, info, e)
{
	console.log(comp.compId);
	this.rbm.selectButton(comp);
	this.section.selectTabById(comp.compId);
	if (comp.compId === "friendsBtn") this.loginApi();
	console.log('tabId', comp.compId);
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


MainChatView.prototype.loginApi = function()
{

	//TODO:edit here
	var thisObj = this;
	theApp.qm.startManager("http://192.168.0.155:3000/friend/myfriend");
	theApp.qm.sendProcessByName('friend', this.getContainerId(), null,
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1');
		blockData[0].token = thisObj.token;
	
	
		// 		console.log("InBlock queryData",queryData);
		console.log("printQueryData",queryData.printQueryData());
	},
	function(queryData)
	{
		// 		queryData.printQueryData();
		console.log("OutBlock1 queryData:", queryData);
		var msg = queryData.queryObj.OutBlock1.msg;
		// 		AToast.show(msg);

	}
	);
};
