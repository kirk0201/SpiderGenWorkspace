
/**
Constructor
Do not call Function in Constructor.
*/
function DuJobItemView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(DuJobItemView, AView);


DuJobItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

DuJobItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

DuJobItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

DuJobItemView.prototype.setData = function(data)
{

	//TODO:edit here
	this.job_num.setText(data);
};

DuJobItemView.prototype.onCoverButtonClick = function(comp, info, e)
{

	//TODO:edit here
	console.log("owner",this.owner.getRootView());

	const wnd = new AWindow('DetailUserAccView');
	wnd.setData({id:'aaaa'});
	wnd.setResultCallback((result, data) => {
		var jobIdx = this.owner.indexOfItem(this._item);
		this.owner.getRootView().jobList[jobIdx] = data.name;
		this.tf_job.setText(data.name);
		
		console.log("선택 직무 리스트",this.owner.getRootView().jobList);
	});
	wnd.openFull('Source/Layout/DetailUserAccView.lay', this.getContainer());
};

