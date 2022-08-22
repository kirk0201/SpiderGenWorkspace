
/**
Constructor
Do not call Function in Constructor.
*/
function AutoItemView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(AutoItemView, AView);


AutoItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	
/*	
	AutoItemView에서 userEmail 아이디 값을 가진 라벨에 데이터를 넣을때 빈 칸이 생기던 문제를 해결하기 위한 시도
	userEmail의 위치를 잡은 뒤 text를 공백으로 두었더니 생긴 문제
	
	코드로 컴포넌트를 생성하면 공백이 생성되는 것을 방지해 줄수도 있다고 생각함 하지만 아래 방식으로는 해결 안됨
	
	+해결 Source/AutoCompleteView/AutoCompleteView.cls에서 해결
	
	var userEmail = new ALabel();
	userEmail.init();
	userEmail.setComponentId('userEmail');
	userEmail.element.style.color = 'black';
	
	
	console.log("userEmail", userEmail);
*/
	var data = this._item.itemData;
	
// 	console.log("이메일",data.userEmail);
	this.userEmail.setText(data.userEmail);
	//TODO:edit here

};

AutoItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

AutoItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

AutoItemView.prototype.onDeleteBtnClick = function(comp, info, e)
{
	var thisAutoItemView = this;
	
	// setTimeout을 사용하는 이유를 알아볼 것
	
/*
	1. setTimeout안에서는 this가 global을 가리킴 올바른 위치를 가리키기 위해 this를 바인딩 한듯으로 보임
	2. owner가 없이 getRootView()를 사용하면 AutoItemView를 가리키지만 owner를 사용하면 부모 View인 AutoCompleteView를 기리킴
*/
	setTimeout(function()
	{
// 		console.log("e", e);
// 		console.log("comp", comp);
// 		console.log("info", info);
// 		console.log("test",thisAutoItemView.getRootView());
// 		console.log("test2",thisAutoItemView.owner.getRootView());
		thisAutoItemView.owner.getRootView().autoCompleteList.removeItem(thisAutoItemView._item);
	}, 1);
};

AutoItemView.prototype.onDeleteBtnActiondown = function(comp, info, e)
{
	e.preventDefault();
	//TODO:edit here

};
