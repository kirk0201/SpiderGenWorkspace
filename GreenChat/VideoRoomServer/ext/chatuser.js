
var asoo = require('../lib/asooworld'),
	gb = require('../global'),
	Define = require('../defines');

//exports only one constructor function
module.exports = ChatUser;

//--------------------------------------------------------------------------------//
//	class Player extends AUser
//--------------------------------------------------------------------------------//

/**
 * ChatUser constructor
 * @param {Socket} socket
 */
function ChatUser(socket)
{
	asoo.AUser.call(this, socket);
    
    this.curRoom = null;


}

//extends AUser
asoo.extendsClass(ChatUser, asoo.AUser);


//-------------------------------------------------------------------------------
//	override area
//-------------------------------------------------------------------------------

ChatUser.prototype.setUserInfo = function(info)
{
	this.id = info.id;
	this.name = info.name;
	
};

//쿼리 전문에 맞춰 키값을 셋팅
ChatUser.prototype.getUserInfo = function()
{
	return {
		userId: this.id, 
		userName: this.name,
	};
};

//data 는 stringify 가 된 문자를 넘긴다.
//json object 를 매번 문자열로 바꾸는 등의 작업을 하면 성능이 저하된다.
ChatUser.prototype.send = function(strData)
{
	this.socket.send(strData);
};

//자신 또는 한 명의 유저에게 보낼 경우 사용하면 유용하다.
ChatUser.prototype.sendPacket = function(packet)
{
	this.socket.send(JSON.stringify(packet));
};

ChatUser.prototype.close = function()
{
	this.socket.close();
};


//-------------------------------------------------------------------------------
//	end
//-------------------------------------------------------------------------------

