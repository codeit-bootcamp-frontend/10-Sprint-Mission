import {
  showEmailErrorMessage,
  hideEmailErrorMessage,
  showNicknameErrorMessage,
  hideNicknameErrorMessage,
  showPasswordErrorMessage,
  hidePasswordErrorMessage,
  showPasswordCheckErrorMessage,
  hidePasswordCheckErrorMessage,
  togglePasswordIcon,
  togglePasswordCheckIcon
} from './LoginSignupUtils.js';

const loadEvent = new Event('load');
window.addEventListener('load', () => {
  const emailInput = document.querySelector('.email-tag');
  const nicknameInput = document.querySelector('.nickname-tag');
  const passwordInput = document.querySelector('.password-tag');
  const passwordCheckInput = document.querySelector('.password-check-tag');
  const passwordIcon = document.querySelector('.password-icon');
  const passwordCheckIcon = document.querySelector('.password-check-icon');
  const emailErrorMessage = document.querySelector('.email-error-message');
  const nicknameErrorMessage = document.querySelector('.nickname-error-message');
  const passwordErrorMessage = document.querySelector('.password-error-message');
  const passwordCheckErrorMessage = document.querySelector('.password-check-error-message');

  emailInput.addEventListener('focusout', () => showEmailErrorMessage(emailInput, emailErrorMessage));
  emailInput.addEventListener('focusin', () => hideEmailErrorMessage(emailErrorMessage));
  nicknameInput.addEventListener('focusout', () => showNicknameErrorMessage(nicknameInput, nicknameErrorMessage));
  nicknameInput.addEventListener('focusin', () => hideNicknameErrorMessage(nicknameErrorMessage));
  passwordInput.addEventListener('focusout', () => showPasswordErrorMessage(passwordInput, passwordErrorMessage));
  passwordInput.addEventListener('focusin', () => hidePasswordErrorMessage(passwordErrorMessage));
  passwordCheckInput.addEventListener('focusout', () => showPasswordCheckErrorMessage(passwordInput, passwordCheckInput, passwordCheckErrorMessage));
  passwordCheckInput.addEventListener('focusin', hidePasswordCheckErrorMessage(passwordCheckErrorMessage));
  passwordIcon.addEventListener('click', () => togglePasswordIcon(passwordInput, passwordIcon));
  passwordCheckIcon.addEventListener('click', () => togglePasswordCheckIcon(passwordCheckInput, passwordCheckIcon));
})

window.dispatchEvent(loadEvent);