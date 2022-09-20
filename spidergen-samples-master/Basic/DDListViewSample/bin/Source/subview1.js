
/**
Constructor
Do not call Function in Constructor.
*/
function subview1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(subview1, AView);


subview1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

subview1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.msgLbl.setText(this._item.itemData + ' : Hello~');

};

subview1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

subview1.prototype.onALabel1ActionDown = function(comp, info, e)
{
	this.owner.changeDragState(this, e);

};

subview1.prototype.onDelBtnClick = function(comp, info, e)
{
	var mainView = this.owner.getRootView();
	
	//왼쪽 리스트 뷰로 이동
	mainView.listView.itemInsertManage(this._item);

};
