
/**
Constructor
Do not call Function in Constructor.
*/
function VideoItemView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(VideoItemView, AView);


VideoItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	
	this.camOn.hide();

	this.$video = $('<video playsinline autoplay="autoplay" width="100%" height="100%"></video>');
	
	this.videoView.$ele.append(this.$video);
};

VideoItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	if(this.isPresenter)
	{
		this.camOn.setValue(true);
		this.recordBtn.show();
		this.muteChk.hide();
	}
	else
	{
		this.recordBtn.hide();
		this.muteChk.show();
	}
	
	/*
	var thisObj = this;
    this.videoView.$ele.resizable(
    {
        handles: 'all',
        resize: function(event, ui)
        {
            //ui.size.height = Math.round( ui.size.height / 30 ) * 30;
            
        }
    });
	*/
    	
};

VideoItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

VideoItemView.prototype.setData = function(data)
{
	this.data = data;
	
	this.userName.setText(data.userName);
	
	
	//console.log(theApp.userInfo.userId);
	//console.log(data.userId);
	
	this.isPresenter = (theApp.userInfo.userId==data.userId);
	
	this.webRtcProcess(this.$video[0], data.userId, this.isPresenter);
};

VideoItemView.prototype.webRtcProcess = function(videoEle, userId, isPresenter)
{
	var thisObj = this, options = null;
	
	var constraints = 
	{
		audio : true,
		video : 
		{
			mandatory : 
			{
				maxWidth : 320,
				maxFrameRate : 15,
				minFrameRate : 15
			}
		}
	};
	
	//송신자
	if(isPresenter)
	{
		options = 
		{
			localVideo: videoEle,
			mediaConstraints: constraints,
			onicecandidate : onIceCandidate,
			//sendSource: 'screen'
		};

		theApp.webRtcPeers[userId] = kurentoUtils.WebRtcPeer.WebRtcPeerSendonly(options, function(error) 
		{
			if(error) return onError(error);

			this.generateOffer(onOffer);

			if(thisObj.isPresenter) thisObj.camOn.show();
		});	
	}
	
	//화상 수신자
	else
	{
		options = 
		{
			remoteVideo: videoEle,
			onicecandidate : onIceCandidate
		};

		theApp.webRtcPeers[userId] = kurentoUtils.WebRtcPeer.WebRtcPeerRecvonly(options, function(error) 
		{
			if(error) return onError(error);

			this.generateOffer(onOffer);
		});	
	}
	
		
	function onIceCandidate(candidate) 
	{
		//console.log('Local candidate' + JSON.stringify(candidate));
		/*
		//오류 임시 처리, 턴서버가 프록시 되어 있으면 폰등에서 접속이 안됨
		var tmp = JSON.stringify(candidate);
		tmp = tmp.replace(new RegExp('192.168.0.202', 'g'), '14.36.124.191');
		candidate = JSON.parse(tmp);
		*/
		

	   	var message = 
	   	{
			JSON: true,
	   		id: 'onIceCandidate',
			userId: userId,
	      	candidate : candidate
	   	};
	   
	   	theApp.qmChat.sendMessage(message);
	}

	function onOffer(error, offerSdp) 
	{
		if(error) return onError(error);

		console.info('Invoking SDP offer callback function ' + location.host);
		
		var message = 
		{
			JSON: true,
			id: 'offer',
			userId: userId,
			sdpOffer : offerSdp
		};
		
		theApp.qmChat.sendMessage(message);
	}
	
	function onError(error) 
	{
		console.error(error);
	}
	
};

VideoItemView.prototype.joinViewer = function()
{
	this.webRtcProcess(this.$video[0], this.data.userId, false);
};

