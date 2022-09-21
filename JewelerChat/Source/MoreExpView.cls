
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
	
Util.addList(undefined, (cb)=>{
 console.log("Util.addList", cb, 'sdwwe');
});

Define.testFunction();
};

function MoreExpView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function MoreExpView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
