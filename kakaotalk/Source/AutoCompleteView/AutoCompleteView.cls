
/**
Constructor
Do not call Function in Constructor.
*/
class AutoCompleteView()
{
	super();

	//TODO:edit here

}
extends AView;


function AutoCompleteView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function AutoCompleteView*onInitDone()
{
	super.onInitDone();
	
	// userEmail Mock Data
	this.data =
	[
		{'userEmail':'kirk0201@naver.com'},
		{'userEmail':'mine6546@gmail.com'},
		{'userEmail':'gallove@daum.net'},
		{'userEmail':'skylove@nate.com'}
	];
	this.autoCompleteList.addItem('Source/AutoCompleteView/AutoItemView/AutoItemView.lay', this.data);
// 	this.autoCompleteList.addItems('Source/AutoCompleteView/AutoItemView/AutoItemView.lay', this.data);
};

function AutoCompleteView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function AutoCompleteView*filterData(text)
{
	this.autoCompleteList.removeAllItems();
	var data = this.data.filter(function(item)
	{
		return (item.userEmail.indexOf(text)> -1);
	});
	
	this.autoCompleteList.addItem('Source/AutoCompleteView/AutoItemView/AutoItemView.lay', data);
};