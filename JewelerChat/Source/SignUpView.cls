
/**
Constructor
Do not call Function in Constructor.
*/
class SignUpView()
{
	super();

	//TODO:edit here

}
extends AView;


function SignUpView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SignUpView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function SignUpView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function SignUpView*onSignUpBtnClick(comp, info, e)
{

	//TODO:edit here
	theApp.qmChat.sendProcessByName("signUp", this.getContainerId(), null, 	
	(queryData) => {
		queryData.printQueryData();		
	}, 	
	(queryData) => {
		queryData.printQueryData();
		
				
		var blockData = queryData.getBlockData('OutBlock1');
		console.log(blockData);
		
	});

};
