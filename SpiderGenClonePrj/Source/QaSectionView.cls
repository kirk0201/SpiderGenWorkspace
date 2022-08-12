
/**
Constructor
Do not call Function in Constructor.
*/
class QaSectionView()
{
	super();
	//TODO:edit here

}
extends AView;


function QaSectionView*init(context, evtListener)
{
	super.init(context, evtListener);
	//TODO:edit here
	this.qaListItem = 
	[
		{
			img: 'Assets/Community/Qa/profile1.png', 
			title: '솔루션 내 html 처리 관련 문의 드립니다.',
			name: '신에이',
			date: '2022/08/04',
			reply: 0,
			view: 4,
			recom: 0
		},
		{
			img: 'Assets/Community/Qa/profile1.png', 
			title: 'Mask 처리 함수에 대해서 문의 합니다.',
			name: '야곱',
			date: '2022/07/07',
			reply: 0,
			view: 12,
			recom: 0
		},
		{
			img: 'Assets/Community/Qa/profile1.png', 
			title: '컴포넌트 중에 fileuploader가 있어요. 그걸 사용하려고 하는데 방법을 모르겠네요.',
			name: '야곱',
			date: '2022/07/03',
			reply: 1,
			view: 35,
			recom: 0
		},
		{
			img: 'Assets/Community/Qa/profile1.png', 
			title: '텍스트필드 내에서 커서 맨뒤로 이동 문의',
			name: '전교일등',
			date: '2022/01/28',
			reply: 4,
			view: 104,
			recom: 0
		},
	];
};

function QaSectionView*onInitDone()
{
	
	super.onInitDone();
// 	var history = new HistoryManager();
	
	this.qaList.addItem('Source/ContainerViews/CommunityTabView/CommunitySectionView/QaSectionView/ListItems/QaItemVIew.lay', this.qaListItem);
	//TODO:edit here
// 			this.communityTab.clearSelectTab();
// 		console.log('history', history);
/*	var navi = ANavigator.find('communitySectionView');
	console.log("navi",navi);*/


};

function QaSectionView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	//TODO:edit here

};
function QaSectionView*onDeactiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	//TODO:edit here

};


function QaSectionView*onAButtonClick(comp, info, e)
{
	this.owner.goPrevSelect();
	//TODO:edit here

};
