const loadEvent = new Event('load');
window.addEventListener('load', () => {
  const passwordInput = document.querySelector('.password-tag');
  const passwordIcon = document.querySelector('.password-icon');

  const togglePasswordIcon = () => {
    const type = passwordInput.type == 'password' ? 'text' : 'password';
    passwordInput.type = type;
    passwordIcon.src = type == 'password' ? '/src/assets/img/btn_visibility_off.svg' : '/src/assets/img/btn_visibility_on.svg';
  }

  passwordIcon.addEventListener('click', togglePasswordIcon);
})

window.dispatchEvent(loadEvent);