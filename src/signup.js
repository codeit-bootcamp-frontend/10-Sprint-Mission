import { getEmailErrorMsg, getPasswordErrorMsg, getPasswordMatchErrorMsg, getNicknameErrorMsg } from './validationErrorMessage.js';

// Elements
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email + .input-validation-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('.password-container + .input-validation-error');
const passwordMatchInput = document.querySelector('#password-match');
const passwordMatchError = document.querySelector('.password-match-container + .input-validation-error');

const submitButton = document.querySelector('.btn-login');

const visibleIcon = document.querySelector('.visible-icon');
const invisibleIcon = document.querySelector('.invisible-icon');
const matchVisibleIcon = document.querySelector('.match-visible-icon');
const matchInvisibleIcon = document.querySelector('.match-invisible-icon');

const nicknameInput = document.querySelector('#nickname');
const nicknameError = document.querySelector('#nickname + .input-validation-error');

// State tracking
let isEmailValid = false;
let isNicknameValid = false;
let isPasswordValid = false;
let isPasswordMatchValid = false;

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

function validateNickname() {
  const nicknameErrorMsg = getNicknameErrorMsg(nicknameInput.value);
  isNicknameValid = !nicknameErrorMsg;
  setErrorMessage(nicknameError, nicknameErrorMsg ?? '');
  updateErrorDisplay(nicknameInput, nicknameError, !!nicknameErrorMsg);
  updateButtonState();
}

function validatePassword() {
  const passwordErrorMsg = getPasswordErrorMsg(passwordInput.value);
  isPasswordValid = !passwordErrorMsg;
  setErrorMessage(passwordError, passwordErrorMsg ?? '');
  updateErrorDisplay(passwordInput, passwordError, !!passwordErrorMsg);
  updateButtonState();
}

function validatePasswordMatch() {
  const passwordMatchErrorMsg = getPasswordMatchErrorMsg(passwordInput.value, passwordMatchInput.value);
  isPasswordMatchValid = !passwordMatchErrorMsg;
  setErrorMessage(passwordMatchError, passwordMatchErrorMsg ?? '');
  updateErrorDisplay(passwordMatchInput, passwordMatchError, !!passwordMatchErrorMsg);
  updateButtonState();
}

function isValidationCompleted() {
  return isEmailValid && isNicknameValid && isPasswordValid && isPasswordMatchValid;
}

// 버튼 상태 업데이트 함수
function updateButtonState() {
  submitButton.disabled = !isValidationCompleted();
}

// 비밀번호, 비밀번호 확인 보이기/숨기기 토글 함수
function toggleVisibility(inputElement, visibleIcon, invisibleIcon) {
  const isPassword = inputElement.type === 'password';
  inputElement.type = isPassword ? 'text' : 'password';

  visibleIcon.style.display = isPassword ? 'inline' : 'none';
  invisibleIcon.style.display = isPassword ? 'none' : 'inline';
}

// 이벤트 리스너
emailInput.addEventListener('focusout', validateEmail);
nicknameInput.addEventListener('focusout', validateNickname);
passwordInput.addEventListener('focusout', validatePassword);
passwordMatchInput.addEventListener('focusout', validatePasswordMatch);

const bindVisibilityToggle = (inputElement, visibleIcon, invisibleIcon) => {
  visibleIcon.addEventListener('click', () => toggleVisibility(inputElement, visibleIcon, invisibleIcon));
  invisibleIcon.addEventListener('click', () => toggleVisibility(inputElement, visibleIcon, invisibleIcon));
};
bindVisibilityToggle(passwordInput, visibleIcon, invisibleIcon);
bindVisibilityToggle(passwordMatchInput, matchVisibleIcon, matchInvisibleIcon);

const form = document.querySelector('.form-login');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  validateEmail();
  validatePassword();
  validatePasswordMatch();

  if (isValidationCompleted()) {
    window.location.href = '/signup';
  }
});
