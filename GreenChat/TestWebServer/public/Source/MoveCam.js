
/**
Constructor
Do not call Function in Constructor.
*/
function MoveCam()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MoveCam, AView);


MoveCam.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MoveCam.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MoveCam.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MoveCam.prototype.onFullBtnClick = function(comp, info, e)
{
	if(this.oldInfo) 
	{
		this.fullBtn.setText('전체모드');
		this.restore();
	}
	else 
	{
		this.fullBtn.setText('창모드');
		this.maximize();
	}
};

MoveCam.prototype.onCloseBtnClick = function(comp, info, e)
{
	this.getContainer().close();
};

MoveCam.prototype.restore = function()
{
	if(!this.oldInfo) return;
	
	var cntr = this.getContainer();

	cntr.$ele.css(this.oldInfo);
	this.oldInfo = null;

	cntr.$ele.addClass('frm_border');
};

MoveCam.prototype.maximize = function()
{
	var cntr = this.getContainer();
	var pos = cntr.getPos();
	
	this.oldInfo = { left:pos.left+'px', top:pos.top+'px', width:cntr.getWidth()+'px', height:cntr.getHeight()+'px' };

	cntr.$ele.css( { left:'0px', top:'0px', width:'100%', height:'100%' });

	cntr.$ele.removeClass('frm_border');
};