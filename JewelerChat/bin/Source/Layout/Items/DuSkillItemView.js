
/**
Constructor
Do not call Function in Constructor.
*/
function DuSkillItemView()
{
	AView.call(this);
	this.itemIndex = null;
	this.detailUserView = null;
	//TODO:edit here

}
afc.extendsClass(DuSkillItemView, AView);


DuSkillItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

DuSkillItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	// detailUserView 뷰
	this.detailUserView = this.getContainer().getView();
	//TODO:edit here

};

DuSkillItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

// addItem으로 넘어온 데이터를 아이템에 세팅
DuSkillItemView.prototype.setData = function(data)
{
	this.skill_name.setText(data.name);
	this.skill_grade.setText(data.grade);
};

// 삭제 버튼 클릭시 함수
DuSkillItemView.prototype.onSkillDelClick = function(comp, info, e)
{
	// 보유 기술 count 변환 함수
	this.listCountChange();
	
	// 아이템 삭제 함수
	this.itemIndexDelete();
};

// 아이템 삭제 함수
DuSkillItemView.prototype.itemIndexDelete = function()
{
	//TODO:edit here
	// data 객체에서 객체의 index를 얻어옴
	this.itemIndex = this._item.itemData.index;
	console.log("itemIndex", this.itemIndex);
	
	// DetailUserView에 skillArr 배열 객체의 index값과 넘어온 객체 index의 값이 일치하는 index를 찾아 idx변수에 저장
	// listitem을 선택했을 때 보다 정확한 아이템 index를 찾기 위한 작업 
	// (임의로 세팅한 고정 index 값이라 아이템을 삭제하면 유동적으로 인덱스가 바뀌므로 정확한 인덱스를 찾기 위한 추가 과정)
	var idx = this.detailUserView.skillArr.findIndex((item, idx) => 
	{
		if(item.index === this.itemIndex) return idx;
	});
	
	// 위에서 보다 정확한 idx를 찾아 skillArr 배열에서 splice를 이용해 삭제 한다
	this.detailUserView.skillArr.filter(item => 
	{
		if(item.index === this.itemIndex) this.detailUserView.skillArr.splice(idx, 1);
	});
	
	// 선택된 아이템을 listview에서 삭제  
	this.owner.removeItem(this._item);
};


DuSkillItemView.prototype.listCountChange = function()
{
	//TODO:edit here
	// skill_count의 컴포넌트 값을 가져와서 - 1을 하여 delete버튼 클릭시 하나씩 줄게 한다
	var countView = this.detailUserView.skill_count;
	
	countView.setText(this.detailUserView.skill_list.getItemCount() - 1);
};
