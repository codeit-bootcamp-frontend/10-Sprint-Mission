let signupValid = false

//ID 선택하기
const emailInputElement = document.getElementById('email');
const nickInputElement = document.getElementById('nickname');
const pwInputElement = document.getElementById('pw');
const pwCheckInputElement = document.getElementById('pwcheck');
const errorMessage = document.querySelector('.error-message');
const nickErrorMessage = document.querySelector('.error-message-nick');
const pwErrorMessage = document.querySelector('.error-message-pw');
const pwCheckErrorMessage = document.querySelector('.error-message-pwcheck');
const signupElement = document.querySelector('.login-btn')





function emailForm(e) {
  if (emailInputElement.value === '') {
    emailInputElement.classList.add('error');
    errorMessage.textContent = "이메일을 입력해주세요"
    errorMessage.style.display = 'block';
  } else if (!(emailInputElement.value.includes("@")
  && emailInputElement.value.includes("."))) {
    emailInputElement.classList.add('error');
    errorMessage.textContent ="잘못된 이메일 형식입니다."
    errorMessage.style.display = 'block';
  }else{
    emailInputElement.classList.remove('error');
    errorMessage.style.display = 'none';
  };
};

function nickForm(e) {
  if (nickInputElement.value === '') {
    nickInputElement.classList.add('error');
    nickErrorMessage.textContent = "닉네임을 입력해주세요."
    nickErrorMessage.style.display = "block";
  } else {
    nickInputElement.classList.remove('error');
    nickErrorMessage.style.display = 'none';
  };
};

function pwForm(e) {
  if (pwInputElement.value === '') {
    pwInputElement.classList.add('error');
    pwErrorMessage.textContent ="비밀번호를 입력해주세요."
    pwErrorMessage.style.display = 'block';
  } else if (pwInputElement.value.length < 8) {
    pwInputElement.classList.add('error');
    pwErrorMessage.textContent ="비밀번호를 8자 이상 입력해주세요."
    pwErrorMessage.style.display = 'block';
  }else{
    pwInputElement.classList.remove('error');
    pwErrorMessage.style.display = 'none';
  };
};

function removeMessage(e){
  if(e.target.id === "email"){
    errorMessage.style.display = 'none';  
  } else if(e.target.id === "nickname"){
    nickErrorMessage.style.display = 'none';
  } else if(e.target.id === "pw"){
    pwErrorMessage.style.display = 'none';
  } else{
    pwCheckErrorMessage.style.display = 'none';
  };
};

function pwValid(e) {
  if (!(pwInputElement.value === pwCheckInputElement.value)) {
    pwCheckInputElement.classList.add('error');
    pwCheckErrorMessage.textContent = "비밀번호가 일치하지 않습니다.."
    pwCheckErrorMessage.style.display = 'block';
  }else{
    pwCheckInputElement.classList.remove('error');
    pwCheckErrorMessage.style.display = 'none';
  };
}

function activateSignup(e){
  if(
    emailInputElement.classList.contains('error') 
    || nickInputElement.classList.contains('error')
    || pwInputElement.classList.contains('error')
    || pwCheckInputElement.classList.contains('error')
  ) {
    signupElement.style.backgroundColor = "#9CA3AF"
  } else if (
    emailInputElement.value ==='' 
    || nickInputElement.value ===''
    || pwInputElement.value ===''
    || pwCheckInputElement.value === ''
  ) {
    signupElement.style.backgroundColor = "#9CA3AF"
  } else {
    signupElement.style.backgroundColor = "#3692FF"
    signupValid = true
  }
}



emailInputElement.addEventListener('blur', emailForm);
nickInputElement.addEventListener('blur', nickForm);
pwInputElement.addEventListener('blur', pwForm);
pwCheckInputElement.addEventListener('blur', pwValid);

emailInputElement.addEventListener('focus',removeMessage)
nickInputElement.addEventListener('focus',removeMessage)
pwInputElement.addEventListener('focus',removeMessage)
pwCheckInputElement.addEventListener('focus',removeMessage)


emailInputElement.addEventListener('blur', activateSignup)
nickInputElement.addEventListener('blur', activateSignup)
pwInputElement.addEventListener('blur', activateSignup)
pwCheckInputElement.addEventListener('blur', activateSignup)

pwInputElement.addEventListener('change',pwValid);


function signupButton(e){
  if(signupValid){
    window.location.href = "/login.html"
  }
}

signupElement.addEventListener("click",signupButton)