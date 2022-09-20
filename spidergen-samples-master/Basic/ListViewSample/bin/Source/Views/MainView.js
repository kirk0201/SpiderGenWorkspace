afc.loadScript("Framework/afc/component/AMessageBox.js");

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

	// 리스트뷰에 표시할 데이터
	this.listData = 
	[
		{img : 'Assets/img/door.png', title : 'List Content Title 1'},
		{img : 'Assets/img/page_white_add.png', title : 'List Content Title 2'},
		{img : 'Assets/img/page_white_copy.png', title : 'List Content Title 3'},
		{img : 'Assets/img/page_white_delete.png', title : 'List Content Title 4'},
		{img : 'Assets/img/page_white_edit.png', title : 'List Content Title 5'},
		{img : 'Assets/img/page_white_paste.png', title : 'List Content Title 6'}
	];
};


MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	//리스트뷰에 데이터 개수만큼의 아이템뷰를 추가한다.
	//즉, 6개의 ListItemView 가 로드되어 리스트뷰에 추가된다.
	//ListItemView.cls 에 setData 함수가 있으면 순서에 맞는 data 오브젝트를 파람라미터로 넘기며 호출해 준다.
	
	this.listView.addItem('Source/Items/ListItemView.lay', this.listData);
};

// 추가 버튼을 누르면 데이터를 이용해서 하나의 아이템을 추가한다.
MainView.prototype.onAddButtonClick = function(comp, info)
{
	var newData = [ {img : 'Assets/img/door.png', title : 'List Content Title 1'} ];
	
	this.listView.addItem('Source/Items/ListItemView.lay', newData);
};

//아이템을 선택했을 때 발생하는 이벤트
//ListView 에 select 이벤트를 등록한 경우 발생
MainView.prototype.onListViewSelect = function(comp, info, event)
{
	console.log(info);
	
	//info 에는 선택한 아이템이 감싸고 있는 view 객체가 들어 있다.
	//즉, info.view 는 ListItemView 클래스의 객체이다.
	var data = info.view.data;
	
	var box = new AMessageBox();
	box.openBox(null, data.title, AMessageBox.OK);
	
};
