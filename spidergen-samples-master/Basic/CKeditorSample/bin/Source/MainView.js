
//---------------------------------------------------------------------------------------
//	프로젝트의 Assets/ckeditor 폴더에 ck에디터 관련 라이브러리 파일을 바로 추가해도 되지만 
//	빌드 시간이 오래 걸리므로 폴더만 만들어 놓는다.
//	빌드 후에 Assets/ckeditor 폴더에 있는 ck에디터 관련 파일을 bin/Assets/ckeditor 에 넣어준다. 
//	(최초 한번만 넣어주면 됨.)
//---------------------------------------------------------------------------------------

//다음은 필요한 자바스크립트 파일을 동적으로 로딩하는 코드이다.
//필요한 시점에 로드하면 된다. 여러번 호출해도 중복으로 로드되지 않는다. 
// afc.loadScript('Assets/ckeditor/ckeditor.js');
afc.loadScript('Assets/ckeditor5/build/ckeditor.js');
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainView.prototype.onInitDone = function()
{ 
	AView.prototype.onInitDone.call(this);
// 	console.log(this);
	//여기서 ck에디터를 적용한다.
	//이후는 ck에이터 매뉴얼을 참고하여 적용한다.
/*
	var CKEDITOR = ClassicEditor.create(this.ckeditor.getElementId())
	.then(editor => {
		console.log(editor);
	});
*/
/*	ClassicEditor.create(this.ckeditor.getElementId())
	.then(editor => {
		console.log(editor);
	})
	.catch(err => {
		console.log(err);
	});*/
// 	console.log(CKEDITOR);
	ClassicEditor.create(this.ckeditor.getElement(), { height: 500 });
//  	CKEDITOR.replace(this.ckeditor.getElementId() , { height: 500 });
	
	//this.ckeditor 는 ATextArea 이다.
};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
