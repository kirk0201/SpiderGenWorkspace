
/**
Constructor
Do not call Function in Constructor.
*/
function MainSectionView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainSectionView, AView);


MainSectionView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainSectionView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	var listViewUrlArr = [
		'Source/ContainerViews/MainSectionView/HomeView/HomeView.lay',
		'Source/ContainerViews/MainSectionView/CenterNavView/CenterNavView.lay',
		'Source/ContainerViews/MainSectionView/DetailView/DetailView.lay',
		'Source/ContainerViews/MainSectionView/DetailView2/DetailView2.lay',
		'Source/ContainerViews/MainSectionView/SlideView/SlideView.lay',
		'Source/ContainerViews/MainSectionView/DetailView3/DetailView3.lay',
	];
	
	this.mainSection.addItems(listViewUrlArr, []);
};

MainSectionView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
