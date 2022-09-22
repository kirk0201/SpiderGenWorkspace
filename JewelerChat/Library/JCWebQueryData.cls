
/**
Constructor
Do not call Function in Constructor.
*/
class JCWebQueryData(aquery)
{
	super(aquery);

	

}
extends AQueryData;


function JCWebQueryData*inBlockBuffer(sendObj)
{
	sendObj.body = this.getQueryObj();
};


function JCWebQueryData*outBlockData(recvObj)
{
	this.setQueryObj(recvObj.body);
	
};
