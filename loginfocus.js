const IdInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const loginButton = document.querySelector('.login_button');
const simpleButton = document.querySelector('.simple_login');

const formState = {
  id: false,
  password: false
};

function showError(input, message) {
  removeError(input);

  const error = document.createElement('span');
  error.classList.add('error-message');
  error.textContent = message;
  error.style.color = 'red';
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


function updateButtonState() {
  if (formState.id && formState.password) {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = '#3692ff';
  } else {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = '#9CA3AF';
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

passwordInput.addEventListener('focusout', () => {
  const passwordValue = passwordInput.value;
  if (passwordValue.length < 8) {
    passwordInput.style.border = '1px solid red';
    showError(passwordInput, '비밀번호를 8자이상 입력해주세요');
    formState.password = false; 
  } else {
    passwordInput.style.border = '1px solid white';
    removeError(passwordInput);
    formState.password = true; 
  }

  updateButtonState();
});

IdInput.addEventListener('focusin', () => {
  IdInput.style.border = '1px solid white';
  removeError(IdInput); 
  removeError(passwordInput); 
});

passwordInput.addEventListener('focusin', () => {
  passwordInput.style.border = '1px solid white';
  removeError(IdInput); 
  removeError(passwordInput); 
});

