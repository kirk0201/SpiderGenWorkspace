
/**
Constructor
Do not call Function in Constructor.
*/
class DuJobItemView()
{
	super();

	//TODO:edit here

}
extends AView;


function DuJobItemView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function DuJobItemView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function DuJobItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function DuJobItemView*setData(data)
{

	//TODO:edit here
	this.job_num.setText(data);
};

function DuJobItemView*onCoverButtonClick(comp, info, e)
{

	//TODO:edit here
	console.log("owner",this.owner.getRootView());

	const wnd = new AWindow('DetailUserAccView');
// 	wnd.setData({id:'aaaa'});
	wnd.setData("data");
	wnd.setResultCallback((result, data) => {
		var jobIdx = this.owner.indexOfItem(this._item);
		this.owner.getRootView().jobList[jobIdx] = data.name;
		this.tf_job.setText(data.name);
		
		console.log("선택 직무 리스트",this.owner.getRootView().jobList);
	});
	wnd.openFull('Source/Layout/DetailUserAccView.lay', this.getContainer());
};

