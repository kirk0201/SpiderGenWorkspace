
var _asoo = module.exports = 
{
		//선언 관련 코드들만 넣을 것.
		ERROR:			-1,
		FAIL:			0,
		SUCCESS:		1,
		WRONGPW:		2,
		FULL:			3,
		NOROOM:		4,
		REMOVE:		5,
		HOSTLEAVE:		6,
		ROOM_EXIST:	7,
		GAME_START:	8,
		MORE_RESULT:	100
};

//클래스 상속 관련 처리를 해준다.
_asoo.extendsClass = function(childClass, parentClass)
{
	//이미 require를 통해 상속처리가 되어져 있는 경우는 리턴
	if(childClass.prototype.superClass) return;

	//상속 받을 부모의 프로토 타입 객체를 생성한다.
	var superProto = new parentClass(); //파라미터 없이 호출한다.
	for(var p in superProto) 
		if(superProto.hasOwnProperty(p)) delete superProto[p];
	
	childClass.prototype = superProto;
	childClass.prototype.constructor = childClass;
	childClass.prototype.superClass = parentClass;
};


//--------------------------------------------------------------------------------//
//	class AUser
//--------------------------------------------------------------------------------//

/**
 * AUser constructor
 * @param {Socket} socket
 */
_asoo.AUser = function(socket)
{
	this.id = null;
	this.name = null;
	this.socket = socket;
	this.willClose = false;
};

//보안상의 이유로 
//setXXX, getXXX 함수 들은 아래와 같은 형식을 유지해야 한다.

/**
 * 
 * @param info
 */
_asoo.AUser.prototype.setUserInfo = function(info)
{
	this.id = info.id;
	this.name = info.name;

	/*	이렇게 하지 말것
	for(var p in info)
	{
		console.log(p);
		
		if(this[p]!=undefined) this[p] = info[p];
	}
	*/
};

/**
 * 
 * @returns {Object}
 */
_asoo.AUser.prototype.getUserInfo = function()
{
	return { id:this.id, name:this.name };
};

/**
 * 데이터를 전송한다.
 * @param { String | Buffer ... } data
 * 완전히 가공된 정보만을 넘겨야 한다.
 * json object 를 매번 문자열로 바꾸는 등의 작업을 하면 성능이 저하된다.
 */
_asoo.AUser.prototype.send = function(data)
{
	//this.socket.send(strData);
};

/**
 * 
 */
_asoo.AUser.prototype.close = function()
{
	this.socket.disconnect();
};


//-----------------------------------------------------------------------------------//
//	class ARoom
//-----------------------------------------------------------------------------------//

/**
 * ARoom constructor
 * @param {String} id : 방을 구분하는 인자값
 */
_asoo.ARoom = function(id)
{
	this.id = id;
	this.name = null;
	this.password = "";
	this.maxSize = 0;			//방인원수 제한, 0이면 무제한
	this.hostUser = null;
	this.isAutoRemove = true;
	
	this.users = [];
};

/**
 * 
 * @param {Object} info
 */
_asoo.ARoom.prototype.setRoomInfo = function(info)
{
	this.name = info.name;
	
	if(!info.password) this.password = "";
	else this.password = info.password;
	
	if(!info.maxSize) this.maxSize = 0;
	else this.maxSize = info.maxSize;
};

/**
 * 
 * @returns {Object}
 */
_asoo.ARoom.prototype.getRoomInfo = function()
{
	return {id:this.id, name:this.name, number:this.users.length, open:(this.password=="")};
};

_asoo.ARoom.prototype.findUser = function(userId)
{
    var len = this.users.length;
    for(var i=0; i<len; i++)
    {
        if(this.users[i].id==userId) 
            return this.users[i];
    }
    
    return null;
};


/**
 * 방의 모든 인원에게 전송
 * @param {string, buffer} data	
 */
_asoo.ARoom.prototype.send = function(data)
{
	var len = this.users.length;
	for(var i=0; i<len; i++)
	{
		this.users[i].send(data);
	}
};

/**
 * 방의 특정 유저에게 전송 
 * @param {string|Buffer} data
 * @param {String} userId
 */
_asoo.ARoom.prototype.sendTo = function(data, userId)
{
    var len = this.users.length;
    for(var i=0; i<len; i++)
    {
        if(this.users[i].id==userId) 
        {
            this.users[i].send(data);
            return this.users[i];
        }
    }
    
    return null;
};


/**
 * user를 제외하고 전송 
 * @param {String|Buffer} data
 * @param {AUser} user
 */
