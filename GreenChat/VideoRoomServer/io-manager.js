
var asoo = require('./lib/asooworld'),
	gb = require('./global'),
    proc = require('./proc'),
    kcm = require('./kurento-manager'),
    Define = require('./defines');
    

var ext = 
{
	ChatUser: require('./ext/chatuser'),
	ChatRoom: require('./ext/chatroom'), 
	ChatHouse: require('./ext/chathouse')
};
	

//전역에서 참조할 객체 생성
gb.office = new asoo.AOffice();
gb.house = new ext.ChatHouse();
//gb.lobby = new asoo.ARoom(null);	//대기실


//export module
// module.exports.bindManager = function(socket)
// {
// 	//console.log('connect');

// 	var manager = new IoManager(socket);
	
// 	socket.on('message', function(msg) 
// 	{
// 		if(msg.type=='utf8')
// 		{
// 			if(!manager.onMessage(msg.utf8Data))
// 			{
// 				manager.user.close();
// 			}
// 		}
// 	});
  
// 	socket.on('close', function() 
// 	{
// 		manager.onDisconnect();
// 	});			

// };

module.exports.bindManager = function(ws)
{
    var manager = new IoManager(ws);
    
    ws.on('error', function(error) 
    {
        console.log('ws.on - error ');
        console.log(error);
        manager.onDisconnect();
    });

    ws.on('close', function() 
    {
        manager.onDisconnect();
    });

    ws.on('message', function(msg) 
    {
        if(!manager.onMessage(msg))
        {
            manager.user.close();
        }
    });
};





//---------------------------------------------
//	class IoManager
//---------------------------------------------

function IoManager(socket)
{
	this.user = new ext.ChatUser(socket);
	this.user.iom = this;
	this.msgProc = proc.create(this);
	
	this.isLogin = false;
}

//-----------------------------------------------------------------------------------
//	Message Format
//	
/*	
	var packet = 
	{
		header: 
		{
			'packetId': 100, 
			'queryName': 'tr0001',
			'errorCode': 1
		},

		body:
		{
			InBlock1:
			[
				{ 'loginId':'asoocool', 'loginPw': '1234' }
			]
		}
	};
*/
//-----------------------------------------------------------------------------------
IoManager.prototype.onMessage = function(msg)
{
	//중복 아이디 로그인 등으로 곧 종료될 예정인 유저
	if(this.user.willClose) 
	{
		return false;
	}

	var packet = null;
	
	try
	{
        packet = JSON.parse(msg);
        
        if(packet.JSON)
        {
            return this.jsonProcess(packet, msg);
        }
	}
	catch(err)
	{
        console.log(err);
		return false;
	}

	return this.msgProc.process(packet);

	//return true;
};

IoManager.prototype.onDisconnect = function()
{
	if(this.isLogin)
	{
        if(this.user.curRoom)
        {
			//방에서 나갈때 방이 제거되는게 아니면
			if(this.roomOutManage() != asoo.REMOVE)
			{
			}
			//방에서 나갈때 방이 제거된 경우
			else
			{
			}
        }

        //대기실에 있다가 종료한 경우
        //else this.lobbyOutManage();
		
		//office 에서 해제한다.
		gb.office.unregister(this.user);
		
		this.isLogin = false;
    }
    
    console.log('disconnected : ' + this.user.id);
	
	this.user = null;
};

IoManager.prototype.getNotiPacket = function(queryName, blockData, dataKey)
{
	if(!dataKey) dataKey = '';

	return {
		header: 
		{
			'packetType': Define.TYPE.NOTI, 
			'queryName': queryName, 
			'dataKey': dataKey
		},

		body:
		{
			OutBlock1: blockData
		}
	};
};

/*
IoManager.prototype.lobbyInManage = function()
{
	//대기실의 유저들에게 자신의 정보를 추가하도록 알림
	this.setPacket(Command.REP_ADD_LOBBY_USER, [this.user.getUserInfo()]);
	gb.lobby.send(this.packet);
	
	//자신을 로비에 추가
	gb.lobby.addUser(this.user,'');
	
	//	룸 리스트 전송
	//	REP_ROOM_LIST : [ {id:1234,name:hi~}, ... ]
	this.setPacket(Command.REP_ROOM_LIST, gb.house.getRoomList());
	this.user.send(this.packet);
	
	//	대기자 리스트 전송
	//	REP_LOBBY_USER_LIST : [ {id:1234,name:아수쿨}, ... ]
	this.setPacket(Command.REP_LOBBY_USER_LIST, gb.lobby.getUserList());
	this.user.send(this.packet);
};

IoManager.prototype.lobbyOutManage = function()
{
	//로비에서 제거
	gb.lobby.removeUser(this.user);
	
	//대기자 목록에서 삭제하라는 알림
	this.setPacket(Command.REP_REMOVE_LOBBY_USER, [this.user.id]);
	gb.lobby.send(this.packet);
};
*/

