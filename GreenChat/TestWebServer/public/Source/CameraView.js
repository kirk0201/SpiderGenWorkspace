
/**
Constructor
Do not call Function in Constructor.
*/
function CameraView()
{
	AView.call(this);
	
}
afc.extendsClass(CameraView, AView);

CameraView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	
	this.isExit = false;
	this.noCamera = false;
	this.isSolo = false;
	
	this.deviceIdArr = [];
	
	this.mode = 'ID';
	
	/*if(!afc.isIos)
		this.$myVideo =$('<video autoplay  muted="muted" />');
	else
		this.$myVideo =$('<video autoplay playsinline muted="muted" />');
		
	//width:100% height 100% object-fit:cover 시 풀화면
	this.$myVideo.css({
	'position' :'absolute' , left:'0px' , top:'0px',
	'object-fit':'cover', width:'100%',height:'100%'
					  });

	this.$ele.prepend(this.$myVideo);*/
		
	this.mainCanvas = document.createElement('canvas');
	
	//if(theApp.roomView.userList.getItemCount() <=1) this.isSolo = true; //테스트용(채팅방에 아무도없을때)
	
};

CameraView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	this.data = this.getContainer().getData();
	this.mode = this.data.mode;

	this.setCameraLayout();
	
	
	this.oriViewEle = this.data.oriViewEle; //$(theApp.roomView.userList.getFirstItem()).find('div')[1]; //다시 돌아가야할 뷰
	
	//this.$video = $(this.oriViewEle).find('video'); //화상상담에있는 리스트뷰 비디오태그
	
	this.$video = this.data.$video;
	this.$video.css({'object-fit':'cover', width:'100%',height:'100%'});
	
	this.$ele.prepend(this.$video);
	
	if(!theApp.isAgent)
	{
		this.doSwitchCamera();
	}

};

CameraView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	
};

CameraView.prototype.doSwitchCamera = function()
{

	var self =this;
	var num = 0;
	
	
	navigator.mediaDevices.enumerateDevices() //가능한 back 카메라 정보얻기
	.then(function(deviceInfos){
	
	console.log(deviceInfos);

		for(var i =0; i<deviceInfos.length; i++)
		{	
			var deviceInfo = deviceInfos[i];
			if(deviceInfo.kind == 'videoinput')
			{	
				var name = deviceInfo.label.split(', ')[1];
				
				if(name == 'facing back')
				{
					num++;
					self.CameraDropBox.addItem('후면카메라'+num, deviceInfo.deviceId);
					self.deviceIdArr.push(deviceInfo.deviceId);
				}
				else self.frontCameraId = deviceInfo.deviceId;
			}
		}

		self.CameraDropBox.selectItem(0);
		
		
		self.switchCamera('back' , self.CameraDropBox.getSelectedItem().data, function(result)
		{ 
			console.log('카메라 전환됨');
		});
		
	})
	.catch(function(e){

		console.log('카메라 정보 얻기 실패');
		self.noCamera=true;
	});
    

};


CameraView.prototype.setCameraLayout = function()
{
	//grid 센터 크기설정
	
	var rect = this.GridLayout.getCell(1, 1).getBoundingClientRect(),
	 text = '';

	switch(this.mode)
	{
	   case 'ID':
	 	  	this.SubView.$ele.css('border','2px solid white');
			this.GridLayout.setRowSize(1,this.getWidth()*0.54);
			this.GridLayout.getColGroupItem(1)[0].width=this.getWidth()*0.86 + 'px';
			text = '신분증';
	   		break;
	   case 'SEAL':
	   		this.SubView.$ele.css('border','2px solid white');
			this.GridLayout.setRowSize(1,'20%');
			var w = this.getHeight()*0.22;
			this.GridLayout.getColGroupItem(1)[0].width= w + 'px';
			text = '인감';
		    break;
	   case 'DOC':
	   		this.GridLayout.hide();
			this.HeadView.$ele.css('background-color', 'rgba(0, 0, 0, 0.3)');
			this.BottomView.$ele.css('background-color', 'rgba(0, 0, 0, 0.3)');
			text = '';
	  		break;
	}
	
	if(text.length>1)
		this.CenterLabel.setText('네모 영역에 ' + text + '을 맞춰서 촬영해주세요.');
	else
		this.CenterLabel.setText(text);
		
	this.HeadLabel.setText(text + ' 촬영');

};

