const IdInput = document.querySelector('.sign_input_email');
const nicknameInput = document.querySelector('.sign_input_nickname');
const PasswordInput = document.querySelector('.sign_input_password');
const repasswordInput = document.querySelector('.sign_input_repassword');
const signinButton = document.querySelector('.button');

const formState = {
  id: false,
  password: false,
  nickname: false,
  repassword: false
};

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


IdInput.addEventListener('focusout', () => {
  const emailValue = IdInput.value;
  if (emailValue.length === 0) {
    IdInput.style.border = '1px solid red';
    showError(IdInput, '잘못된 이메일 형식입니다'); 
    formState.id = false;
  } 
  else if(!(emailValue.includes('@') && emailValue.includes('.'))){
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

PasswordInput.addEventListener('focusout', () => {
  const passwordValue = PasswordInput.value;
  if (passwordValue.length < 8) {
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

nicknameInput.addEventListener('focusout',() => {
  const nameValue = nicknameInput.value;
  if(nameValue.length === 0){
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

repasswordInput.addEventListener('focusout',() => {
  const repasswordValue = repasswordInput.value;
  if(repasswordValue.length === 0 || PasswordInput.value !== repasswordValue){
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

IdInput.addEventListener('focusin', () => {
  IdInput.style.border = '1px solid white';
  removeError(IdInput); 
});

PasswordInput.addEventListener('focusin', () => {
  PasswordInput.style.border = '1px solid white';
  removeError(PasswordInput); 
});

nicknameInput.addEventListener('focusin',() => {
  nicknameInput.style.border = '1px solid white';
  removeError(nicknameInput);
})

repasswordInput.addEventListener('focusin',() => {
  repasswordInput.style.border = '1px solid white';
  removeError(repasswordInput);
})

