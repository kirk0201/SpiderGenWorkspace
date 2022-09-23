
/**
Constructor
Do not call Function in Constructor.
*/
class DuSkillItemView()
{
	super();
	this.itemIndex = null;
	this.detailUserView = null;
	//TODO:edit here

}
extends AView;


function DuSkillItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function DuSkillItemView*onInitDone()
{
	super.onInitDone();
	
	// detailUserView 뷰
	this.detailUserView = this.getContainer().getView();
	//TODO:edit here


};

function DuSkillItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

// addItem으로 넘어온 데이터를 아이템에 세팅
function DuSkillItemView*setData(data)
{
	this.skill_name.setText(data.name);
	this.skill_grade.setText(data.subName);
};

// 삭제 버튼 클릭시 함수
function DuSkillItemView*onSkillDelClick(comp, info, e)
{
	// 보유 기술 count 변환 함수
	this.listCountChange();
	
	// 아이템 삭제 함수
	this.itemIndexDelete();
};

// 아이템 삭제 함수
function DuSkillItemView*itemIndexDelete()
{
	//TODO:edit here
	// data 객체에서 객체의 index를 얻어옴
	this.itemIndex = this._item.itemData.index;
	console.log("itemIndex", this.itemIndex);
	
	// DetailUserView에 dataArr 배열 객체의 index값과 넘어온 객체 index의 값이 일치하는 index를 찾아 idx변수에 저장
	// listitem을 선택했을 때 보다 정확한 아이템 index를 찾기 위한 작업 
	// (임의로 세팅한 고정 index 값이라 아이템을 삭제하면 유동적으로 인덱스가 바뀌므로 정확한 인덱스를 찾기 위한 추가 과정)
	var idx = this.detailUserView.skillList.findIndex((item, idx) => 
	{
		if(item.index === this.itemIndex) return idx;
	});
	
	// 위에서 보다 정확한 idx를 찾아 dataArr 배열에서 splice를 이용해 삭제 한다
	this.detailUserView.skillList.filter(item => 
	{
		if(item.index === this.itemIndex) this.detailUserView.skillList.splice(idx, 1);
	});
	
	// 선택된 아이템을 listview에서 삭제  
	this.owner.removeItem(this._item);
};


function DuSkillItemView*listCountChange()
{
	//TODO:edit here
	// skill_count의 컴포넌트 값을 가져와서 - 1을 하여 delete버튼 클릭시 하나씩 줄게 한다
	var countView = this.detailUserView.skill_count;
	
	countView.setText(this.detailUserView.skill_list.getItemCount() - 1);
};

function DuSkillItemView*doProcess(idx)
{
//   debugger;
	console.log("idx", idx);  
  
};


function DuSkillItemView*onCoverButtonClick(comp, info, e)
{
	this.getItemData();
	console.log("this", this);
	var selectIndex = this.owner.indexOfItem(this._item);
	console.log("selectIndex", selectIndex);
	this.doProcess(selectIndex);
// debugger;

//this.getRootView()
//owner()
//getContainer()
	//TODO:edit here

};
