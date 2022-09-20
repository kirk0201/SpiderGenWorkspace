
/**
Constructor
Do not call Function in Constructor.
*/
class DetailUserView()
{
	super();
	this.skillArr = [];
	this.skillObj = {};
	this.itemIndex = 0;
	this.listCount = null;
	//TODO:edit here

}
extends AView;


function DetailUserView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here
	
};

function DetailUserView*onInitDone()
{
	super.onInitDone();

	this.job_skill_sb.addItem("초급", 0, "초급");
	this.job_skill_sb.addItem("중급", 1, "중급");
	this.job_skill_sb.addItem("고급", 2, "고급");
	//TODO:edit here

};

function DetailUserView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

// 보유 기술 버튼 클릭시 
function DetailUserView*onJob_skill_btnClick(comp, info, e)
{
	//TODO:edit here
	this.addSkillListItem();
};	

// 보유 기술 텍스트필드 Enter Keydown 입력시
function DetailUserView*onJob_skill_tfKeydown(comp, info, e)
{
	//TODO:edit here
	// Error 핸들링 할 것!
	if(e.keyCode == 13)
	{
		this.addSkillListItem();
	}
};

// listView 아이템 추가 함수
function DetailUserView*addSkillListItem()
{
	// Data 객체로 전달될 name, grade
	var nameValue = this.job_skill_tf.getText();
	var gradeValue = this.job_skill_sb.getData();
	
	// 할당된 값이 없을때 add하지 않는 조건
	// @@ 추가적인 오류 알림 핸들러 할 것
	if(nameValue !== "" && gradeValue !== "0")
	{
		// 기존 아이템을 삭제하여 중복되는 아이템을 방지
		console.log("job", this.job_skill_sb.getData());
		this.skill_list.removeAllItems();
	
		this.skillObj = 
		{
			name: nameValue,
			grade: gradeValue,
			index: 0 + this.listCount,
		};
		
		// 데이터는 배열로 넘기기 때문에 객체를 배열에 넣어서 보냄
		this.skillArr.push(this.skillObj);
		this.skill_list.addItem("Source/Layout/Items/DuSkillItemView.lay", this.skillArr);
		
		// Text필드 초기화
		this.job_skill_tf.setText("");

		// Select박스 초기화
		this.job_skill_sb.selectItem(0);
		
		// list아이템 개수 체크
		this.listCount = this.skill_list.getItemCount();
		
		// 스킬 개수 텍스트 설정
		this.skill_count.setText(this.listCount);
	}
};

function DetailUserView*onSelectSkillList(comp, info, e)
{

	//TODO:edit here
	console.log(e);
	console.log(comp);
	console.log(info);
	console.log("getItems", this.skill_list.getItems());
	var selectIndex = this.skill_list.indexOfItem(this.skill_list.getSelectItem());
	console.log("selectIndex", selectIndex);
};