IoManager.prototype.makeRoomManage = function(roomInfo)//roomName, roomPw, roomType)
{
	//참여한 방이 없어야 한다.
	if(this.user.curRoom) return asoo.ERROR;
	
	//var roomId = this.user.id + "_" + Date.now();
	//var newRoom = new ext.GameRoom(roomId);

	//ArrayHouse 이므로 방을 만들 때 빈 슬롯을 찾아 자동으로 생성해 준다.
	var newRoom = new ext.ChatRoom();

	if(gb.house.makeRoom(newRoom, this.user)) 
	{
        //unlimit
        //roomInfo.maxSize = 0;

		newRoom.setRoomInfo(roomInfo);

		//-----------------------------------------------
		//	유저들에게 방 정보를 추가하도록 알림
		var packet = this.getNotiPacket('nt0002', [newRoom.getRoomInfo()]);
		gb.office.send(JSON.stringify(packet));


		//console.log('make Room -> '+(newRoom.id));

		this.user.curRoom = newRoom;

		return asoo.SUCCESS;
	}

	//방만들기 실패.

	return asoo.FAIL;
};

IoManager.prototype.roomInManage = function(roomInfo)//roomId, roomPw)
{
	//방에 다시 참여하려는 시도, 오류
	if(this.user.curRoom) return asoo.ERROR;

	//Array [retCode, ARoom] 성공하면(SUCCESS) 입장한 방을 리턴한다. 실패하면 null
	var ret = gb.house.enterRoom(roomInfo.roomId, roomInfo.roomPw, this.user);
	
	if(ret[0]==asoo.SUCCESS)
	{
		var curRoom = ret[1];

		//------------------------------------------------------------
		//	방 속성을 변경하라는 알림(방 인원수가 변경되므로)
		//var packet = this.getNotiPacket('nt0003', [curRoom.getRoomInfo()]);
		//gb.lobby.send(JSON.stringify(packet));

		//------------------------------------------------------------
		//	방참여 유저들에게 자신의 정보를 추가하도록 알림
		packet = this.getNotiPacket('nt0004', [this.user.getUserInfo()], roomInfo.roomId);

        //자신을 포함한 전체 목록을 받아오므로 자신은 제외힌다.
		curRoom.sendEx(JSON.stringify(packet), this.user);

		//console.log('into Room -> '+(roomId));

		this.user.curRoom = curRoom;
	}

	return ret;
};

IoManager.prototype.roomOutManage = function()
{
    var curRoom = this.user.curRoom;

    if(!curRoom) return asoo.ERROR;
    
    var roomId = curRoom.id;

	var ret = gb.house.leaveRoom(curRoom, this.user);

	//console.log('out Room -> '+(roomId));
    //this.user.removeRoom(roomId);
    
	switch(ret)
	{
		//방이 여전히 존재하고 자신이 성공적으로 방을 나온 경우
		case asoo.SUCCESS:
		case asoo.HOSTLEAVE:  //방장이 나가는 경우, 방장을 구별하는 구조가 아니므로 현재는 의미 없다.
		{
			//var newHostId = 0;
		    //if(ret==asoo.HOSTLEAVE) newHostId = curRoom.hostUser.id;

			//------------------------------------------------------------
			//	방 참여자 목록에서 삭제하라고 알린다.
            //var packet = this.getNotiPacket('nt0006', [ { userId: this.user.id, hostId: curRoom.hostUser.id} ], roomId);
            var packet = this.getNotiPacket('nt0006', [ { userId: this.user.id, hostId: ''} ], roomId);
			curRoom.send(JSON.stringify(packet));

			//------------------------------------------------------------
			//	방 속성을 변경하라는 알림(방 인원수가 변경되므로)
			packet = this.getNotiPacket('nt0003', [curRoom.getRoomInfo()]);
			gb.office.send(JSON.stringify(packet));
		}
		break;

		//자신이 마지막으로 방을 나오면서 방이 삭제된 경우
		case asoo.REMOVE:
		{
			//curRoom.endGame();
			
			//------------------------------------------------------------
			//	대기실 방 목록에서 삭제하라는 알림
			var packet = this.getNotiPacket('nt0005', [ { roomId: curRoom.id } ]);
			gb.office.send(JSON.stringify(packet));
		}
		break;
    }

    if(this.user.mpl) 
    {
        this.user.mpl.destroyPipeline();
        //this.user.mpl = null;
    }
    
    this.user.curRoom = null;
	
	return ret;
	
};