CameraView.prototype.onCloseBtnClick = function(comp, info, e)
{		
	if(this.noCamera || this.isSolo){
		this.getContainer().close(false);
		return;
	}

	if(theApp.isAgent)
	{
		//SUtil.sendJSONMessage('syncCameraView',{func:'exitCamera',data:null});
		this.resetCamera();
		this.getContainer().close();
	}
	
	if(!theApp.isAgent)
		this.exitCamera(null);
};
/*
var imageCapture;

navigator.mediaDevices.getUserMedia({video: true})
.then(mediaStream => {
  document.querySelector('video').srcObject = mediaStream;

  const track = mediaStream.getVideoTracks()[0];
  imageCapture = new ImageCapture(track);

  return imageCapture.getPhotoCapabilities();
})
*/
CameraView.prototype.snapShot = function()
{
	if(theApp.isAgent) return;
	
	if(!theApp.isAgent && this.noCamera) //테스트할때 씀
	{
		this.getContainer().close(true);
		return;
	}

	this.$video[0].pause();
		
	var mainCtx = this.mainCanvas.getContext('2d');
	
	//비디오 크기
	var originW = this.$video[0].videoWidth;
	var originH =  this.$video[0].videoHeight;
	
	//object-fit:cover를 적용시켰기에 비디오 태그 비율이 가로 세로중 더 넓은쪽으로 적용됨
	//작은쪽은 화면에서 짤린다
	var ratio = 1;
	var ratioW = this.getWidth() / originW;
	var ratioH = this.getHeight() / originH;
	
	if(ratioW < ratioH)	
		ratio = ratioH;
	else 
		ratio = ratioW;
	
	//현재 계산된 비율
	var newWidth = originW * ratio;
	var newHeight = originH * ratio;
	
	//짤린 영역의 총 길이
	var offsetX = ((newWidth - this.getWidth()));
	var offsetY = ((newHeight - this.getHeight()));
	
	this.mainCanvas.width = originW ;
	this.mainCanvas.height = originH ;
	
	mainCtx.drawImage(this.$video[0], 0, 0 ,originW, originH, 0, 0, newWidth, newHeight);
	
	//핸드폰 화면에 들어온 영역만큼 보여지게함
	var imageData = mainCtx.getImageData(offsetX/2, offsetY/2, newWidth - (offsetX/2), newHeight - (offsetY/2));
	
	this.mainCanvas.width = this.getWidth();
	this.mainCanvas.height = this.getHeight();
	
	mainCtx.putImageData(imageData, 0, 0);
	
	var url = null;
	var swapCanvas = document.createElement('canvas');
	var swapCtx = swapCanvas.getContext('2d');
	
	var left = this.SubView.getPos().left, top = this.SubView.getPos().top,
		 width = this.SubView.getWidth() , height = this.SubView.getHeight();
		 
	if(this.mode == 'ID' || this.mode == 'SEAL') //OCR이 크기가 커야 인식된다고해서 늘려줌
	{
		var scale = 1;
		
		if(this.mode == 'ID')
		 	scale = 5.2;
	
		swapCanvas.width = width * scale;
		swapCanvas.height = height *scale;
		
		swapCtx.drawImage(mainCtx.canvas, left, top, width, height, 0, 0, swapCanvas.width, swapCanvas.height);
	
		url = swapCanvas.toDataURL('image/jpeg').split(',')[1];
		
	}
	else
		url = this.mainCanvas.toDataURL('image/jpeg').split(',')[1];
		
	this.exitCamera(url);
};

CameraView.prototype.onSnapShotBtnClick = function(comp, info, e)
{
	if(this.isExit)	return;
	
	if(this.noCamera ||  this.isSolo){ //카메라가없으면
		this.getContainer().close(true);
		return;
	}
	else if(theApp.isAgent)
		SUtil.sendJSONMessage('syncCameraView',{func:'snapShot',data:null});

	else if(!theApp.isAgent)
		this.snapShot();
	
};

