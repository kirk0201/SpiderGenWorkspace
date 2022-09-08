var kurento = require('kurento-client');

var kcm = module.exports =  
{
};

kcm.kurentoClient = null;
//kcm.ws_uri = 'ws://192.168.0.202:8888/kurento';
//kcm.ws_uri = 'ws://14.36.124.191:8888/kurento';
kcm.ws_uri = 'ws://121.190.229.204:8888/kurento';

kcm.save_loc = '/tmp/spidercob/';

kcm.candidatesQueue = {};

// Recover kurentoClient for the first time.
kcm._getKurentoClient = function(callback) 
{
    if (kcm.kurentoClient !== null) 
    {
        return callback(null, kcm.kurentoClient);
    }

    kurento(kcm.ws_uri, function(error, kc) 
    {
        if (error) 
        {
            console.log("Could not find media server at address " + kcm.ws_uri);
            return callback("Could not find media server at address" + kcm.ws_uri + ". Exiting with error " + error);
        }

        kcm.kurentoClient = kc;

        callback(null, kc);
    });
};

kcm.onIceCandidate = function(user, packet)
{
    var candidate = kurento.getComplexType('IceCandidate')(packet.candidate);
    var mediaPort = null;

    if(user.mpl)
    {
        //자기 자신
        if(user.id==packet.userId)
        {
            mediaPort = user.mpl.masterPort;
        }
        else 
        {
            mediaPort = user.mpl.connectedPorts[packet.userId];
        }
    }

    if(mediaPort)
    {
        console.info('Adding candidate : ' + packet.userId);

        mediaPort.webRtcEndpoint.addIceCandidate(candidate);
    }

    else 
    {
        console.info('Queueing candidate : ' + packet.userId);

        if(!kcm.candidatesQueue[packet.userId]) 
        {
            kcm.candidatesQueue[packet.userId] = [];
        }

        kcm.candidatesQueue[packet.userId].push(candidate);
    }
};

kcm.clearCandidatesQueue = function(userId) 
{
    if(kcm.candidatesQueue[userId]) 
    {
		delete kcm.candidatesQueue[userId];
	}
};


//-------------------------------------------------------------------
//  class MediaPipeline
//
kcm.MediaPipeline = function() 
{
    this.pipeline = null;
    this.masterPort = null;
    this.connectedPorts = {};

    this.recorderEndpoint = null;
};

kcm.MediaPipeline.prototype.createPipeline = function(masterUser, sdpOffer, callback) 
{
    kcm.clearCandidatesQueue(masterUser.id);

    masterUser.mpl = this;

    var thisObj = this;

    kcm._getKurentoClient(function(error, kurentoClient) 
    {
        if (error) 
        {
            return callback(error);
        }

        kurentoClient.create('MediaPipeline', function(error, pipeline) 
        {
            if (error) 
            {
                return callback(error);
            }

            thisObj.pipeline = pipeline;

            pipeline.create('WebRtcEndpoint', function(error, webRtcEndpoint) 
            {
                if (error) 
                {
                    //pipeline.release();
                    return callback(error);
                }

                thisObj.masterPort = new kcm.MediaPort(webRtcEndpoint, masterUser);
                thisObj.masterPort.open(sdpOffer, callback);
            });

        });
    });
};

//저장하기 sample
//https://stackoverflow.com/questions/27619477/kurento-recording-caller-and-callee-stream-in-node-js
//https://github.com/givo/kurento-recorderendpoint

//mediaProfile is 
//JPEG_VIDEO_ONLY, KURENTO_SPLIT_RECORDER, MP4, MP4_AUDIO_ONLY, MP4_VIDEO_ONLY, WEBM, WEBM_AUDIO_ONLY, WEBM_VIDEO_ONLY

kcm.MediaPipeline.prototype.startRecord = function(mediaProfile, roomKey, callback) 
{
    if(!this.masterPort) return;

    if(this.recorderEndpoint)
    {
        this.recorderEndpoint.stop();
        this.recorderEndpoint = null;
    }

    var thisObj = this;

    this.recordFileName = roomKey + '_' + (new Date()).getTime() +'.webm';

    this.pipeline.create('RecorderEndpoint', { 'uri': 'file://' + kcm.save_loc + this.recordFileName, 'mediaProfile': mediaProfile },

    function (error, recorderEndpoint) 
    {
        if (error) 
        {
			if(callback) callback(error);
            return;
        }

        thisObj.recorderEndpoint = recorderEndpoint;

        //webRtcEndpoint.connect(recorderEndpoint, 'AUDIO', function (err) 
        thisObj.masterPort.webRtcEndpoint.connect(recorderEndpoint, function (err) 
        {
            if (err) 
            {
                if(callback) callback(err);
                return;
            }
            else
            {
                recorderEndpoint.record();
                //console.log("recording started ...");

                if(callback) callback(null, recorderEndpoint);
            }
        });
    });

};