//참조 사이트
//https://lts0606.tistory.com/238
IoManager.prototype.fileUploadManage = function(filePath, callback)
{
    var request = require('request');
    var fs = require('fs-extra');
    
    //multipart/form-data 방식
    var datas = 
    {
        //single_param: 'my_value',                     //단순 데이터 
        //array_params: [1, 2, 3, 4, 5],                //배열형태 데이터
        single_file: fs.createReadStream(filePath),     //파일 1개보낼때, 'D:/test.png'

        /* //배열형식으로 파일들을 보낼 때..받는 곳에서도 배열처리해서 받아야 함.
        array_files: [  
            fs.createReadStream('D:/test2.png'),
            fs.createReadStream('D:/test3.png')
        ],
        
        custom_file: {  //파일형태를 가공해서 보낼 때
            value: fs.createReadStream('D:/test3.png'),
            options: {
                filename: 'cnv_test.png',
                contentType: 'image/png'
            }
        }
        */
    };

    request.post({url:'http://127.0.0.1:8080/testUpload.do', formData: datas}, function(error, response, body) 
    {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode); 
        //console.log('body:', body);

        //업로드가 완료되면 호출되는 것인지 확인해보기....
        callback(error, response);
    });
};

IoManager.prototype.jsonProcess = function(packet, msg)
{
    var thisObj = this, user = null;

    switch(packet.id)
    {
        case 'onIceCandidate':
        {
            if(this.user.curRoom)
            {
                kcm.onIceCandidate(this.user, packet);
            }

            //오류 처리하기
        }
        break;

        case 'offer':
        {
            //master user : create media pipeline
            if(this.user.id==packet.userId)
            {
                var mpl = new kcm.MediaPipeline();

                console.log('create pipeline ' + this.user.id);

                mpl.createPipeline(this.user, packet.sdpOffer, function(error, sdpAnswer)
                {
                    if(error) 
                    {
                        thisObj.user.sendPacket(
                        {
                            JSON: true,
                            id : 'answer',
                            userId: packet.userId,
                            response : 'rejected',
                            message : error
                        });
                    }
                    else
                    {
                        //원하는 시점에 저장을 시작할 경우.. 적당한 위치에서 호출해 주면 됨.
                        //mpl.startRecord('WEBM_AUDIO_ONLY', function(err) {});

                        thisObj.user.sendPacket(
                        {
                            JSON: true,
                            id : 'answer',
                            userId: packet.userId,
                            response : 'accepted',
                            sdpAnswer : sdpAnswer
                        });

                        //방에 있는 다른 유저들에게 자신이 준비되었음을 알린다.
                        var msg = 
                        {
                            JSON: true,
                            id : 'ready',
                            userId: packet.userId
                        };
            
                        thisObj.user.curRoom.sendEx(JSON.stringify(msg), thisObj.user);
                    }
                });
            }

            //view user : connect media pipeline
            else 
            {
                //연결하고자 하는 마스터 유저를 찾는다.
                var masterUser = this.user.curRoom.findUser(packet.userId);

                //아직 파이프라인이 생성되지 않은 경우
                if(!masterUser.mpl) break;

                console.log('connect pipeline ' + packet.userId);

                masterUser.mpl.addMediaPort(this.user, packet.sdpOffer, function(error, sdpAnswer)
                {
                    if (error) 
                    {
                        thisObj.user.sendPacket(
                        {
                            JSON: true,
                            id : 'answer',
                            userId: packet.userId,
                            response : 'rejected',
                            message : error
                        });
                    }
                    else
                    {
                        thisObj.user.sendPacket(
                        {
                            JSON: true,
                            id : 'answer',
                            userId: packet.userId,
                            response : 'accepted',
                            sdpAnswer : sdpAnswer
                        });
                    }

                });
			}
        }
        break;

        case 'stop':
        {
            var masterUser = this.user.curRoom.findUser(packet.userId);

            if(masterUser.mpl) 
            {
                masterUser.mpl.removeMediaPort(this.user);
            }
        }
        break;

        case 'destory':
        {
            if(this.user.mpl)
            {
                this.user.mpl.destroyPipeline();

                var packet = 
                {
                    JSON: true,
                    id : 'dispose',
                    userId: this.user.id
                };
    
                this.user.curRoom.send(JSON.stringify(packet));
            }

        }
        break;

        case 'syncEvent':
        {
            if(this.user.curRoom)
            {
                this.user.curRoom.sendEx(msg, this.user);
            }
        }
        break;

    }

    return true;
};