const emailInputElement = document.querySelector('#email');
const pwInputElement = document.querySelector('#pw');
const errorMessage = document.querySelector('.error-message');
const pwErrorMessage = document.querySelector('.error-message-pw');

function emailForm(e) {
  if (emailInputElement.value === '') {
    emailInputElement.classList.add('error');
    errorMessage.textContent ="이메일을 입력해주세요."
    errorMessage.style.display = 'block';
  } else if (!(emailInputElement.value.includes("@")
  && emailInputElement.value.includes("."))) {
    emailInputElement.classList.add('error');
    errorMessage.textContent ="잘못된 이메일 형식입니다."
    errorMessage.style.display = 'block';
  }else{
    emailInputElement.classList.remove('error');
    errorMessage.style.display = 'none';
  }
}

function pwForm(e) {
  console.log("focus out 발생")
  // 이메일 input이 비어있음
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
  }
}

function removeMessage(e){
  if(e.target.id === "email"){
    errorMessage.style.display = 'none';  
  }else{
    pwErrorMessage.style.display = 'none';
  }
}


emailInputElement.addEventListener('blur', emailForm)
emailInputElement.addEventListener('focus', removeMessage)

pwInputElement.addEventListener('blur', pwForm)
pwInputElement.addEventListener('focus', removeMessage)

// ----------------------------------------------------------

const loginElement = document.querySelector("#login")

function activateLogin(e){
  if(emailInputElement.classList.contains('error') 
    || pwInputElement.classList.contains('error')){
      loginElement.style.backgroundColor = "#9CA3AF"
      
  } else if(emailInputElement.value === '' || pwInputElement.value === ''){
      loginElement.style.backgroundColor = "#9CA3AF"
  }else{
      loginElement.style.backgroundColor = "#3692FF"
  }
}

pwInputElement.addEventListener('blur', activateLogin)
emailInputElement.addEventListener('blur', activateLogin)



