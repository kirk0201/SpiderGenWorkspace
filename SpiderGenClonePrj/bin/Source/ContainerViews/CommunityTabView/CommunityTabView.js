
/**
Constructor
Do not call Function in Constructor.
*/
function CommunityTabView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(CommunityTabView, AView);


CommunityTabView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	
	//TODO:edit here

};

CommunityTabView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
/*	var container = this.communityTab.loadContainer(null);
	var navi = new ANavigator('navi', container);
	
	navi.registerPage('Source/ContainerViews/CommunitySectionView/CommunitySectionView.lay','communitySectionView');
	navi.registerPage('Source/ContainerViews/CommunitySectionView/CommunitySectionView/QaSectionView/QaSectionView.lay', 'qaSectionView');
	
	navi.goPage('communitySectionView');*/
/*	var communityListUrl =
	[
		'Source/ContainerViews/CommunitySectionView/CommunitySectionView.lay',
	]
	//TODO:edit here
	this.communityTab.add*/
};

CommunityTabView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
