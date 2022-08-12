
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
	
// 	var innerView = AView.createView(null, 'Source/ContainerViews/HomeView/HomeView.lay');
// 	console.log(innerView);
	
/*	this.section.addTab("탭1", 'Source/ContainerViews/HomeView/HomeView.lay', 'tab1');
	this.section.addTab("탭2", 'Source/ContainerViews/CenterNavView/CenterNavView.lay', 'tab1');
	
	this.section.selectTabById("tab1");*/
// 	this.section.loadView('Source/ContainerViews/HomeView/HomeView.lay')
	//TODO:edit here

// 	this.view.loadContainer('Source/ContainerViews/HomeView/HomeView.lay', 'section');
// 	var innerView = this.view.loadView('Source/ContainerViews/HomeView/HomeView.lay');

	
};

function MainView*onInitDone()
{
	super.onInitDone();		
	
	// RadioBtnManager를 이용한 버튼을 라디오 버튼처럼 사용하기
	// new 키워드를 이용하여 객체 생성
	this.rbm = new RadioBtnManager(this);
	
	// onTabClick(tabId)로 Default로 보여질 탭을 설정하고 selectTabById를 이용하여 Defalut로 설정한 탭이 선택되게 한다
	// 두 함수 모두 이용해야 기본 값으로 원하는 탭이 설정된다
	this.onTabClick(this.tab1);
	console.log(this.rbm);
	
	// 처음 MainView에 ListView와 TabView를 같은 뷰에 설정하여 랜더링하려 했지만, tab에 필요한 Url 설정을 같은 뷰안에서 url설정이 안되기 떄문에
	// ContainerViews폴더 안에 tab에 필요한 ListView를 랜더링 할 Url뷰를 따로 생성하여 해결
	/*
		addItems함수에서 urlArr, dataArr는 필수 요소이며 특별한 데이터가 필요 없다면, 빈 배열로 해결 가능함
	*/
/*  var viewUrlArr = 
	[
	'Source/ContainerViews/HomeView/HomeView.lay',
	'Source/ContainerViews/CenterNavView/CenterNavView.lay',
	'Source/ContainerViews/DetailView/DetailView.lay',
	'Source/ContainerViews/DetailView2/DetailView2.lay',
	'Source/ContainerViews/SlideView2/SlideView2.lay',
	'Source/ContainerViews/DetailView3/DetailView3.lay'
	];
	this.listBody.addItems(viewUrlArr, [1,2,3,4]);
*/

/*	Tip!
	<listView를 사용하여 잘게 쪼개진 뷰를 이을 수 있다>
	
	addItems( urlArr, dataArr, isPrepend, asyncCallback )
	urlArr <Array> 추가 할 뷰의 URL(String) 배열  *필수* 
	dataArr <Array> 추가 할 뷰의 데이터 배열	     *필수*
	isPrepend <Boolean> 추가 할 위치 (true : 앞, false : 뒤) default false
	asyncCallback <Boolean> or <Function> 동기화 여부 및 동기화 시 콜백 함수. 받는 인수는 추가된 아이템의 배열이다.
*/

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	//TODO:edit here


};

function MainView*onTabClick(comp, info, e)
{
// 	this.rbm.isCheckStyle="Template/Theme/radioBtn.stl";

/*	var selBtn = this.rbm.getSelectButton();
	if(selBtn) this.rbm.reset(this);
	this.rbm.selectButton(this.myBtn);*/
// 매개변수 Comp는 이벤트(액션)가 생긴 component를 가리킨다
	console.log("Comp", comp);
//  없어도 작동함 정확한 사용법을 숙지할 필요
//	this.rbm.selectButton(comp);가 있어야 라디오버튼처럼 하나의 버튼만 활성화되고 나머지는 disable됨
	this.rbm.selectButton(comp);
	
	
//  comp.getComponentId()와 comp.compId의 차이는 없어 보인다
// 	this.section.selectTabById(comp.getComponentId());
	this.section.selectTabById(comp.compId);

	console.log(this.rbm);
};
function MainView*onLoginBtnClick(comp, info, e)
{

	// Window로 모달창 만들기
	// View로 사용할 레이아웃을 작성
	// Window 객체를 만들고, open함수를 사용하여 url을 통해 미리 작성한 레이아웃을 불러온뒤 사이즈를 설정한다
	// Window option을 확인하여 추가로 필요한 설정을 적용한다
	
	var wnd = new AWindow('login');
	wnd.setWindowOption({
	isModal:true,
	isCenter:true,
	isFocusLostClose:true,
	modalBgOption: 'dark'
	});
	wnd.open('Source/ContainerViews/LoginView/LoginView.lay', null, 400,300);
};

function MainView*onRegisterBtnClick(comp, info, e)
{
		this.section.selectTabById(comp.compId);

	//TODO:edit here
	
};
