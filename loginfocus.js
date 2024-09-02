const IdInput = document.querySelector('.username');
const PasswordInput = document.querySelector('.password');
const loginButton = document.querySelector('.login_button');
const simpleButton = document.querySelector('.simple_login');

let formState = {
  id: false,
  password: false
};

// 버튼 상태 및 배경색을 업데이트하는 함수
function updateButtonState() {
  if (formState.id && formState.password) {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = '#3692ff';
  } else {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = '#9CA3AF';
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

IdInput.addEventListener('focusin', (event) => {
  IdInput.style.border = '1px solid white';
  removeError(IdInput); 
});

PasswordInput.addEventListener('focusin', (event) => {
  PasswordInput.style.border = '1px solid white';
  removeError(PasswordInput); 
});

function showError(input, message) {
  removeError(input);

  const error = document.createElement('span');
  error.classList.add('error-message');
  error.textContent = message;

  input.parentNode.insertBefore(error, input.nextSibling);
  simpleButton.style.marginTop = '48px';
}


function removeError(input) {
  const existingError = input.parentNode.querySelector('.error-message');
  
  if (existingError) {
    existingError.remove();
  }
  simpleButton.style.marginTop = '36px';
}