CameraView.prototype.onCameraDropBoxSelect = function(comp, info, e)
{
	this.switchCamera('back' , this.CameraDropBox.getSelectedItem().data,null);
};

CameraView.prototype.exitCamera = function(url) //촬영하거나 뒤로갈때 처리
{
	if(!theApp.isAgent && this.noCamera) //테스트 할때씀
			this.getContainer().close(false);
				
	if(this.isExit) return; //종료요청을 하고잇을때 버튼을 막기위함
	this.isExit=true;
	
	var self = this;

	this.switchCamera('front', this.frontCameraId, function(result){
		if(result=='success')
		{	
			console.log('스위칭 성공');
			
			self.resetCamera();
			
			
			if(url){
			self.getContainer().close(true , url);
			}	
			else {
			self.getContainer().close(false);
			console.log('컨테이너 닫음');
			}
	
		}
		else console.log('카메라 전환 실패');
	});
};

CameraView.prototype.resetCamera = function()
{
	this.$video[0].style.removeProperty('object-fit');
	this.$video[0].style.removeProperty('width');
	this.$video[0].style.removeProperty('height');
			
	$(this.oriViewEle).append(this.$video);
};

CameraView.prototype.switchCamera = function(mode, deviceId, callback) //mode : front or back
{
	//테스트용, 채팅방에 혼자일때 가능함
	if(mode == 'back' && theApp.isAgent) return; 
	
	var id = theApp.userInfo.userId;
	var pc = theApp.webRtcPeers[id].peerConnection;
	var streams = pc.getLocalStreams();
	
	var constraints = null;
	var self = this;
	
	if(streams.length<=0) // 화상캠 정보가 없음
		return;
		
		//이걸 호출하지 않으면 getUserMedia 에서 오류남.
		streams[0].getVideoTracks().forEach(function(track){
		 	track.stop();
		});
		
		
		var mediaInfo = 
		{
			video: 
			{
				deviceId: { exact: deviceId }
			}
		};

		navigator.getUserMedia(mediaInfo,
		function(stream)
		{
			var videoTrack = stream.getVideoTracks()[0];
			
			var sender = pc.getSenders().find(function(s)
			{
				return s.track.kind == videoTrack.kind;
			});
			
			
			//focusmode : 포커싱 기능? focusDistance가 추가적으로있음 max는 3
			//zoom : 줌 기능 min 1 max 4 , step 0.1
			//torch : 조명 기능
			/*
			videoTrack.applyConstraints(
			{
				advanced: [
						//{whiteBalanceMode:'manual',colorTemperature:5200 },
						//{torch: false}
					  ]
			})
			.then(function()
			{
				console.log('====stream Settings====');
				console.log(videoTrack.getSettings()); //현재 세팅 정보
				console.log('====stream Capabilities====');
				console.log(videoTrack.getCapabilities()); //사용가능한 Constraints 범위
			})
			.catch(function(e){	console.log('apply fail!');});
			*/
			
			sender.replaceTrack(videoTrack);
			
			streams[0].removeTrack(streams[0].getVideoTracks()[0]);
			streams[0].addTrack(videoTrack);
			
			//self.$video[0].srcObject = stream;
			
			if(!theApp.isAgent && mode == 'back')
			{
				//SUtil.sendJSONMessage('syncCameraView',{func:'setCameraView',data:{deviceIdArr:self.deviceIdArr, 
				//index:self.CameraDropBox.getSelectedIndex()}});
			}
			
			if(callback) callback('success');

		},
		
		function(err)
		{
			console.log(err);
			console.log('카메라를 열수없음');
		});
};

CameraView.prototype.setCameraView = function(data)
{
	var clientStream = 	theApp.webRtcPeers[theApp.loginMgr.clientUserId]
															.peerConnection.getRemoteStreams()[0];
	this.$video[0].srcObject =clientStream;
			
	this.CameraDropBox.removeAll();
	
	var num = 0;
			
	for(var i = 0; i<data.deviceIdArr.length; i ++)
	{
		num = i+1;
		this.CameraDropBox.addItem('후면카메라'+num,data.deviceIdArr[i]);
	}
			
	this.CameraDropBox.selectItem(data.index);
};
