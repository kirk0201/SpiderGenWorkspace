
const { rejects } = require('assert');
const fs = require('fs');
var gb = require('./global'),
    dbm = require('./db-manager'),
	asoo = require('./lib/asooworld'),
	Define = require('./defines');

const filesPath = '/home/asoosoft/projects/ukmani/TestWebServer/public/files/';


module.exports.create = function(iom)
{
	return new MsgProcess(iom);
};

function MsgProcess(iom)
{
    this.iom = iom;
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
MsgProcess.prototype.process = function(packet)
{
	var queryName = packet.header.queryName, retVal = false, func = null;

	if(this.iom.isLogin)
	{
        //로그인 이후는 __ 언더바 두개
        func = this['__'+queryName];
        
		if(func) retVal = func.call(this, packet);
	}

	//로그인 전, 임의로 보내는 쿼리네임 보안 처리
	else 
	{
        //로그인 전은 _ 언더바 한개
        func = this['_'+queryName];
            
	    if(func) retVal = func.call(this, packet);	//비로그인 예외 리스트 만들기?
	}
	
	return retVal;
};


//-----------------------------------------------------------------
//	서버 로그인
MsgProcess.prototype._tr0001 = function(packet)
{

	var thisObj = this;

	var blockData = packet.body.InBlock1[0];

	dbm.loginUser(blockData.uid, blockData.secKey, (results) => {

		this._sendLoginResult(packet, results);
	 	
	});

	return true;
    //테스트용	
	// thisObj._sendLoginResult(packet, 
	// [{
	// 	uid: blockData.uid, 
	// 	userName: blockData.uid,
	// }]);
	// return true;
};

MsgProcess.prototype._sendLoginResult = function(packet, results)
{
	var iom = this.iom, info = {}, retObj = {};

	//실패
	if(!results || results.length < 1)
	{
		retObj.result = 0;		
		retObj.message = '로그인 실패!!';		
	}		
	//로그인 성공
	else
	{	

		//console.log(results);

		var data = results[0];
		
		info = 
		{ 
			id: data.userId, 
			name: data.userName ? data.userName : data.userId,			
		};

		iom.user.setUserInfo(info);
		
		//------------------------------------
		//	모든 접속자를 관리하는 office 등록
		//------------------------------------
		
		//기존 유저가 접속중이면
        var oldUser = gb.office.replaceRegister(iom.user);
        
		//연결을 끊는다.
		if(oldUser) 
		{
			//console.log(oldUser.name + ' : old client will close.');
            
			oldUser.willClose = true;

			//-----------------------------------------------
			//	중복 아이디임을 알리고 끊어야 함으로...
			//	클라이언트에서 연결을 종료한다.
			//oldUser.iom.lobbyOutManage();
			oldUser.sendPacket(iom.getNotiPacket('nt0010'));
            

            //retObj.result = 0;
		}
        // else
        // {
            iom.isLogin = true;
        
            retObj.result = 1;
        //}


		//iom.lobbyInManage();
	}

	packet.body = 
	{
		OutBlock1: [ retObj ]
	};

	iom.user.sendPacket(packet);
};



MsgProcess.prototype._validUserId = function(blockData, retObj)
{
	let uid = blockData.uid;

	if(!uid || !uid.trim())
	{
		retObj.result = 0;		
		retObj.message = '아이디는 필수 입력값입니다.';
		return false;
	}

	uid = uid.trim();
	
	if(uid.length < 6 || uid.length > 20)
	{		
		retObj.result = 0;		
		retObj.message = '아이디는 6~20자까지만 가능합니다.';
		return false;
	}
		
	let regExp = /^[a-z0-9]+$/g; 
	if(!regExp.test(uid))
	{
		retObj.result = 0;		
		retObj.message = '아이디는 영문, 숫자만 가능합니다.';
		return false;
	}
	
	retObj.result = 1;		
	return true;
}

MsgProcess.prototype._validSecKey = function(blockData, retObj)
{	
	let secKey1 = blockData.secKey1,
		secKey2 = blockData.secKey2;

	if(!secKey1)
	{
		retObj.result = 0;		
		retObj.message = '비밀번호는 필수 입력값입니다.';
		return false;
	}
		
	if(!secKey2)
	{		
		retObj.result = 0;		
		retObj.message = '비밀번호확인은 필수 입력값입니다.';
		return false;
	}
		
	secKey1 = secKey1.trim();
	secKey2 = secKey2.trim();
		
	if(secKey1.length < 4 || secKey1.length > 20)
	{		
		retObj.result = 0;		
		retObj.message = '비밀번호는 4~20자까지만 가능합니다.';
		return false;
	}
		
		
	if(secKey2.length < 4 || secKey2.length > 20)
	{		
		retObj.result = 0;		
		retObj.message = '비밀번호 확인은 4~20자까지만 가능합니다.';
		return false;
	}
		
		
	if(secKey1 != secKey2)
	{
		retObj.result = 0;		
		retObj.message = '비밀번호가 일치하지 않습니다.';
		return false;
	}

	retObj.result = 1;		
	return true;
}




//-----------------------------------------------------------------
//	아이디 생성
MsgProcess.prototype._tr1000 = function(packet)
{
	//packet.header.errorCode = asoo.SUCCESS;
	var blockData = packet.body.InBlock1[0],
		retObj = {};


	//아이디 유효성체크	
	if(!this._validUserId(blockData, retObj))
	{
		packet.body = 
		{
			OutBlock1: [ retObj ]
		};

		this.iom.user.sendPacket(packet);

		return true;
	}

	//비밀번호 유효성 체크
	if(!this._validSecKey(blockData, retObj))
	{
		packet.body = 
		{
			OutBlock1: [ retObj ]
		};

		this.iom.user.sendPacket(packet);

		return true;
	}

	
	dbm.registUser(blockData.uid, blockData.secKey1, (results) => {

		retObj.result =  !results ? 0 : 1;
		retObj.message = retObj.result ? '정상적으로 아이디가 생성되었습니다.' : '아이디 생성을 실패했습니다.';

		packet.body = 
		{
			OutBlock1: [ retObj ]
		};

		this.iom.user.sendPacket(packet);
		

	});
	

	return true;

};



//-----------------------------------------------------------------
//	아이디 중복확인
MsgProcess.prototype._tr1001 = function(packet)
{
	//packet.header.errorCode = asoo.SUCCESS;
	let blockData = packet.body.InBlock1[0],
		retObj = {};
	
	//아이디 패턴확인		
	if(!this._validUserId(blockData, retObj))
	{
		packet.body = 
		{
			OutBlock1: [ retObj ]
		};

		this.iom.user.sendPacket(packet);

		return;
	}


	dbm.checkUserId(blockData.uid, (results) => {

		retObj.result = results.length;
		retObj.message = retObj.result ? '사용이 불가능한 아이디 입니다.' : '사용 가능한 아이디 입니다.';

		packet.body = 
		{
			OutBlock1: [ retObj ]
		};

		this.iom.user.sendPacket(packet);

		return;
			 
	});
	
	return true;

};





//-----------------------------------------------------------------
//	방목록 조회
MsgProcess.prototype.__tr0002 = function(packet)
{
	//packet.header.errorCode = asoo.SUCCESS;
	packet.body = 
	{
		OutBlock1: gb.house.getRoomList()
	};

	this.iom.user.sendPacket(packet);

	return true;
};

//-----------------------------------------------------------------
//	대기자 목록 조회
MsgProcess.prototype.__tr0003 = function(packet)
{
	packet.body = 
	{
		OutBlock1: gb.lobby.getUserList()
	};

	this.iom.user.sendPacket(packet);

	return true;
};

//-----------------------------------------------------------------
//	방 만들기
MsgProcess.prototype.__tr0004 = function(packet)
{
	var blockData = packet.body.InBlock1[0];

    //var ret = this.iom.makeRoomManage(blockData.roomName, blockData.roomPw, blockData.roomType);

	const curUser = this.iom.user;
	const roomKey = (new Date()).getTime();

	blockData['roomKey'] = roomKey;
	//blockData['consKey'] = roomKey; //상담키는 처음 방생성할때 같은 값으로 등록한다.

    var ret = this.iom.makeRoomManage(blockData);

	if(ret==asoo.ERROR) return false;

	//최근에 만들어진 방
	var curRoom = curUser.curRoom;


	dbm.createRoom({ ...blockData, hostUser : curUser.id}, (results) => {
		
		let retObj = null;

		if(!results)
		{
			retObj = { result: 0, roomId: null};
		}
		else
		{
			retObj = { result: ret, roomId: curRoom.id, roomKey :  curRoom.roomKey};

			//방개설 로그 저장
			dbm.registLogInfo(curRoom.roomKey, curUser.id, '상담방 개설', (results) => {});

		}
				
		packet.body = 
		{
			OutBlock1: [retObj ]
		};

		curUser.sendPacket(packet);


	});


	return true;

};

//-----------------------------------------------------------------
//	방 참여하기
MsgProcess.prototype.__tr0005 = function(packet)
{
	var blockData = packet.body.InBlock1[0];

	var ret = this.iom.roomInManage(blockData);//blockData.roomId, blockData.roomPw);

	if(ret[0]==asoo.ERROR) return false;

	var dataObj = { result: ret[0] }; 

	if(ret[0]==asoo.SUCCESS)
	{

		var roomKey = ret[1].roomKey;
		//데이터만 넣는다.
		dbm.insertRoomInUser(roomKey, this.iom.user.id, (results) => {
		
			if(!results)
			{
				this.iom.roomOutManage();
				// 로그 저장
				dbm.registLogInfo(roomKey, this.iom.user.id, '상담방 입장 실패!', (results) => {});
				
				return false;
			}


			dataObj.roomType = ret[1].roomType;
			dataObj.roomName = ret[1].name;
			dataObj.roomKey = ret[1].roomKey;
	
			packet.body = 
			{
				OutBlock1: [ dataObj ]
			};
	
			this.iom.user.sendPacket(packet);

			// 로그 저장
			dbm.registLogInfo(roomKey, this.iom.user.id, '상담방 입장!', (results) => {});

		});
	}
	
	return true;
};

//-----------------------------------------------------------------
//	방 나가기
MsgProcess.prototype.__tr0006 = function(packet)
{
	var blockData = packet.body.InBlock1[0];

	var curUser = this.iom.user, 
		userId = curUser.id,
		curRoom = curUser.curRoom,
		roomKey = curRoom.roomKey,		
		hostUser = curRoom.hostUser,
		ret = this.iom.roomOutManage();

	if(ret==asoo.ERROR) return false;

	//방나감
	dbm.roomOut(roomKey, (results) => {});
	
	// 로그 저장
	dbm.registLogInfo(roomKey, userId, '상담방 퇴장!', (results) => {});

	packet.body = 
	{
		OutBlock1: [ { result: ret } ]
	};

	this.iom.user.sendPacket(packet);
	
	return true;

};

//-----------------------------------------------------------------
//	방 참여자 목록 조회
MsgProcess.prototype.__tr0007 = function(packet)
{
	var blockData = packet.body.InBlock1[0];

	var curRoom = this.iom.user.curRoom;
	if(!curRoom) return false;

	packet.body = 
	{
		OutBlock1: curRoom.getUserList()
	};

	this.iom.user.sendPacket(packet);

	return true;
};



MsgProcess.prototype.__tr0008 = function(packet)
{
	var blockData = packet.body.InBlock1[0];

	var curUser = this.iom.user,
		curRoom = curUser.curRoom,
		mpl = curUser.mpl;

	if(!mpl) return false;

    var thisObj = this;

    if(blockData.type==1) 
    {
        mpl.startRecord('WEBM', curRoom.roomKey, function(err)
        {
            packet.body = 
            {
                OutBlock1: [ { result: (!err) } ]
            };
    
            thisObj.iom.user.sendPacket(packet);
        });
    }
    else 
    {

        mpl.stopRecord();
       

        var roomKey = curRoom.roomKey,
            dirPath = filesPath + roomKey,
			dstPath = dirPath + '/' + mpl.recordFileName;
		

		fs.mkdir(dirPath, {recursive: true}, (err) => {

			if(err && err.code != 'EEXIST') 
			{
				packet.body = 
				{
					OutBlock1: [ { result: '' } ]
				};
		
				thisObj.iom.user.sendPacket(packet);
				return;
			}
		
			fs.copyFile('/tmp/spidercob/'+mpl.recordFileName, dstPath, function(err)
			{

				if(err) dstPath = '';
				else dstPath = './files/' + roomKey + '/' + mpl.recordFileName;
		
				packet.body = 
				{
					OutBlock1: [ { result: dstPath } ]
				};
			
				thisObj.iom.user.sendPacket(packet);
			});

		
		});	

    }

	return true;
};

//-----------------------------------------------------------------
//	로그저장
MsgProcess.prototype.__tr9000 = function(packet)
{	
	var blockData = packet.body.InBlock1[0],
		retObj = {};

	var curUser = this.iom.user,
		curRoom = curUser.curRoom;

	if(!curRoom) return false;	
		
	dbm.registLogInfo(curRoom.roomKey, curUser.id, blockData.info, (results) => {

		retObj.result =  !results ? 0 : 1;
		retObj.message = retObj.result ? '정상적으로 로그를 저장했습니다.' : '로그 저장을 실패했습니다.';

		packet.body = 
		{
			OutBlock1: [ retObj ]
		};

		this.iom.user.sendPacket(packet);
		
	});
	
	return true;

};


//-----------------------------------------------------------------
//	상담목록
MsgProcess.prototype.__tr9001 = function(packet)
{	
	var blockData = packet.body.InBlock1[0];

	dbm.getConsultList(this.iom.user.id, blockData, (results) => {
		
		packet.body = 
		{
			OutBlock1: results
		};

		this.iom.user.sendPacket(packet);
		
	});
	
	return true;

};


//-----------------------------------------------------------------
//상담 상세 목록
MsgProcess.prototype.__tr9002 = function(packet)
{	
	var blockData = packet.body.InBlock1[0];
		
	dbm.getConsultDetailList(blockData.roomKey, blockData.lastIdx, (results) => {
		
		packet.body = 
		{
			OutBlock1: results
		};

		this.iom.user.sendPacket(packet);
		
	});
	
	return true;

};


//-----------------------------------------------------------------
// 녹화목록
MsgProcess.prototype.__tr9003 = function(packet)
{
	const blockData = packet.body.InBlock1[0],
          roomKey = blockData.roomKey,
          dirPath = filesPath + roomKey;

    const curUser = this.iom.user,
          files = [];          

    fs.readdir(dirPath, 'utf-8', (err, filelist) => {

		if(filelist && filelist.length > 0 )
		{
			filelist.forEach((file) => {
				files.push({ "file" : './files/' + roomKey + '/' + file});
			}) ;
		}

        packet.body = 
        {
            OutBlock1: files
        };

	    curUser.sendPacket(packet);

		return;

    });

	return true;
};


//-----------------------------------------------------------------
// 채팅목록
MsgProcess.prototype.__tr9004 = function(packet)
{
	const blockData = packet.body.InBlock1[0];

	dbm.getChatMessageList(blockData.roomKey, blockData.lastMsgIdx, (results) => {
		
		packet.body = 
		{
			OutBlock1: results
		};

		this.iom.user.sendPacket(packet);
		
	});

	return true;
};




//-----------------------------------------------------------------
//	공통 요청 (초대, 채팅요청 등)
MsgProcess.prototype.__tr0101 = function(packet)
{
	var blockData = packet.body.InBlock1[0];

	//특정 유저에게 요청
	var user = gb.office.findUser(blockData.userId), ret = asoo.FAIL;

	if(user)
	{
		//상대방 유저아이디 자리를 자신의 아이디 로 교체후 전송
		blockData.userId = this.iom.user.id;
		blockData.userName = this.iom.user.name;
		user.sendPacket(this.iom.getNotiPacket('nt0101', [ blockData ]));

		ret = asoo.SUCCESS;
	}

	packet.body = 
	{
		OutBlock1: [ { result: ret } ]
	};

	this.iom.user.sendPacket(packet);

	return true;
};

//-----------------------------------------------------------------
//	공통 요청 응답
MsgProcess.prototype.__tr0102 = function(packet)
{
	var blockData = packet.body.InBlock1[0];

	//요청에 대한 응답 알림
	var user = gb.office.findUser(blockData.userId), ret = asoo.FAIL;

	if(user)
	{
		//상대방 유저아이디 자리를 자신의 아이디 로 교체후 응답 정보전송
		blockData.userId = this.iom.user.id;
		blockData.userName = this.iom.user.name;
		user.sendPacket(this.iom.getNotiPacket('nt0102', [ blockData ]));

		ret = asoo.SUCCESS;
	}

	packet.body = 
	{
		OutBlock1: [ { result: ret } ]
	};

	this.iom.user.sendPacket(packet);

	return true;
};



//-----------------------------------------------------------------
//	send noti 관련 / 응답이 없고 바로 상대방에게 전송하는 메시지 타입


//대기실, 또는 룸 채팅 메시지 전송
MsgProcess.prototype.__sn0001 = function(packet)
{
	var blockData = packet.body.InBlock1[0], 
		curUser = this.iom.user,
		room = curUser.curRoom;

    

    if(!room) return false;

    //InBlockData 에 userId, userName 만 추가하면 sn0001 의 OutBlock1 과 같아지므로 재사용한다.
	blockData.userId = curUser.id;
	blockData.userName = curUser.name;

	//메시지 저장
	dbm.regChatMessage(room.roomKey, blockData.userId, 0, blockData.message, (ret)=>{});

	packet = this.iom.getNotiPacket('sn0001', [ blockData ]);
	room.send(JSON.stringify(packet));
	
	return true;
};
