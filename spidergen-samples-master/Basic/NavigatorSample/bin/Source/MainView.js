
afc.loadScript("Framework/afc/component/APanel.js");

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

//초기화가 시작될 때 호출되는 함수
MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here
	
	//url 대신 null 을 셋팅하면 빈 컨테이너가 뷰내부에 생성된다. 컨테이너 아이디는 생략 가능
	var cntr = this.naviView.loadContainer( null, 'viewCntr');
	
	//두번째 파라미터에 컨테이너를 셋팅하면 지정한 컨테이너의 내부에서 네비게이터가 작동된다.
	var navi = new ANavigator('testNavi', cntr);
	
	navi.registerPage('Source/Views/SubView1.lay', 'SubView1');
	navi.registerPage('Source/Views/SubView2.lay', 'SubView2');
	navi.registerPage('Source/Views/SubView3.lay', 'SubView3');
	
	navi.goPage('SubView1');


};
