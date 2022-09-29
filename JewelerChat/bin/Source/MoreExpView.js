
/**
Constructor
Do not call Function in Constructor.
*/
function MoreExpView()
{
	AView.call(this);

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
	console.log(this.in_company.getDate());
	console.log(this.out_company.getDate());
};

MoreExpView.prototype.onIsCheck = function(comp, info, e)
{
	let isClicked = this.is_job.getCheck();
	
	console.log(isClicked ? this.is_job.setValue(1) : this.is_job.setValue(0));
	
	/*console.log(comp);
	console.log(info);
	console.log(this.is_job.getCheck());*/
	
};