_asoo.ARoom.prototype.sendEx = function(data, user)
{
	var len = this.users.length;
	for(var i=0; i<len; i++)
	{
		if(this.users[i]!==user) this.users[i].send(data);
	}
};

/**
 * 방장을 추가한다.
 * @param user
 */
_asoo.ARoom.prototype.addHostUser = function(user)
{
	this.hostUser = user;
	this.users.push(user);
};

/**
 * 유저가 방장인지를 체크한다.
 * @param user
 * @returns {Boolean}
 */
_asoo.ARoom.prototype.isHostUser = function(user)
{
	return (this.hostUser===user);
};


/**
 * addUser
 * 방에 플레이어를 추가한다. 
 * @param {AUser} user
 */
_asoo.ARoom.prototype.addUser = function(user, pw)
{
	//초대 할 경우엔 비밀번호입력이 필요없어서 따로 체크한다.
	//if(this.password!=pw) return _asoo.WRONGPW;
	if(this.maxSize>0 && this.users.length>=this.maxSize) return _asoo.FULL;

	this.users.push(user);
	
	return _asoo.SUCCESS;
};

/**
 * 방에서 플레이어를 제거한다.
 * @param {AUser} user
 * 
 * @returns {Number} 삭제 상태 리턴
 */
_asoo.ARoom.prototype.removeUser = function(user)
{
	var ret = _asoo.ERROR;
	
	var len = this.users.length;
	for(var i=0; i<len; ++i)
	{
		if(this.users[i]===user)
		{
			this.users.splice(i, 1);
			
			if(this.users.length<1 && this.isAutoRemove) ret = _asoo.REMOVE;
			else if(user===this.hostUser) ret = _asoo.HOSTLEAVE;
			else ret = _asoo.SUCCESS;
			
			break;
		}
	}
	
	//먼저 들어온 순서대로 방장 인계
	if(ret==_asoo.HOSTLEAVE) 
	{
		//isAutoRemove 가 false 이면 발생될 수 있다.
		if(this.users.length<1) this.hostUser = null; 
		else this.hostUser = this.users[0];
	}

	return ret;
};

/**
 * 플레이어 정보를 배열로 리턴해 준다.
 * @return {Array} 
 */
_asoo.ARoom.prototype.getUserList = function()
{
	var ret = [], pl;
	var len = this.users.length;
	
	for(var i=0; i<len; i++)
	{
		pl = this.users[i];
		ret.push(pl.getUserInfo());
	}

	return ret;
};



//--------------------------------------------------------------------------//
//	class AHouse
//--------------------------------------------------------------------------//

/**
 * AHouse constructor
 */
_asoo.AHouse = function()
{
	this.rooms = {};
};

/**
 * 방을 최초로 생성한다. 
 * @param {ARoom} room
 * @param {AUser} user
 * @returns {Boolean} 성공시 true
 */
_asoo.AHouse.prototype.makeRoom = function(room, user)
{
	var rm = this.rooms[room.id];
	
	if(rm) return false;
	
	room.addHostUser(user);
	
	this.rooms[room.id] = room;
	
	return true;
};

/**
 * 방에 입장한다.
 * @param {String} roomId : 방이름이 아닌 방을 구별하는 고유 아이디
 * @param {AUser} user
 * 
 * @return {Array} [retCode, ARoom] 성공하면 입장한 방을 리턴한다. 실패하면 null	
 */
_asoo.AHouse.prototype.enterRoom = function(roomId, pw, user)
{
	var rm = this.rooms[roomId];
	var ret = [null, null];
	
	//방이 존재하면
	if(rm) 
	{
		//방 참여 시도
		ret[0] = rm.addUser(user, pw);
		
		if(ret[0]==_asoo.SUCCESS) ret[1] = rm;
		
		return ret;
	}
	
	//방이 존재하지 않는 경우
	else ret[0] = _asoo.NOROOM;
	
	return ret;
};

/**
 * 방에서 나간다. 방의 인원이 0이면 방을 제거한다.
 * @param {ARoom} room 나가려고 하는 방의 객체
 * @param {AUser} user
 * @return {Number} 방퇴장에 대한 상태값
 */
_asoo.AHouse.prototype.leaveRoom = function(room, user)
{
	var ret = room.removeUser(user);
	
	if(ret==_asoo.REMOVE)
	{
		delete this.rooms[room.id];
	}
	
	return ret;
};

/**
 * 방정보를 배열로 리턴해 준다.
 * @return {Array} 
 */
_asoo.AHouse.prototype.getRoomList = function()
{
	var ret = [], rm;
	
	for(var rmId in this.rooms)
	{
		rm = this.rooms[rmId];
		ret.push(rm.getRoomInfo());
	}
	
	return ret;
};

