const loadEvent = new Event('load');
window.addEventListener('load', () => {
  const btnStatus = document.querySelector('.login-submit-btn');
  const emailInput = document.querySelector('.email-tag');
  const passwordInput = document.querySelector('.password-tag');
  const passwordCheckInput = document.querySelector('.password-check-tag');
  const nicknameInput = document.querySelector('.nickname-tag');
  const passwordIcon = document.querySelector('.password-icon');
  const passwordCheckIcon = document.querySelector('.password-check-icon');

  const checkInputs = () => {
    if (emailInput.value.trim() !== '' && 
        passwordInput.value.trim() !== '' &&
        passwordCheckInput.value.trim() !== '' &&
        nicknameInput.value.trim() !== '' &&
        (passwordInput.value.trim() == passwordCheckInput.value.trim())
      ) {
        btnStatus.disabled = false;
      } else {
        btnStatus.disabled = true;
      }
  }

  const togglePasswordIcon = () => {
    const type = passwordInput.type == 'password' ? 'text' : 'password';
    passwordInput.type = type;
    passwordIcon.src = type == 'password' ? '/src/assets/img/btn_visibility_off.svg' : '/src/assets/img/btn_visibility_on.svg';
  }

  const togglePasswordCheckIcon = () => {
    const type = passwordCheckInput.type == 'password' ? 'text' : 'password';
    passwordCheckInput.type = type;
    passwordCheckIcon.src = type == 'password' ? '/src/assets/img/btn_visibility_off.svg' : '/src/assets/img/btn_visibility_on.svg';
  }

  emailInput.addEventListener('input', checkInputs);
  passwordInput.addEventListener('input', checkInputs);
  passwordCheckInput.addEventListener('input', checkInputs);
  nicknameInput.addEventListener('input', checkInputs);
  passwordIcon.addEventListener('click', togglePasswordIcon);
  passwordCheckIcon.addEventListener('click', togglePasswordCheckIcon);


})

window.dispatchEvent(loadEvent);