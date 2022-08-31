
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
	var isCheck = false;
	console.log(isCheck);
	//TODO:edit here

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	console.log("@#@#@#@#@#@@#@#@#@#@#", this.getContainer().getData());
	
	console.log(this.getContainer().getData());
	//TODO:edit here

};

// IdField를 클릭하여 활성화될 때
function MainView*onInputIdFieldFocus(comp, info, e)
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
	wnd.setResultCallback(function(result) 
	{
		thisMainView.searchWnd = null;
		// blur()처리된 element를 가리킴
		comp.$ele.blur();
// 		console.log("result",result);
		if(result)
		{
			console.log("result", result);
			thisMainView.inputIdField.setText(result.userEmail);
			console.log("result.userEmail", result.userEmail);
		}
	});
	this.searchWnd = wnd;
};

function MainView*onInputIdFieldChange(comp, info, e)
{
	/*if (this.searchWnd)
	{
		this.searchWnd.getView().closeManage();
	}*/
	if(this.searchWnd) {
// 		console.log(this.searchWnd.getView());
// 		console.log("FilterData",this.searchWnd.getView().filterData(comp.getText()));
		this.searchWnd.getView().filterData(comp.getText());
	}
};

	// searchWnd 윈도우를 닫기 위한 코딩
	// this.searchWnd.getView()는 AutoCompleteView를 가리키고 .getContainer를 추가하면 윈도우 객체를 가리킴
	// 윈도우 객체를 닫기 위해 close() 매소드를 사용
function MainView*onInputIdFieldBlur(comp, info, e)
{
	if(this.searchWnd)
	{
// 		console.log("1", this.searchWnd.getView());
// 		console.log("2", this.searchWnd.getView().getContainer());
// 		this.searchWnd.getView().getContainer().close();
		this.searchWnd.getView().closeManage();
	}
};


function MainView*onInputIdFieldKeydown(comp, info, e)
{
	if(!this.searchWnd) return;
	var autoView = this.searchWnd.getView(), item;
	var newArray = autoView.data;
// 	console.log("1",autoView.autoCompleteList.createItems('Source/AutoCompleteView/AutoItemView/AutoItemView.lay',autoView.data));
	// e.which==38 : up arrow
	// e.which==40 : down arrow
	// e.which==13 : enter
	if(e.which==13)
	{
		if(autoView.data.filter((itm) => itm.userEmail !== comp.getText())){
			console.log("엔터!", comp.getText());
			autoView.autoCompleteList.removeAllItems();
			newItm = autoView.data.push({"userEmail":comp.getText()});
			autoView.autoCompleteList.createItems('Source/AutoCompleteView/AutoItemView/AutoItemView.lay', newArray);
			autoView.autoCompleteList.refreshListView();
		}
		
// 		console.log(autoView.autoCompleteList.addItem('Source/AutoCompleteView/AutoItemView/AutoItemView.lay', [] ,{"userEmail":"test입니다"}));
// 		autoView.autoCompleteList.addItem('Source/AutoCompleteView/AutoItemView/AutoItemView.lay', [5]);
// 		console.log(autoView.data.push({'userEmail':"test"}));
// 		autoView.data.push({'userEmail':"test"});
		/*autoView.getContainer()*/
		/*item = autoView.autoCompleteList.getSelectItem();
		autoView.onAutoCompleteListSelect(null, item);*/
	
	}
};


// 로그인 버튼 클릭 함수
function MainView*onLoginBtnClick(comp, info, e)
{
	this.loginApi();
};

function MainView*onInputKeydown(comp, info, e)
{
	if(e.which == 13) 
	{
		
		this.loginApi();	
	}
};

function MainView*loginApi()
{
	
// console.log("isCheck", isCheck);
	theApp.qm.startManager(Define.SERVER_URL+`/signin`);
	var thisObj = this;
	if(thisObj.isCheck === undefined) thisObj.isCheck = false;
	
	theApp.qm.sendProcessByName('login', this.getContainerId(), null,
	function(queryData)
	{
		var blockData = queryData.getBlockData('InBlock1');
		blockData[0].user_email = thisObj.inputIdField.getText();
		blockData[0].user_pwd = thisObj.inputPassField.getText();
	
		console.log(queryData);
// 		console.log("printQueryData",queryData.printQueryData());
	},
	function(queryData)
	{
		queryData.printQueryData();
		console.log("queryData",queryData);
		var loginErr = queryData.getBlockData('OutBlock1');
		var loginData = queryData.getBlockData('OutBlock2');
		console.log("loginErr", loginErr);
		console.log("loginData", loginData);
		
		if (loginData){
			thisObj.inputIdField.setText("");
			thisObj.inputPassField.setText("");
			
			var data = {
				loginData,
			};
			ANavigator.find('navigator').closePage('MainView');
			ANavigator.find('navigator').goPage('MainChatView', data);			
		} else AToast.show(loginErr.msg);
	}
	);
};


function MainView*onAutoLoginCheckClick(comp, info, e)
{
	
	var check = this.checkBox;
	console.log(check.getCheck());
	if(check.getCheck() === true)
	{
		this.inputIdField.setText("kirk0201@naver.com");
		this.inputPassField.setText("1234");
		this.thisObj.isCheck = true;
	} else
	{
		this.inputIdField.setText("");
		this.inputPassField.setText("");
		this.thisObj.isCheck = false;
	}
	
	console.log(Boolean(check.getValue()));
	//TODO:edit here

};

function MainView*onRegisterGoClick(comp, info, e)
{
		ANavigator.find('navigator').goPage('SignUpView');
};
