const emailContainer=document.querySelector('#email-input-container')
const emailInput = emailContainer.querySelector('#email')
const emailMsg = emailContainer.querySelector('#email-msg')
const passwordContainer=document.querySelector('#password-input-container')
const passwordInput = passwordContainer.querySelector('#password')
const passwordMsg = passwordContainer.querySelector('#password-msg')
const button = document.querySelector('#login-button')


emailInput.addEventListener('focusout', emailValidCheck);
passwordInput.addEventListener('focusout', passwordValidCheck);

emailInput.addEventListener('focusout', buttonActivate);
passwordInput.addEventListener('focusout', buttonActivate);

let emailValid=false;
let passwordValid=false;

function buttonActivate() {
    // 제출 버튼 활성화/비활성화
    // 처음 화면 구성될때 활성화 상태로 표현되는 문제 수정필요
    if(emailValid&&passwordValid) { 
      button.disabled = false;
    } 
    else { 
      button.disabled = true; 
    }
}

function emailValidCheck() {
    let email=emailInput.value;
    
    // 1. warning 클래스를 container에 추가/삭제 하여 메세지와 붉은테두리 노출여부 결정
    // 2. 케이스에 따라 메세지 멘트 변경
    if(email === ""){ 
        emailValid=false;
        emailContainer.classList.add('warning');
        emailMsg.textContent="이메일을 입력해주세요"
    }else if(!emailRegTest(email)) {
        emailValid=false;
        emailContainer.classList.add('warning');
        emailMsg.textContent="잘못된 이메일 형식입니다"
    }else{
        emailValid=true;
        emailContainer.classList.remove('warning');
    }
}

function emailRegTest(email){     
    //이메일 형식 검사(regular expression test)
	regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!regex.test(email)){ 
		return false; 
	}else{
		return true;
	}
}

function passwordValidCheck() {
    let password=passwordInput.value;

    if(password === ""){ 
        passwordValid=false;
        passwordContainer.classList.add('warning');
        passwordMsg.textContent="비밀번호를 입력해주세요"
    }else if(password.length < 8) {
        passwordValid=false;
        passwordContainer.classList.add('warning');
        passwordMsg.textContent="비밀번호를 8자 이상 입력해주세요"
    }else{
        passwordValid=true;
        passwordContainer.classList.remove('warning');
    }
}
