
/**
Constructor
Do not call Function in Constructor.
*/
function AutoCompleteView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(AutoCompleteView, AView);


AutoCompleteView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

AutoCompleteView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
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

AutoCompleteView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

AutoCompleteView.prototype.filterData = function(text)
{
	this.autoCompleteList.removeAllItems();
	var data = this.data.filter(function(item)
	{
		return (item.userEmail.indexOf(text)> -1);
	});
	
	this.autoCompleteList.addItem('Source/AutoCompleteView/AutoItemView/AutoItemView.lay', data);
};