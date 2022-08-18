
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

MainView.prototype.onInputEditFocus = function(comp, info, e)
{
	console.log("this", this);
	
	// searchWnd는 ID값이 아닌 이미 만들어진 매소드로 자동완성 객체를 가리키는 매소드로 보여짐
	if(this.searchWnd) return;
	
	// 해당 작업을 통해 searchWnd를 생성하는 듯
	var wnd = new AWindow('search_result');
	
		console.log("comp",comp);
		console.log("comp.getPos()", comp.getPos());
		console.log("width", comp.element.style.width);
		console.log("style", comp.element.style);

		// getPost() : 해당 컴포넌트의 Position 값을 가져옴
	var pos = comp.getPos(),
		width = comp.element.style.width, thisObj = this;
		
	wnd.setOption(
	{
		isModal: false,
		focusOnInit: false
	});
	
	wnd.open('Source/ResultView.lay', this.getContainer(), pos.left, pos.top+40, width);
	wnd.setResultCallback(function(result)
	{
		thisObj.searchWnd = null;
		console.log("comp.$ele.blue()", comp.$ele.blur());
		comp.$ele.blur();
		
		if(result)
		{
			thisObj.inputEdit.setText(result.name);
			
			console.log(result.name);
		}
	});
	
	this.searchWnd = wnd;
};

// TextField Change 이벤트
// onInputEditFocus에서 searchWnd에 wnd 객체를 할당
MainView.prototype.onInputEditChange = function(comp, info, e)
{
	console.log("this.searchWnd", this.searchWnd.getView());
	if(this.searchWnd)
	{
		this.searchWnd.getView().filterData(comp.getText());
	}
};

MainView.prototype.onInputEditBlur = function(comp, info, e)
{
	if(this.searchWnd)
	{
		console.log("getView()",this.searchWnd.getView());
		//.close()로는 자동완성 윈도우가 종료되지 않음 .closeManage()를 이용하여 윈도우를 닫아야함
		this.searchWnd.getView().closeManage();

	}
	
};


MainView.prototype.onInputEditKeyDown = function(comp, info, e)
{
	
	if(!this.searchWnd) return;
	console.error("??",e.which);
	var resultView = this.searchWnd.getView(), item;
	
	console.log('item?', item);
	console.log('resultView', resultView);
	// e.which==38 : up arrow
	// e.which==40 : down arrow
	// e.which==13 : enter
	if(e.which==38 || e.which==40)
	{
		
		item = resultView.selectItemManage(e.which==38);


		this.inputEdit.setText(item.itemData.name);
	}
	
	//enter
	else if(e.which==13)
	{
		item = resultView.resultListview.getSelectItem();
		resultView.onResultListviewSelect(null, item);
	}
	
	
};

MainView.prototype.onSearchBtnClick = function(comp, info, e)
{

	console.log('검색어 : ' + this.inputEdit.getText());

};
