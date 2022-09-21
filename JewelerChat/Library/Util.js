Util = {

};

// 리스트 아이템 추가 함수
// type = "default" subTitle 문자 형식
// type = "date" subTitle 날짜 형식
Util.addListItem = (type, title, subTitle, listView, url, arr) => {
	switch(type) 
	{
		case "default":
			// Data 객체로 전달될 name, grade
			var firstValue = title;
			var secValue = subTitle;
			var count = listView.getItemCount();
			
			// 할당된 값이 없을때 add하지 않는 조건
			// @@ 추가적인 오류 알림 핸들러 할 것

			// 기존 아이템을 삭제하여 중복되는 아이템을 방지
			listView.removeAllItems();
				
			var dataObj = 
			{
				name: firstValue,
				subName: secValue,
				index: count,
			};
		
			// 데이터는 배열로 넘기기 때문에 객체를 배열에 넣어서 보냄
			arr.push(dataObj);
			listView.addItem(url, arr);
				
			console.log(arr);
	}
};

// 제거 함수를 사용하기 위해 사용할 뷰에서 this._item, owner 컨테이너와, owner의 RootView를 받아온다 
Util.removeListitem = (_item, ownerRootView, ownerView) => {
		//TODO:edit here
	// data 객체에서 객체의 index를 얻어옴
	var itemIndex = _item.itemData.index;
	console.log("itemIndex", itemIndex);
	
	// DetailUserView에 dataArr 배열 객체의 index값과 넘어온 객체 index의 값이 일치하는 index를 찾아 idx변수에 저장
	// listitem을 선택했을 때 보다 정확한 아이템 index를 찾기 위한 작업 
	// (임의로 세팅한 고정 index 값이라 아이템을 삭제하면 유동적으로 인덱스가 바뀌므로 정확한 인덱스를 찾기 위한 추가 과정)
	var idx = ownerRootView.dataArr.findIndex((item, idx) => 
	{
		if(item.index === itemIndex) return idx;
	});
	
	// 위에서 보다 정확한 idx를 찾아 dataArr 배열에서 splice를 이용해 삭제 한다
	ownerRootView.dataArr.filter(item => 
	{
		if(item.index === itemIndex) ownerRootView.dataArr.splice(idx, 1);
	});
	
	// 선택된 아이템을 listview에서 삭제  
	ownerView.removeItem(_item);
}