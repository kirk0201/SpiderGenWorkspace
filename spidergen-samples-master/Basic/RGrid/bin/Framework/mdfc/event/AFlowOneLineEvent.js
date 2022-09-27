
/**
 * @hjh
 */
afc.loadScript("Framework/afc/event/AViewEvent.js");

function AFlowOneLineEvent(acomp)
{
	AViewEvent.call(this, acomp);
	
}
afc.extendsClass(AFlowOneLineEvent, AViewEvent);


//---------------------------------------------------------------------------------------------------
//	Component Event Functions


/* ex)
AFlowOneLineEvent.prototype.click = function()
{
	this._click();
};
*/

//---------------------------------------------------------------------------------------------------