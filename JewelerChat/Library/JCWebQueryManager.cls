
/**
Constructor
Do not call Function in Constructor.
*/
class JCWebQueryManager()
{
	super();

	

}
extends QueryManager;


function JCWebQueryManager*onReceived(data, size)
{
	var recvObj = JSON.parse(data);
	
	this.packetInfo.packetId = recvObj.header.packet_id;

	this.queryProcess(recvObj);

	//console.log(data);
};

//사용할 AQueryData(또는 상속받은 클래스) 객체를 생성하여 리턴한다.
function JCWebQueryManager*makeQueryData(aquery, isSend)
{
	return new JCWebQueryData(aquery);
};

function JCWebQueryManager*makeHeader(queryData, sendObj, menuNo)
{
	var packetId = this.makePacketId();
	var qryName = queryData.getQueryName();

	sendObj.header = 
	{
		'packet_id' : packetId,
		'query_name' : qryName
	};
	
	return packetId;
};

//에러세팅
function JCWebQueryManager*setErrorData(recvObj)
{
	this.errorData.errCode = recvObj.header.error_code;
	this.errorData.errMsg = recvObj.header.error_msg;
};
