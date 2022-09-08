
/**
Constructor
Do not call Function in Constructor.
*/
function CoBrowsingView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(CoBrowsingView, AView);


CoBrowsingView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here
	
	if(theApp.isAgent)
	{
		this.syncView.removeFromView();
		
		this.tabview.addTab('tab1', 'Source/items/Item1View.lay', 'tab1');
		this.tabview.addTab('tab2', 'Source/items/Item2View.lay', 'tab2');
		this.tabview.addTab('tab3', 'Source/items/Item3View.lay', 'tab3');
	}
	else
	{
		this.tabview.removeFromView();
		this.closeBtn.removeFromView();
	}
	
	
};

CoBrowsingView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	//에이전트 화면의 돔 변경 정보를 참여자들에게 전송한다.
	if(theApp.isAgent)
	{
		var thisObj = this;

		// 2. 옵저버 인스턴스 생성 
		this.observer = new MutationObserver(function(mutations) 
		{ 
			console.log('mutations --------------');
			//console.log(mutations);
			
			//var selView = thisObj.tabview.getSelectedView();
			//var vdom = selView.$ele.buildVDom();
			
			var vdom = $(thisObj.getContainer().viewItem).buildVDom();
			
			var src = JSON.stringify(vdom);
			
			theApp.sendHtml(src);

			/*	
			mutations.forEach(function(mutation) 
			{ 
				console.log(mutation); 
			});
			*/
		
		}); 

		// 3. 옵션 설정 
		var config = 
		{ 
			attributes: true, 			//속성변화감시여부
			childList: true, 			//하위요소 추가 및 삭제 감시여부
			characterData: true,		//요소의 데이터 변화 감시여부
			subtree: true,				//하위 자식 뿐만 아니라 손자 이후 모두 감시여부
			attributeOldValue: true,	//속성변경 전의 내용도 기록에 남김
			characterDataOldValue: true	//요소의 데이터 변경전 내용도 기록	
		}; 

		// 4. 실행 
		//this.observer.observe(this.element, config);	
		//this.observer.observe(this.tabview.element, config);	
		this.observer.observe(this.getContainer().element, config);


		this.tabview.selectTabByIndex(0);
	}
	else
	{
		//AEvent.isFreezing = true;
		
		//theApp.sendEventInfo();
		
		theApp.sendTouchEventInfo(this.getContainer().element);
		
		//this.syncView.loadContainer();
		
	
	}

};

CoBrowsingView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	
};

CoBrowsingView.prototype.onDeactiveDone = function()
{
	AView.prototype.onDeactiveDone.call(this);
	
	
};


CoBrowsingView.prototype.onCloseClick = function(comp, info, e)
{
	if(this.observer) this.observer.disconnect();

	theApp.cobWnd = null;
	this.getContainer().close();
		
	
	//네트웍 전송
	var message = 
	{
		JSON: true,
		id: 'syncEvent',
		info: { eventName: 'cob-end' }
	};
	   
	theApp.qmChat.sendMessage(message);
	

};
