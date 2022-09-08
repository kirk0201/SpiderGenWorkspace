
/**
Constructor
Do not call Function in Constructor.
*/
function AdmConsultView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(AdmConsultView, AView);


AdmConsultView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);


	this.tData = this.getContainer().getData();
	
	
	if(!this.tData)
	{
		AToast.show('데이터가 전달되지 않았습니다.');
		this.getContainer().close();
		return;
	}
	
	
	this.tabview.addTab('상담내역', 'Source/admin/AmdConsultList.lay', 'cList', this.tData);	
	this.tabview.addTab('녹화/녹음', 'Source/admin/AdmConsultVideo.lay', 'cVideo', this.tData);
	this.tabview.addTab('채팅내역', 'Source/admin/AdmConsultChat.lay', 'cChat', this.tData);
		
	this.grid.setCellText(0,0, this.tData[0]); //"roomKey"
	this.grid.setCellText(0,1, this.tData[1]); //"roomTitle"
	this.grid.setCellText(0,5, this.tData[4]); //"regDate"
	
	this.grid.setCellText(1,1, this.tData[2]); //"hostUser" 
	this.grid.setCellText(1,3, this.tData[3]); //"userId" 
	this.grid.setCellText(1,5, this.tData[5]); //"sTime" 
	this.grid.setCellText(1,6, this.tData[6]); //"eTime" 
	
	
	this.tabview.selectTabById('cList');
	
};

AdmConsultView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

AdmConsultView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	



		

};

AdmConsultView.prototype.onBtnCloseClick = function(comp, info, e)
{

	this.getContainer().close();

};
