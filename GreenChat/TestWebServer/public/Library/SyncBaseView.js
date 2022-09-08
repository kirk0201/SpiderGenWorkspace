
/**
Constructor
Do not call Function in Constructor.
*/
function SyncBaseView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SyncBaseView, AView);


SyncBaseView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SyncBaseView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	// this.$ele 본인도 포함시키기 위해 addBack
	this.$ele.find('div').addBack().on('scroll', function(event)
	{
		if(this.ignoreScrollEvent)
		{
			this.ignoreScrollEvent = false;
			return;
		}
		
		theApp.sendScrollEvent(this);
	
	});
	

};
