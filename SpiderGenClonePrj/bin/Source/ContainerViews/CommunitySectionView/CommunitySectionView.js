
/**
Constructor
Do not call Function in Constructor.
*/
function CommunitySectionView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(CommunitySectionView, AView);


CommunitySectionView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here
	this.listData1 = 
	[
		{
			img: 'Assets/Community/community_1.png', 
			title: '질의응답',
			content: '개발에 대해서 궁금한 무엇이든 물어보고 공유하세요.',
			post: 9,
			reply: 10,
			recom: 2
		},
		{
			img: 'Assets/Community/community_2.png',
			title: '오류제보',
			content: '당황하지 마시고 제보해주세요.',
			post: 5,
			reply: 4,
			recom: 4
		}
	];
	
	this.listData2 = 
	[
		{
			img: 'Assets/Community/community_3.png',
			title: '사용중 질문',
			content: '스파이더젠에 대해서 무엇이든 물어보세요.',
			post: 7,
			reply: 7,
			recom: 0
		},
		{
			img: 'Assets/Community/community_4.png',
			title: '개선 아이디어',
			content: '반짝반짝 멋진 아이디어를 기다립니다.',
			post: 7,
			reply: 5,
			recom: 6
		}
	];
};

CommunitySectionView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here
	this.communityListView1.addItem('Source/ContainerViews/CommunitySectionView/ListItems/ListItemView.lay', this.listData1);
	this.communityListView2.addItem('Source/ContainerViews/CommunitySectionView/ListItems/ListItemView.lay', this.listData2);

};

CommunitySectionView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

CommunitySectionView.prototype.onCommunityListViewSelect = function(comp, info, e)
{
	console.log("?", comp);
	console.log("owner",this.owner);
/*	console.log(this.owner.aevent.acomp)
	this.owner.aevent.acomp.selectTabById(this.owner.aevent.acomp.compId)*/
	this.owner.selectTabById(this.qa);
// 	this.owner.clearSelectTab();
// 	this.owner
	//TODO:edit here

};
