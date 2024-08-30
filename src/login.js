import { getEmailErrorMsg, getPasswordErrorMsg, getNicknameErrorMsg } from './validationErrorMessage.js';

// Elements
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email + .input-validation-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('.password-container + .input-validation-error');

const submitButton = document.querySelector('.btn-login');

const visibleIcon = document.querySelector('.visible-icon');
const invisibleIcon = document.querySelector('.invisible-icon');

// State tracking
let isEmailValid = false;
let isPasswordValid = false;

// 에러 표시를 업데이트하는 함수
function updateErrorDisplay(inputElement, errorElement, showError) {
  if (showError) {
    inputElement.classList.add('error');
    errorElement.style.visibility = 'visible';
  } else {
    inputElement.classList.remove('error');
    errorElement.style.visibility = 'hidden';
  }
}

// 에러 메시지를 설정하는 함수
function setErrorMessage(errorElement, message) {
  errorElement.textContent = message;
}

// 유효성 검사 확인 & 에러 표시처리 함수
function validateEmail() {
  const emailErrorMsg = getEmailErrorMsg(emailInput.value);
  isEmailValid = !emailErrorMsg;
  setErrorMessage(emailError, emailErrorMsg ?? '');
  updateErrorDisplay(emailInput, emailError, !!emailErrorMsg);
  updateButtonState();
}

function validatePassword() {
  const passwordErrorMsg = getPasswordErrorMsg(passwordInput.value);
  isPasswordValid = !passwordErrorMsg;
  setErrorMessage(passwordError, passwordErrorMsg ?? '');
  updateErrorDisplay(passwordInput, passwordError, !!passwordErrorMsg);
  updateButtonState();
}

function isValidationCompleted() {
  return isEmailValid && isPasswordValid;
}

// 버튼 상태 업데이트 함수
function updateButtonState() {
  submitButton.disabled = !isValidationCompleted();
}

// 비밀번호 보이기/숨기기 토글 함수
function togglePasswordVisibility() {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';

  visibleIcon.style.display = isPassword ? 'inline' : 'none';
  invisibleIcon.style.display = isPassword ? 'none' : 'inline';
}

// 이벤트 리스너
emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);

visibleIcon.addEventListener('click', togglePasswordVisibility);
invisibleIcon.addEventListener('click', togglePasswordVisibility);

const form = document.querySelector('.form-login');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  validateEmail();
  validatePassword();

  if (isValidationCompleted()) {
    window.location.href = '/items';
  }
});
