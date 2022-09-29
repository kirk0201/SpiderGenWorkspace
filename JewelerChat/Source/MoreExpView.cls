
/**
Constructor
Do not call Function in Constructor.
*/
class MoreExpView()
{
	super();

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
	console.log(this.in_company.getDate());
	console.log(this.out_company.getDate());
};

function MoreExpView*onIsCheck(comp, info, e)
{
	let isClicked = this.is_job.getCheck();
	
	console.log(isClicked ? this.is_job.setValue(1) : this.is_job.setValue(0));
	
	/*console.log(comp);
	console.log(info);
	console.log(this.is_job.getCheck());*/
	
};
