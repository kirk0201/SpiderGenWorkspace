
/**
Constructor
Do not call Function in Constructor.
*/
class AutoItemView()
{
	super();

	//TODO:edit here

}
extends AView;


function AutoItemView*init(context, evtListener)
{
	super.init(context, evtListener);
	var data = this._item.itemData;
	console.log(data.userEmail);
	if(data.userEmail !== undefined)this.userEmail.setText(data.userEmail);
	//TODO:edit here

};

function AutoItemView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function AutoItemView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
