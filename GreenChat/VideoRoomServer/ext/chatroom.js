
var asoo = require('../lib/asooworld'),
	gb = require('../global'),
	Define = require('../defines');
	


//exports only one constructor function
module.exports = ChatRoom;

//--------------------------------------------------------------------------------//
//	class GameRoom extends ARoom
//--------------------------------------------------------------------------------//

/**
 * GameRoom constructor
 * @param {String} id
 */
function ChatRoom(id)
{

	
	asoo.ARoom.call(this, id);
	
	//방인원이 모두 나가도 방이 존재하도록
	//this.isAutoRemove = false;
	this.roomKey = null;

}
//extends ARoom
asoo.extendsClass(ChatRoom, asoo.ARoom);




//-------------------------------------------------------------------------------
//	override area
//-------------------------------------------------------------------------------

ChatRoom.prototype.setRoomInfo = function(info)
{
	this.name = info.roomName;
	
	if(!info.roomPw) this.password = "";
	else this.password = info.roomPw;
	
	if(!info.maxSize) this.maxSize = 0;
	else this.maxSize = info.maxSize;

	this.roomType = info.roomType;

	//추가
	this.roomKey = info.roomKey; //방키
	

};

ChatRoom.prototype.getRoomInfo = function()
{
	//retObj is query format : tr0002
	var retObj = 
	{
		roomId:this.id, 
        roomType: this.roomType,
        playerNum: this.users.length, 
        roomName: this.name,
		roomKey : this.roomKey
	};

	return retObj;
};

ChatRoom.prototype.addUser = function(user, pw)
{
	var ret = asoo.ARoom.prototype.addUser.call(this, user, pw);

	if(ret==asoo.SUCCESS)
	{
	}

	return ret;
};

ChatRoom.prototype.removeUser = function(user)
{

	return asoo.ARoom.prototype.removeUser.call(this, user);
};

//-------------------------------------------------------------------------------
//	end
//-------------------------------------------------------------------------------


