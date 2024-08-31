const emailContainer=document.querySelector('#email-input-container')
const emailInput = emailContainer.querySelector('#email')
const emailMsg = emailContainer.querySelector('#email-msg')
const nameContainer=document.querySelector('#name-input-container')
const nameInput = nameContainer.querySelector('#name')
const nameMsg = nameContainer.querySelector('#name-msg')
const passwordContainer=document.querySelector('#password-input-container')
const passwordInput = passwordContainer.querySelector('#password')
const passwordMsg = passwordContainer.querySelector('#password-msg')
const passwordCheckContainer=document.querySelector('#password-check-input-container')
const passwordCheckInput = passwordCheckContainer.querySelector('#password-check')
const passwordCheckMsg = passwordCheckContainer.querySelector('#password-check-msg')
const button = document.querySelector('#signup-button')


emailInput.addEventListener('focusout', emailValidCheck);
nameInput.addEventListener('focusout', nameValidCheck);
passwordInput.addEventListener('focusout', passwordValidCheck);
passwordCheckInput.addEventListener('focusout', passwordCheckValidCheck);

emailInput.addEventListener('focusout', buttonActivate);
nameInput.addEventListener('focusout', buttonActivate);
passwordInput.addEventListener('focusout', buttonActivate);
passwordCheckInput.addEventListener('focusout', buttonActivate);

let emailValid=false;
let nameValid=false;
let passwordValid=false;
let passwordCheckValid=false;

function buttonActivate() {

    if(emailValid&&nameValid&&passwordValid&&passwordCheckValid) { 
      button.disabled = false;
    } 
    else { 
      button.disabled = true; 
    }
}

function emailValidCheck() {
    let email=emailInput.value;
    
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

function nameValidCheck() {
    let name=nameInput.value;
    
    if(name === ""){ 
        nameValid=false;
        nameContainer.classList.add('warning');
        nameMsg.textContent="닉네임을 입력해주세요"
    }else{
        nameValid=true;
        nameContainer.classList.remove('warning');
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

function passwordCheckValidCheck() {
    let passwordCheck=passwordCheckInput.value;
    let password=passwordInput.value;

    if(passwordCheck === password){ 
        passwordCheckValid=true;
        passwordCheckContainer.classList.remove('warning');
    }else{
        passwordCheckValid=false;
        passwordCheckContainer.classList.add('warning');
        passwordCheckMsg.textContent="비밀번호가 일치하지 않습니다"
    }
}
