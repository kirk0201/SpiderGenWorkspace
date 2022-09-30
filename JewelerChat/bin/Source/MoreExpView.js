
/**
Constructor
Do not call Function in Constructor.
*/
function MoreExpView()
{
	AView.call(this);
	this.expObj = {};
	//TODO:edit here

}
afc.extendsClass(MoreExpView, AView);


MoreExpView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here
};	
/** 공통 함수 사용
Util.addList(undefined, (cb)=>{
 console.log("Util.addList", cb, 'sdwwe');
});

Define.testFunction();

*/

MoreExpView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	console.log(this.in_company.getDate());
	console.log(this.out_company.getDate());
	//TODO:edit here

};

MoreExpView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MoreExpView.prototype.onNextBtnClick = function(comp, info, e)
{
	var name = this.tf_name.getText();
	var isCheck = this.onIsCheckClick();
	var inCompany = this.in_company.getDate();
	var outCompany = this.out_company.getDate();
	var content = this.exp_content.getText();
	
	this.expObj = 
	{
		name,
		isCheck,
		inCompany,
		outCompany,
		content
	};
	
	console.log(this.expObj);
};

MoreExpView.prototype.onIsCheckClick = function(comp, info, e)
{
	let isClicked = this.is_job.getCheck();
	
	if (isClicked) this.is_job.setValue(1);
	else this.is_job.setValue(0);
	
	return this.is_job.getValue();
};

MoreExpView.prototype.onSkipBtnClick = function(comp, info, e)
{
	theApp.navi.goPage("MoreDetailView");
};