_asoo.AHouse.prototype.findRoom = function(roomId)
{
    return this.rooms[roomId];
};




//--------------------------------------------------------------------------//
//	class ArrayHouse
//--------------------------------------------------------------------------//

/**
 * ArrayHouse constructor
 */
_asoo.ArrayHouse = function()
{
	this.rooms = [];
	this.maxSize = 0;			//방 개수 제한, 0이면 무제한
};

/**
 * 방을 최초로 생성한다. 
 * @param {ARoom} room
 * @param {AUser} user
 * @returns {Boolean} 성공시 true
 */
_asoo.ArrayHouse.prototype.makeRoom = function(room, user)
{
	//빈 슬롯이 있는지 체크
	for(var i=0; i<this.rooms.length; i++)
	{
		if(!this.rooms[i]) break;
	}
	room.id = i;
	room.addHostUser(user);
	
	this.rooms[i] = room;

	return true;
};

/**
 * 방에 입장한다.
 * @param {String} roomId : 방이름이 아닌 방을 구별하는 고유 아이디
 * @param {AUser} user
 * 
 * @return {Array} [retCode, ARoom] 성공하면 입장한 방을 리턴한다. 실패하면 null	
 */
_asoo.ArrayHouse.prototype.enterRoom = function(roomId, pw, user)
{
	var rm = this.rooms[roomId];
	var ret = [null, null];
	
	//방이 존재하면
	if(rm) 
	{
		//방 참여 시도
		ret[0] = rm.addUser(user, pw);
		
		if(ret[0]==_asoo.SUCCESS) ret[1] = rm;
		
		return ret;
	}
	
	//방이 존재하지 않는 경우
	else ret[0] = _asoo.NOROOM;
	
	return ret;
};

/**
 * 방에서 나간다. 방의 인원이 0이면 방을 제거한다.
 * @param {ARoom} room 나가려고 하는 방의 객체
 * @param {AUser} user
 * @return {Number} 방퇴장에 대한 상태값
 */
_asoo.ArrayHouse.prototype.leaveRoom = function(room, user)
{
	
	var ret = room.removeUser(user);
	
	if(ret==_asoo.REMOVE)
	{
		//console.log('deleteRoom -> '+room.id)	
		this.rooms[room.id] = null;
	}
	
	return ret;
};

/**
 * 방정보를 배열로 리턴해 준다.
 * @return {Array} 
 */
_asoo.ArrayHouse.prototype.getRoomList = function()
{
	var ret = new Array(), i, rm;
	
	for(i=0; i<this.rooms.length; i++)
	{
		rm = this.rooms[i];

		if(rm) ret.push(rm.getRoomInfo());
	}
	
	return ret;
};

_asoo.ArrayHouse.prototype.findRoom = function(roomId)
{
    return this.rooms[roomId];
};


//--------------------------------------------------------------------------//
//	class AOffice
//--------------------------------------------------------------------------//

/**
 * AOffice constructor
 */
_asoo.AOffice = function()
{
	this.users = new Object();
};

/**
 * 
 * @param user
 * @returns {Boolean}
 */
_asoo.AOffice.prototype.register = function(user)
{
	var already = this.users[user.id];
	
	if(already) return false;
	
	this.users[user.id] = user;
	
	return true;
};

/**
 * 기존 유저가 이미 존재하면 그 위치에 덮어 쓰고 기존 유저를 리턴한다.
 * @param {AUser} user
 * @returns {AUser}
 */
_asoo.AOffice.prototype.replaceRegister = function(user)
{
	var already = this.users[user.id];
	
	this.users[user.id] = user;
	
	return already;
};

/**
 * 
 * @param user
 */
_asoo.AOffice.prototype.unregister = function(user)
{
	var already = this.users[user.id];
	
	//다른 객체인 경우는 replaceRegister 에서 덮어써진 경우
	//새로운 유저로 교체 됐으므로 property 이름이 같아도 지우면 안됨.
	if(already===user) delete this.users[user.id];
};


_asoo.AOffice.prototype.findUser = function(userId)
{
    return this.users[userId];
};


/**
 * 
 * @param data
 */
_asoo.AOffice.prototype.send = function(data)
{
	for(var usrId in this.users)
	{
		this.users[usrId].send(data);
	}
};

_asoo.AOffice.prototype.sendTo = function(data, userId)
{
	var usr = this.users[userId];
	if(usr) usr.send(data);
};

_asoo.AOffice.prototype.sendEx = function(data, userId)
{
	for(var usrId in this.users)
	{
		if(usrId!=userId) this.users[usrId].send(data);
	}
};


