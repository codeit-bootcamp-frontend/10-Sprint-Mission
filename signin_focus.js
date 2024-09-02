const IdInput = document.querySelector('.sign_input_email');
const nicknameInput = document.querySelector('.sign_input_nickname');
const PasswordInput = document.querySelector('.sign_input_password');
const repasswordInput = document.querySelector('.sign_input_repassword');
const signinButton = document.querySelector('.button');

let formState = {
  id: false,
  password: false,
  nickname: false,
  repassword: false
};

// 버튼 상태 및 배경색을 업데이트하는 함수
function updateButtonState() {
  if (formState.id && formState.password 
    && formState.nickname && formState.repassword) {
      signinButton.disabled = false;
      signinButton.style.backgroundColor = '#3692ff';
  } else {
    signinButton.disabled = true;
    signinButton.style.backgroundColor = '#9CA3AF';
  }
}

IdInput.addEventListener('focusout', (event) => {
  const email = IdInput.value;
  if (email.length === 0) {
    IdInput.style.border = '1px solid red';
    showError(IdInput, '잘못된 이메일 형식입니다'); 
    formState.id = false;
  } 
  else if(!(email.includes('@') && email.includes('.'))){
    IdInput.style.border = '1px solid red';
    showError(IdInput, '잘못된 이메일 형식입니다'); 
    formState.id = false;
  }
  else {
    formState.id = true;
    IdInput.style.border = '1px solid white';
    removeError(IdInput); 
  }

  updateButtonState();
});

PasswordInput.addEventListener('focusout', (event) => {
  const password = PasswordInput.value;
  if (password.length < 8) {
    PasswordInput.style.border = '1px solid red';
    showError(PasswordInput, '비밀번호를 8자이상 입력해주세요');
    formState.password = false; 
  } else {
    PasswordInput.style.border = '1px solid white';
    removeError(PasswordInput);
    formState.password = true; 
  }

  updateButtonState();
});

nicknameInput.addEventListener('focusout',(event) => {
  const name = nicknameInput.value;
  if(name.length === 0){
    nicknameInput.style.border ='1px solid red';
    showError(nicknameInput,'닉네임을 입력해주세요.');
    formState.nickname = false;
  }else{
    formState.nickname = true;
    nicknameInput.style.border = '1px solid white';
    removeError(nicknameInput);
  }
  updateButtonState();
});

repasswordInput.addEventListener('focusout',(event) => {
  const repassword = repasswordInput.value;
  if(repassword.length === 0 || PasswordInput.value !== repassword){
    repasswordInput.style.border ='1px solid red';
    showError(repasswordInput,'비밀번호를 다시 입력해주세요.');
    formState.repassword = false;
  }else{
    formState.repassword = true;
    repasswordInput.style.border = '1px solid white';
    removeError(repasswordInput);
  }
  updateButtonState();
});

IdInput.addEventListener('focusin', (event) => {
  IdInput.style.border = '1px solid white';
  removeError(IdInput); 
});

PasswordInput.addEventListener('focusin', (event) => {
  PasswordInput.style.border = '1px solid white';
  removeError(PasswordInput); 
});

nicknameInput.addEventListener('focusin',(event) => {
  nicknameInput.style.border = '1px solid white';
  removeError(nicknameInput);
})

repasswordInput.addEventListener('focusin',(event) => {
  repasswordInput.style.border = '1px solid white';
  removeError(repasswordInput);
})

function showError(input, message) {
  removeError(input);

  const error = document.createElement('span');
  error.classList.add('error-message');
  error.textContent = message;

  input.parentNode.insertBefore(error, input.nextSibling);
}


function removeError(input) {
  const existingError = input.parentNode.querySelector('.error-message');
  
  if (existingError) {
    existingError.remove();
  }
}
