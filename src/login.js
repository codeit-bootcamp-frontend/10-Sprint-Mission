import { emptyEmailMsg, invalidEmailMsg, invalidPasswordLengthMsg, passwordMinLength } from './validation.js';

// Elements
const emailInput = document.querySelector('.email');
const emailError = document.querySelector('.email + .input-validation-error');

const passwordInput = document.querySelector('.password');
const passwordError = document.querySelector('.password-container + .input-validation-error');

const submitButton = document.querySelector('.btn-login');

// State tracking
let isEmailValid = false;
let isPasswordValid = false;

// 에러 표시를 업데이트하는 함수
function updateErrorDisplay(inputElement, errorElement, showError) {
  if (showError) {
    inputElement.classList.add('error');
    errorElement.style.visibility = 'visible';
    inputElement.focus();
  } else {
    inputElement.classList.remove('error');
    errorElement.style.visibility = 'hidden';
  }
}

// 에러 메시지를 설정하는 함수
function setErrorMessage(errorElement, message) {
  errorElement.textContent = message;
}

// 이메일 검증 함수
function getEmailErrorMsg(emailValue) {
  if (!emailValue) {
    return emptyEmailMsg;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    return invalidEmailMsg;
  }
  return null;
}

// 비밀번호 검증 함수
function getPasswordErrorMsg(passwordValue) {
  if (!passwordValue || passwordValue.length < passwordMinLength) {
    return invalidPasswordLengthMsg;
  }
  return null;
}

// 유효성 검사 함수
function validateEmail() {
  const emailErrorMsg = getEmailErrorMsg(emailInput.value);
  isEmailValid = !emailErrorMsg;
  setErrorMessage(emailError, emailErrorMsg || '');
  updateErrorDisplay(emailInput, emailError, !!emailErrorMsg);
  updateButtonState();
}

function validatePassword() {
  const passwordErrorMsg = getPasswordErrorMsg(passwordInput.value);
  isPasswordValid = !passwordErrorMsg;
  setErrorMessage(passwordError, passwordErrorMsg || '');
  updateErrorDisplay(passwordInput, passwordError, !!passwordErrorMsg);
  updateButtonState();
}

// 버튼 상태 업데이트 함수
function updateButtonState() {
  submitButton.disabled = !(isEmailValid && isPasswordValid);
}

// 이벤트 리스너
emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);

const form = document.querySelector('.form-login');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  validateEmail();
  validatePassword();

  if (isEmailValid && isPasswordValid) {
    window.location.href = '/items';
  }
});
