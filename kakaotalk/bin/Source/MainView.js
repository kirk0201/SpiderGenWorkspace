
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

MainView.prototype.onInputIdFieldFocus = function(comp, info, e)
{

	// 이미 존재하는 searchWnd가 있다면 작업 중지
	if (this.searchWnd) return;
	
	var wnd = new AWindow('input_ids');
	
	// comp.getPos()는 해당 컴포넌트의 Position 값을 가져옴
	// comp.element.style.width는 calc()수식을 가져옴, width 사이즈를 가져옴
	// MainView를 가리키는 this를 thisMainView변수에 할당
	var pos = comp.getPos(),
		width = comp.element.style.width,
		thisMainView = this;
	
	
/* AWindow 옵션
	this.option = 
{
    isModal: false,             //modal 여부, 모바일인 경우 기본값이 true 이다.
    isCenter: false,            //창을 중앙에 배치할 지
    isFocusLostClose: false,    //모달인 경우 포커스를 잃을 때 창을 닫을지
    isFocusLostHide: false,     //모달인 경우 포커스를 잃을 때 창을 숨길지
    modalBgOption: 'none',      //none, light, dark 모달인 경우 배경을 어둡기 정도
    overflow: 'hidden',         //hidden, auto, visible, scroll
    dragHandle: null,           //드래가 핸들이 될 클래스명이나 아이디, .windowHandle or #windowHandle
    isResizable: false,         //윈도우 창을 리사이즈 가능하게 할지
    isDraggable: false,         //윈도우 창을 드래그로 움직이게 할지
    inParent: false,            //부모 컨테이너 안에 창을 띄울 경우, 모달리스(isModal:false)이고 부모를 클릭해도 항상 부모보다 위에 보이게 하려면 이 값을 true 로 셋팅해야 한다.
    focusOnInit: true           //init될때 자동으로 윈도우의 첫번째 컴포넌트(tabIndex기준)에 포커스
}
*/
	//
	// focusOnInit을 true를 할경우 input에 대한 focus가 해제됨  ???: 윈도우의 첫번째 컴포넌트에 포커스가 정확히 어떤 것을 가리키는지 확인해야함
	wnd.setOption(
	{
		isModal: false,
		focusOnInit: false
	});
	
	wnd.open('Source/AutoCompleteView/AutoCompleteView.lay', this.getContainer(), pos.left, pos.top+40, width);
	wnd.setResultCallback(function(result) {
		thisMainView.searchWnd = null;
		// blur()처리된 element를 가리킴
		comp.$ele.blur();
		console.log("result",result);
		if(result)
		{
			thisMainView.inputIdField.setText(result.userEmail);
			console.log("result.userEmail", result.userEmail);
		}
	});
	this.searchWnd = wnd;
};

MainView.prototype.onInputIdFieldChange = function(comp, info, e)
{
	/*if (this.searchWnd)
	{
		this.searchWnd.getView().closeManage();
	}*/
	if(this.searchWnd) {
		console.log(this.searchWnd.getView());
		console.log("FilterData",this.searchWnd.getView().filterData(comp.getText()));
		this.searchWnd.getView().filterData(comp.getText());
	}
};

	// searchWnd 윈도우를 닫기 위한 코딩
MainView.prototype.onInputIdFieldBlur = function(comp, info, e)
{
	if(this.searchWnd)
	{
		this.searchWnd.getView();
	}
};
