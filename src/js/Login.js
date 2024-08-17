const loadEvent = new Event('load');
window.addEventListener('load', () => {
  console.log('이벤트 발생');
  const btnStatus = document.querySelector('.login-submit-btn');
  const emailInput = document.querySelector('.email-tag');
  const passwordInput = document.querySelector('.password-tag');

  const checkInputs = () => {
    console.log('인풋이벤트');
    if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') btnStatus.disabled = false;
    else btnStatus.disabled = true;
  }

  emailInput.addEventListener('input', checkInputs);
  passwordInput.addEventListener('input', checkInputs);
})

window.dispatchEvent(loadEvent);