VideoItemView.prototype.onCamOnChange = function(comp, info, e)
{
	var val = comp.getValue();
	
	//화상 켜기
	if(val) 
	{
		this.recordBtn.show();
	
		this.webRtcProcess(this.$video[0], this.data.userId, this.isPresenter);
	}

	//화상 끄기
	else 
	{
		if(this.recordBtn.getText()=='녹화중지') this.onRecordBtnClick(this.recordBtn);
		this.recordBtn.hide();
	
		var message = 
		{
			JSON: true,
			id: 'stop',
			userId: this.data.userId
		};

		theApp.qmChat.sendMessage(message);	

		//TODO:edit here

		theApp.disposeRtc(this.data.userId);	
	}
	

};

//음소거
VideoItemView.prototype.onMuteChkClick = function(comp, info, e)
{
	if(comp.getCheck())
	{
		this.oldVolume = this.$video[0].volume;
		this.$video[0].volume = 0.0;
	}
	else
	{
		this.$video[0].volume = this.oldVolume;
	}

};

//녹화하기 버튼
VideoItemView.prototype.onRecordBtnClick = function(comp, info, e)
{
	var thisObj = this, blockData;
	
	
	theApp.qmChat.sendProcessByName('tr0008', this.getContainerId(), null, 
	
	function(queryData)
	{
		blockData = queryData.getBlockData('InBlock1')[0];
		
		if(comp.getText()=='녹화시작') 
		{
			blockData.type = 1;
		}
		else 
		{
			blockData.type = 0;
		}
	}, 
	
	function(queryData)
	{
		queryData.printQueryData();
		
		if(comp.getText()=='녹화중지') 
		{
			comp.setText('녹화시작');
		
			blockData = queryData.getBlockData('OutBlock1')[0];
			
			if(blockData.result)
			{
				AfcMessageBox('알림', 'OK 버튼을 누르시면 녹화 파일이 재생됩니다.', AMessageBox.OK_CANCEL, function(result)
				{
					if(result==0) window.open(blockData.result);
				});
			}
		}
		else
		{
			comp.setText('녹화중지');
			
			blockData = queryData.getBlockData('OutBlock1')[0];
			
			if(blockData.result)
			{
				AfcMessageBox('알림', '음성 녹화가 시작되었습니다.');
			}
		}
	});

};

VideoItemView.prototype.onMoveBtnClick = async function(comp, info, e)
{
	var offset = this.videoView.$ele.offset(); 

/*
	var wnd = new AFrameWnd();
	wnd.open(null, null, offset.left, offset.top, 310, 210);
	wnd.setTitleText('이동 및 리사이즈 가능');
	
	var view = new AView();
	view.init();
	view.setSize('100%', '100%');
	wnd.setView(view);
	
	this.videoView.setPos(0,0);
	this.videoView.setSize('100%', '100%');
	view.addComponent(this.videoView);
	
	var thisObj = this;
	wnd.onClose = function()
	{
		thisObj.videoView.setPos(100,10);
		thisObj.videoView.setSize(310, 180);
		thisObj.addComponent(thisObj.videoView);
	};
*/

	var wnd = new AWindow();
	wnd.setOption(
	{
		isModal: false,				//윈도우 모달/모달리스 여부, 위에 설명 참조.
		dragHandle: null,			//드래가 핸들이 될 클래스명이나 아이디, .windowHandle or #windowHandle
		isResizable: true,			//윈도우 창을 리사이즈 가능하게 할지
		isDraggable: true,			//윈도우 창을 드래그로 움직이게 할지
	});	
	
	await wnd.open('Source/MoveCam.lay', this.getContainer(), offset.left, offset.top-50, 310, 250);
	//wnd.setTitleText('이동 및 리사이즈 가능');
	
	this.videoView.setPos(0,0);
	this.videoView.setSize('100%', '100%');
	wnd.view.camView.addComponent(this.videoView);
	
	var thisObj = this;
	wnd.onClose = function()
	{
		thisObj.videoView.setPos(100,10);
		thisObj.videoView.setSize(310, 180);
		thisObj.addComponent(thisObj.videoView);
	};




};
