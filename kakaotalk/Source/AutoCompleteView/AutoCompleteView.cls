
/**
Constructor
Do not call Function in Constructor.
*/
class AutoCompleteView()
{
	super();

	//TODO:edit here

}
extends AView;


function AutoCompleteView*init(context, evtListener)
{
	super.init(context, evtListener);
/*			this.data =
	[
		{'userEmail':'kirk0201@naver.com'},
		{'userEmail':'mine6546@gmail.com'},
		{'userEmail':'gallove@daum.net'},
		{'userEmail':'skylove@nate.com'}
	];
		this.autoCompleteList.addItem('Source/AutoCompleteView/AutoItemView/AutoItemView.lay', this.data);*/
	//TODO:edit here

};

function AutoCompleteView*onInitDone()
{
	super.onInitDone();

	this.autoCompleteList.refreshListView();
	// userEmail Mock Data
	this.data =
	[
		{'userEmail':'kirk0201@naver.com'},
		{'userEmail':'mine6546@gmail.com'},
		{'userEmail':'gallove@daum.net'},
		{'userEmail':'skylove@nate.com'}
	];
	
	// 리스트의 첫번째 항목을 제거한다
	// userEmail 아이디 값을 가진 라벨을 위치만 잡기 위해 컴포넌트를 생성하였지만 text는 공백으로 두었기 때문에 email값이 없는 빈 줄도 같이 생성됨
	// 이를 해결하기 위해 AListView에서 첫 번째 줄을 삭제 시킴
// 	this.autoCompleteList.removeItem(this.autoCompleteList.getFirstItem());
	
	this.autoCompleteList.addItem('Source/AutoCompleteView/AutoItemView/AutoItemView.lay', this.data);
	this.selectItemManage();
};

function AutoCompleteView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function AutoCompleteView*filterData(text)
{
	this.autoCompleteList.removeAllItems();
	var data = this.data.filter(function(item)
	{
		return item.userEmail.indexOf(text)> -1;
	});
// 	console.log("data", data);
	this.autoCompleteList.addItem('Source/AutoCompleteView/AutoItemView/AutoItemView.lay', data);
// 	this.autoCompleteList.addItem('Source/AutoCompleteView/AutoItemView/AutoItemView.lay', newData);
// 	this.autoCompleteList.refreshListView();
};

// ListView인 autoCompleteList의 Select 함수
// selectItemManage함수를 따로 작성하지 않고, 진행시 콘솔도 찍히지 않음 selectItemManage 함수가 필수로 보여짐
function AutoCompleteView*onAutoCompleteListSelect(comp, info, e)
{
/*	
	console.log('comp', comp);
	console.log('info', info);
	console.log('e', e); 
	console.log("this.getContainer",comp.getContainer());
*/	
	this.getContainer().close(info.itemData);
};

function AutoCompleteView*closeManage()
{
	this.getContainer().close();
};

function AutoCompleteView*selectItemManage(isDown)
{
	var selectItem = this.autoCompleteList.getSelectItem();
// 	console.log(this.autoCompleteList.getItemCount());
	var inx = 0;
	
	if (selectItem)
	{
		// 선택된 selectItem의 inx 값을 가져와서 inx에 할당
		inx = this.autoCompleteList.indexOfItem(selectItem);
		if(isDown) inx--;
		else inx++;
		
		// selectItem에 item 총 개수를 max에 할당
		var max = this.autoCompleteList.getItemCount() - 1;
		
		if(inx<0) inx = 0;
		else if(inx > max) inx = max;
	}
	selectItem = this.autoCompleteList.getItem(inx);
	this.autoCompleteList.setSelectItem(selectItem);
	console.log(selectItem);
	return selectItem;
};

// AWindow에 정상적인 Event가 호출되기 위해서 e.preventDefault()로 초기화가 필수
// 초기화를 하지 않을 시 클릭을 해도 event가 먹히지 않음
function AutoCompleteView*onAView1Actiondown(comp, info, e)
{
	e.preventDefault();
	//TODO:edit here

};
function AutoCompleteView*onClearBtnClick(comp, info, e)
{
	this.autoCompleteList.removeAllItems();
	//TODO:edit here

};

function AutoCompleteView*onClearBtnActiondown(comp, info, e)
{
	e.preventDefault();

	//TODO:edit here

};

function AutoCompleteView*onAutoSaveBtnClick(comp, info, e)
{
	if (comp.getText() === "자동저장 on") comp.setText("자동저장 off");
	else comp.setText("자동저장 on");
	//TODO:edit here

};

function AutoCompleteView*onAutoSaveBtnActiondown(comp, info, e)
{
	e.preventDefault();
	//TODO:edit here

};
