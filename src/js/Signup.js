const loadEvent = new Event('load');
window.addEventListener('load', () => {
  const passwordInput = document.querySelector('.password-tag');
  const passwordCheckInput = document.querySelector('.password-check-tag');
  const passwordIcon = document.querySelector('.password-icon');
  const passwordCheckIcon = document.querySelector('.password-check-icon');

  const togglePasswordIcon = () => {
    const type = passwordInput.type == 'password' ? 'text' : 'password';
    passwordInput.type = type;
    passwordIcon.style.backgroundImage = type == 
    'password' ? 
    "url('/src/assets/img/btn_visibility_off.svg')" : 
    "url('/src/assets/img/btn_visibility_on.svg')";
  }

  const togglePasswordCheckIcon = () => {
    const type = passwordCheckInput.type == 'password' ? 'text' : 'password';
    passwordCheckInput.type = type;
    passwordCheckIcon.style.backgroundImage = type == 
    'password' ? 
    "url('/src/assets/img/btn_visibility_off.svg')" : 
    "url('/src/assets/img/btn_visibility_on.svg')";
  }

  passwordIcon.addEventListener('click', togglePasswordIcon);
  passwordCheckIcon.addEventListener('click', togglePasswordCheckIcon);
})

window.dispatchEvent(loadEvent);