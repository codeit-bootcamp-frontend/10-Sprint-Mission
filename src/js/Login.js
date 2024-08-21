import { 
  showEmailErrorMessage, 
  hideEmailErrorMessage, 
  showPasswordErrorMessage, 
  hidePasswordErrorMessage,
  togglePasswordIcon 
} from './LoginSignupUtils.js';

const loadEvent = new Event('load');
window.addEventListener('load', () => {
  const emailInput = document.querySelector('.email-tag');
  const passwordInput = document.querySelector('.password-tag');
  const passwordIcon = document.querySelector('.password-icon');
  const emailErrorMessage = document.querySelector('.email-error-message');
  const passwordErrorMessage = document.querySelector('.password-error-message');

  emailInput.addEventListener('focusout', () => showEmailErrorMessage(emailInput, emailErrorMessage));
  emailInput.addEventListener('focusin', () => hideEmailErrorMessage(emailErrorMessage));
  passwordInput.addEventListener('focusout', () => showPasswordErrorMessage(passwordInput, passwordErrorMessage));
  passwordInput.addEventListener('focusin', () => hidePasswordErrorMessage(passwordErrorMessage));
  passwordIcon.addEventListener('click', () => togglePasswordIcon(passwordInput, passwordIcon));

})

window.dispatchEvent(loadEvent);