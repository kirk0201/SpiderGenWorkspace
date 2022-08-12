
/**
Constructor
Do not call Function in Constructor.
*/
function RegisterView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(RegisterView, AView);


RegisterView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

RegisterView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

RegisterView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

// 정규표현식 유효성 검사
// regex 정규표현식, info change함수, compId Id값 
function RegexChange(regex, info, compId) {
// 	console.log("getText",compId.getText() ==='');
	
	// 텍스트가 없다면 Border를 Default 색상으로
	// 텍스트가 존재한다면 정규식에 따라 색상 변환
	if (compId.getText() ==='') {
		compId.element.style.border = '1px solid #d9d9d9';
	} else {
		if (!regex.exec(info)) {
			compId.element.style.border = '1px solid red';
	} else compId.element.style.border = '2px solid green';

	}
	}

// ID 텍스트필드Change
RegisterView.prototype.onATextFieldChange = function(comp, info, e)
{
	console.log("e", e);
	console.log("info", info);
	console.log("comp", comp);
	
	var idRegex = /^[a-z0-9]{6,12}$/;
	var compId = this.idField;
	
	//  정규표현식 함수 사용
	RegexChange(idRegex, info, compId);
	
	// Id 정규식
/*	
	if (!idRegex.test(info)) {
		console.log("??", this.idField.element.style.border = "1px solid red");
		this.idField.element.style.border = "1px solid red";
		AToast.show("아이디를 확인하세요");
	} else this.idField.element.style.border = "2px solid green";
*/
};

// NickName 텍스트필드Change
RegisterView.prototype.onNickNameFieldChange = function(comp, info, e)
{
	// Nickname 정규식
	// 한글, 영문, 숫자만 허용(한글 2글자 이상, 영문 4자 이상);
	var nickNameRegex = /^[가-힣]{2,6}|[a-z0-9A-Z]{4,10}$/g;
	var compId = this.nickNameField;
	
	RegexChange(nickNameRegex, info, compId);
};

// Password 텍스트필드 Change
RegisterView.prototype.onPasswordField1Change = function(comp, info, e)
{
	var passWordRegex = /^[A-Za-z0-9]{6,12}$/;
	var compId = this.passWordField1;
	
	RegexChange(passWordRegex, info, compId);
	//TODO:edit here

};

// Password 확인 텍스트필드 Change
RegisterView.prototype.onPasswordField2Change = function(comp, info, e)
{
	var passWordRegex = /^[A-Za-z0-9]{6,12}$/;
	var compId = this.passWordField2;
	
	RegexChange(passWordRegex, info, compId);
	//TODO:edit here

};
