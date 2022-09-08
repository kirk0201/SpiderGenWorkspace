
/**
 * @hjh
 */

afc.loadScript("Framework/afc/event/AViewEvent.js");

function AFlowTwoLineEvent(acomp)
{
	AViewEvent.call(this, acomp);
	
}
afc.extendsClass(AFlowTwoLineEvent, AViewEvent);


//---------------------------------------------------------------------------------------------------
//	Component Event Functions


/* ex)
AFlowTwoLineEvent.prototype.click = function()
{
	this._click();
};
*/

//---------------------------------------------------------------------------------------------------