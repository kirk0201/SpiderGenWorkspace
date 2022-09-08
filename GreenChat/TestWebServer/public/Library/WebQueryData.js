
/**
Constructor
Do not call Function in Constructor.
*/
function WebQueryData(aquery)
{
	AQueryData.call(this, aquery);

	

}
afc.extendsClass(WebQueryData, AQueryData);


WebQueryData.prototype.inBlockBuffer = function(sendObj)
{
	sendObj.body = this.getQueryObj();
};


WebQueryData.prototype.outBlockData = function(recvObj)
{
	this.setQueryObj(recvObj.body);
	
};
