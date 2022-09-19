
/**
Constructor
Do not call Function in Constructor.
*/
class DetailUserAccView()
{
	super();

	//TODO:edit here

}
extends AView;


function DetailUserAccView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function DetailUserAccView*onInitDone()
{
	
	super.onInitDone();
	var itCategory = [
					  "포르젝트 관리", "서비스·게임 기획", "웹 개발", 
					  "빅데이터/AI/알고리즘", "서버 개발", "보안", 
					  "네트워크", "앱 개발", "게임 개발", "DB 관리·운영"
					 ];
					 
	var designCategory = [
							"시각·광고 디자인", "웹·앱 디자인", "제품·산업 디자인",
							"전시·공간 디자인", "의류·패션·잡화 디자인", "기타"
						 ];
						 
	var prCategory = [
						"마케팅/광고", "홍보/PR", "전시/행사", "기타"
					 ];
	this.acc.menuHeight = 50;
// 	this.acc.setMenuPadding(100, 0);
// 	this.acc.setStyle("backgroundColor", "#eee");

	console.log(this.acc.getElement());
	this.acc.insertItem("IT·인터넷", "Source/Layout/Items/DuAccListView.lay", itCategory);
	this.acc.insertItem("디자인", "Source/Layout/Items/DuAccListView.lay", designCategory);
	this.acc.insertItem("마케딩/PR", "Source/Layout/Items/DuAccListView.lay", prCategory);
// 			console.log(this.acc.getElement().setStyle('background-color', "#eee"));

// 	this.acc.setStyleObj({backgroundColor: "#eee"});
// 	this.acc.getCompStyleObj().main["backgroundColor"] = "#eee";

// 	this.acc.setStyleObj({backgroundColor: "#eee"});

	//TODO:edit here

};

function DetailUserAccView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
