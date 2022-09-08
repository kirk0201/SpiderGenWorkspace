

var Define = 
{
// 	SERVER_ADDR: '127.0.0.1',
	
	// Default 서버 
// 	SERVER_ADDR: '192.168.0.91',
// 	SERVER_ADDR: '192.168.0.155',
// SERVER_ADDR: '121.190.229.204',
// 	SERVER_ADDR: 'cob.asoosoft.net',
	
// 	SERVER_ADDR: '125.141.139.951',
	SERVER_ADDR: 'localhost',
// 		SERVER_PORT: 3306,
	// Default 포트
	SERVER_PORT: 9443,
	
	
	WND_WIDTH: 400,
	WND_HEIGHT: 600
};

Define.TYPE = 
{
	TRAN: 1,
	NOTI: 2
};

Define.RESULT = 
{
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


Define.WEBRTC = 
{
	constraints : 
	{
		audio : true,
		video : 
		{
			mandatory : 
			{
				maxWidth : afc.isIos ? 640 : 320,
				maxFrameRate : 15,
				minFrameRate : 15
			}
		}
	}
};