kcm.MediaPipeline.prototype.stopRecord = function() 
{
    if(this.recorderEndpoint)
    {
        this.recorderEndpoint.stop();
        this.recorderEndpoint = null;
    }
};

kcm.MediaPipeline.prototype.addMediaPort = function(user, sdpOffer, callback) 
{
    var mediaPort = this.connectedPorts[user.id];
    if(mediaPort) return;

    kcm.clearCandidatesQueue(user.id);

    var thisObj = this;

    thisObj.pipeline.create('WebRtcEndpoint', function(error, webRtcEndpoint) 
    {
        if (error) 
        {
			return callback(error);
        }

        var mediaPort = new kcm.MediaPort(webRtcEndpoint, user);
        mediaPort.connect(thisObj.masterPort, sdpOffer, callback);

        thisObj.connectedPorts[user.id] = mediaPort;
	});
};

kcm.MediaPipeline.prototype.removeMediaPort = function(user) 
{
    kcm.clearCandidatesQueue(user.id);

    var mediaPort = this.connectedPorts[user.id];
    if(mediaPort)
    {
        mediaPort.close();
        delete this.connectedPorts[user.id];
    }
};

kcm.MediaPipeline.prototype.destroyPipeline = function() 
{
    if(this.pipeline)
    {
        kcm.clearCandidatesQueue(this.masterPort.user.id);

        //자신이 받고 있는 미디어포트 제거
        var mediaPort;
        for(var key in this.connectedPorts)
        {
            mediaPort = this.connectedPorts[key];
            if(mediaPort.user.mpl)
            {
                mediaPort.user.mpl.removeMediaPort(this.masterPort.user);
            }

            mediaPort.close();
        }
        this.connectedPorts = null;

        this.stopRecord();

        //자신이 전송하는 미디어 포트 제거
        this.masterPort.user.mpl = null;
        this.masterPort.close();
        this.masterPort = null;

        this.pipeline.release();
        this.pipeline = null;
    }
};

//-------------------------------------------------------------------
//  class MediaPort
//
kcm.MediaPort = function(webRtcEndpoint, user) 
{
    this.webRtcEndpoint = webRtcEndpoint;
    this.user = user;

    //this.webRtcEndpoint.setTurnUrl('baduklecture:asooeoqkr@14.36.124.191:3478');
};

kcm.MediaPort.prototype.open = function(sdpOffer, callback)
{
    var thisObj = this;

    var arr = kcm.candidatesQueue[this.user.id];
    if(arr)
    {
        while(arr.length) 
        {
            console.info('Adding Queue candidate : ' + this.user.id);
            this.webRtcEndpoint.addIceCandidate(arr.shift());
        }
    }

    this.webRtcEndpoint.on('OnIceCandidate', function(event) 
    {
        var candidate = kurento.getComplexType('IceCandidate')(event.candidate);

        thisObj.user.sendPacket(
        {
            JSON: true,
            id : 'iceCandidate',
            userId: thisObj.user.id,
            candidate : candidate
        });
    });

    this.webRtcEndpoint.processOffer(sdpOffer, function(error, sdpAnswer) 
    {
        if (error) 
        {
            return callback(error);
        }

        thisObj.webRtcEndpoint.gatherCandidates(function(error) 
        {
            if(error) 
            {
                return callback(error);
            }

            callback(null, sdpAnswer);
        });
    });

};

kcm.MediaPort.prototype.connect = function(masterPort, sdpOffer, callback)
{
    var thisObj = this;

    var arr = kcm.candidatesQueue[this.user.id];
    if(arr)
    {
        while(arr.length) 
        {
            console.info('Adding Queue candidate : ' + this.user.id);
            this.webRtcEndpoint.addIceCandidate(arr.shift());
        }
    }

    this.webRtcEndpoint.on('OnIceCandidate', function(event) 
    {
        var candidate = kurento.getComplexType('IceCandidate')(event.candidate);

        thisObj.user.sendPacket(
        {
            JSON: true,
            id : 'iceCandidate',
            userId: masterPort.user.id,
            candidate : candidate
        });
    });

    this.webRtcEndpoint.processOffer(sdpOffer, function(error, sdpAnswer) 
    {
        if (error) 
        {
            return callback(error);
        }

        masterPort.webRtcEndpoint.connect(thisObj.webRtcEndpoint, function(error) 
        {
            if(error) 
            {
                return callback(error);
            }
            
            thisObj.webRtcEndpoint.gatherCandidates(function(error) 
            {
                if (error) 
                {
                    return callback(error);
                }

                callback(null, sdpAnswer);
            });
        });
    });

};

kcm.MediaPort.prototype.close = function()
{
    this.webRtcEndpoint.release();

    this.webRtcEndpoint = null;
    this.user = null;
};