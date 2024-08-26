import { 
  showEmailErrorMessage, 
  hideEmailErrorMessage, 
  showPasswordErrorMessage, 
  hidePasswordErrorMessage,
  togglePasswordIcon,
  routeToItems,
} from './LoginSignupUtils.js';

const loadEvent = new Event('load');
window.addEventListener('load', () => {
  const emailInput = document.querySelector('.email-tag');
  const passwordInput = document.querySelector('.password-tag');
  const passwordIcon = document.querySelector('.password-icon');
  const emailErrorMessage = document.querySelector('.email-error-message');
  const passwordErrorMessage = document.querySelector('.password-error-message');
  const loginForm = document.querySelector('.login-form');
  const loginSubmitBtn = document.querySelector('.login-submit-btn');

  emailInput.addEventListener('focusout', () => showEmailErrorMessage(emailInput, emailErrorMessage));
  emailInput.addEventListener('focusin', () => hideEmailErrorMessage(emailErrorMessage));
  passwordInput.addEventListener('focusout', () => showPasswordErrorMessage(passwordInput, passwordErrorMessage));
  passwordInput.addEventListener('focusin', () => hidePasswordErrorMessage(passwordErrorMessage));
  passwordIcon.addEventListener('click', () => togglePasswordIcon(passwordInput, passwordIcon));
  loginForm.addEventListener('submit', (event) => {
    let bubblingFlag = routeToItems(emailInput, passwordInput, emailErrorMessage, passwordErrorMessage)
    if(bubblingFlag) {
      event.preventDefault();
      loginSubmitBtn.blur();
      showEmailErrorMessage(emailInput, emailErrorMessage);
      showPasswordErrorMessage(passwordInput, passwordErrorMessage);
    } else {
      event.preventDefault();
      window.location.href = '/src/pages/items/';
    }
  });
})

window.dispatchEvent(loadEvent);