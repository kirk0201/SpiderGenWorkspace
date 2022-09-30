
/**
Constructor
Do not call Function in Constructor.
*/
class MoreExpView()
{
	super();
	this.expObj = {};
	//TODO:edit here

}
extends AView;


function MoreExpView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here
};	
/** 공통 함수 사용
Util.addList(undefined, (cb)=>{
 console.log("Util.addList", cb, 'sdwwe');
});

Define.testFunction();

*/

function MoreExpView*onInitDone()
{
	super.onInitDone();
	console.log(this.in_company.getDate());
	console.log(this.out_company.getDate());
	//TODO:edit here

};

function MoreExpView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function MoreExpView*onNextBtnClick(comp, info, e)
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

function MoreExpView*onIsCheckClick(comp, info, e)
{
	let isClicked = this.is_job.getCheck();
	
	if (isClicked) this.is_job.setValue(1);
	else this.is_job.setValue(0);
	
	return this.is_job.getValue();
};

function MoreExpView*onSkipBtnClick(comp, info, e)
{
	theApp.navi.goPage("MoreDetailView");
};
