
/**
Constructor
Do not call Function in Constructor.
*/
class WebQueryManager()
{
	super();

	

}
extends QueryManager;


function WebQueryManager*onReceived(data, size)
{
	var recvObj = JSON.parse(data);
	
	if(recvObj.JSON)
	{
		this.jsonProcess(recvObj);
	}
	else
	{
		if(!recvObj.header) console.log(recvObj);
		
		if(recvObj.header.packetId) this.packetInfo.packetId = recvObj.header.packetId;
		else this.packetInfo.packetId = recvObj.header.packet_id;

		switch(recvObj.header.packetType)
		{
			case Define.TYPE.TRAN:
				this.queryProcess(recvObj);
			break;

			case Define.TYPE.NOTI:
				this.notiProcess(recvObj);
			break;

			default:
				this.queryProcess(recvObj);
			break;
		}
	}
	

	//console.log(data);
};

//onReceive 함수 내에서 패킷 타입에 따라 분기하여 호출되는 함수
async function WebQueryManager*notiProcess(recvObj)
{
	//----------------------------------------------------
	
	//	1. 쿼리 네임을 얻어 queryData 를 생성한다.
	var qryName = recvObj.header.queryName,
		aquery = await AQuery.getSafeQuery(qryName),
		queryData = this.makeQueryData(aquery);
		
	//	2. queryData 객체에 값을 채우고 dataKey 값을 구한 후
	queryData.outBlockData(recvObj);
	
	if(!this.realDataToComp(recvObj.header.dataKey, queryData ))
	{
		var listener, i, qLen = this.queryListeners.length;

		for(i=0; i<qLen; i++)
		{
			listener = this.queryListeners[i];
			if(listener.notiDataProcess) listener.notiDataProcess(queryData, this);
		}
	}
};

//사용할 AQueryData(또는 상속받은 클래스) 객체를 생성하여 리턴한다.
function WebQueryManager*makeQueryData(aquery, isSend)
{
	return new WebQueryData(aquery);
};

function WebQueryManager*makeHeader(queryData, sendObj, menuNo)
{
	var packetId = this.makePacketId();
	var qryName = queryData.getQueryName();
	
	var qryType = queryData.getQuery().getQueryType();
	
	if(qryType == 'TRAN')
	{
		sendObj.header = 
		{
			'packetType': Define.TYPE.TRAN,	//transaction type / request, response
			'packetId': packetId,
			'queryName': qryName
		};
	}
	else if(qryType == 'NOTI')
	{
		sendObj.header = 
		{
			'packetType': Define.TYPE.NOTI,			
			'packetId': packetId,
			'queryName': qryName
		};
	}
	
	return packetId;
};

//에러세팅
function WebQueryManager*setErrorData(recvObj)
{
	this.errorData.errCode = recvObj.header.error_code;
	this.errorData.errMsg = recvObj.header.error_msg;
};

function WebQueryManager*onConnected(success)
{
	console.log('----> onConnected : ' + success);
	
	theApp.onNetworkReady();
};

function WebQueryManager*onClosed()
{
	AIndicator.hide();
	console.log('----> onClosed');
	alert('closed');
	
	this.clearAllQueryCallback();
	
	if(!this.netIo.selfClose) 
	{
	}
	
	// TODO: 재접속 처리 로직 
	// 	if(!this.selfClose && !theApp.isPause)
	// 		theApp.autoLoginProcess('재접속중입니다...');
};

//sendProcess 를 사용하지 않고 직접 json 메시지를 전송한다.
function WebQueryManager*sendMessage(message)
{
	this.netIo.sendData(JSON.stringify(message));
};

function WebQueryManager*jsonProcess(message)
{
	var listener, i, qLen = this.queryListeners.length;

	for(i=0; i<qLen; i++)
	{
		listener = this.queryListeners[i];
		if(listener.jsonDataProcess) listener.jsonDataProcess(message, this);
	}

};
