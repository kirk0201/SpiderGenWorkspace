
/**
 * @hjh
 */

afc.loadScript("Framework/afc/event/AViewEvent.js");

function AFlowThreeLineEvent(acomp)
{
	AViewEvent.call(this, acomp);
	
}
afc.extendsClass(AFlowThreeLineEvent, AViewEvent);


//---------------------------------------------------------------------------------------------------
//	Component Event Functions


/* ex)
AFlowThreeLineEvent.prototype.click = function()
{
	this._click();
};
*/

//---------------------------------------------------------------------------------------------------