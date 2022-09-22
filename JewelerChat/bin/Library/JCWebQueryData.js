
/**
Constructor
Do not call Function in Constructor.
*/
function JCWebQueryData(aquery)
{
	AQueryData.call(this, aquery);

	

}
afc.extendsClass(JCWebQueryData, AQueryData);


JCWebQueryData.prototype.inBlockBuffer = function(sendObj)
{
	sendObj.body = this.getQueryObj();
};


JCWebQueryData.prototype.outBlockData = function(recvObj)
{
	this.setQueryObj(recvObj.body);
	
};
