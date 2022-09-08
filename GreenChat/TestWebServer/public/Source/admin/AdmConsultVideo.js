
/**
Constructor
Do not call Function in Constructor.
*/
function AdmConsultVideo()
{
	AView.call(this);

	

}
afc.extendsClass(AdmConsultVideo, AView);


AdmConsultVideo.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	
};

AdmConsultVideo.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	this.tData = this.getTabData();
	
	this.sendData();
	
};


AdmConsultVideo.prototype.onActive = function(isFirst)
{
	AView.prototype.onActive.call(this, isFirst);
	
	
	
	
};


AdmConsultVideo.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

};

AdmConsultVideo.prototype.onDeactiveDone = function()
{	
	$('video').each(function(){
		$(this)[0].pause();
	});
	
};



AdmConsultVideo.prototype.sendData = function()
{


	theApp.qmChat.sendProcessByName('tr9003', this.getContainerId(), null, 	
	(queryData) =>
	{
		var blockData = queryData.getBlockData('InBlock1')[0];
		
		blockData.roomKey = this.tData[0];
			
	}, 	
	(queryData) =>
	{
		queryData.printQueryData();
		
		if(!queryData) return;
		
		var dataArr = queryData.getBlockData('OutBlock1');
		
		if(!dataArr || dataArr.length < 1) return;
		
		dataArr.forEach((item)=>{
			this.makeVideo(item.file);
		});
		
	});
	
	
};


AdmConsultVideo.prototype.makeVideo = function(fname)
{
	
	let $video = $('<video playsinline controls ></video>');
	$video.attr({		
		src : fname
	})
	.css({
		width : '100%',		
		maxWidth : '500px',
		height : 'auto',
		margin : '0px auto 20px auto',
		position : 'relative',
		display : 'block'
	});
	
		
	this.vArea.$ele.append($video);
	
};




AdmConsultVideo.prototype.onGridSelect = function(comp, info, e)
{

	var cell = info[0];
	
	if(cell.isHeader) return;
	
	//파라미터로 넘어온 cell 의 row, column 정보를 배열로 리턴한다. -> [row, col]
	var audio = this.$audio[0],
		pos = comp.indexOfCell(info),
		fileName = comp.getCellText(pos[0], pos[0]);

console.log(fileName);	
	
	audio.pause();
	audio.src = fileName;
	audio.play();
	

};
