document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('password-error');
  const loginButton = document.getElementById('login-button');
  const passwordToggle = document.getElementById('password-toggle');

  emailInput.addEventListener('blur', handleEmailBlur);
  passwordInput.addEventListener('keydown', handlePasswordKeydown);
  passwordInput.addEventListener('blur', handlePasswordBlur);
  loginButton.addEventListener('click', handleLogin);
  emailInput.addEventListener('keydown', handleEnterKey);
  passwordInput.addEventListener('keydown', handleEnterKey);
  passwordToggle.addEventListener('click', handlePasswordToggle);

  function handleEmailBlur() {
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
      showError(emailInput, emailError, '이메일을 입력해주세요.');
    } else if (!isValidEmail(emailValue)) {
      showError(emailInput, emailError, '잘못된 이메일 형식입니다.');
    } else {
      hideError(emailInput, emailError);
    }
    toggleLoginButton();
  }

  function isValidEmail(email) {
    // 간단한 이메일 형식 검사 정규식
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function handlePasswordBlur() {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === '') {
      showError(passwordInput, passwordError, '비밀번호를 입력해주세요.');
    } else if (passwordValue.length < 8) {
      showError(
        passwordInput,
        passwordError,
        '비밀번호를 8자 이상 입력해주세요.'
      );
    } else {
      hideError(passwordInput, passwordError);
    }
    toggleLoginButton();
  }

  function handlePasswordKeydown(event) {
    if (event.code === 'Space') {
      event.preventDefault(); // 스페이스바 입력을 막음
    }
    toggleLoginButton();
  }

  function showError(inputElement, errorElement, message) {
    inputElement.classList.add('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }

  function hideError(inputElement, errorElement) {
    inputElement.classList.remove('error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }

  function toggleLoginButton() {
    const isEmailValid =
      emailInput.value.trim() !== '' && emailError.textContent === '';

    const isPasswordValid =
      passwordInput.value.trim() !== '' && passwordError.textContent === '';

    if (isEmailValid && isPasswordValid) {
      loginButton.disabled = false;
      loginButton.classList.add('enabled');
    } else {
      loginButton.disabled = true;
      loginButton.classList.remove('enabled');
    }
  }

  function handleLogin(event) {
    event.preventDefault();

    if (!loginButton.disabled) {
      window.location.href = '/items';
    }
  }

  function handleEnterKey(event) {
    if (event.key === 'Enter' || event.code === 'NumpadEnter') {
      if (event.target === emailInput) {
        handleEmailBlur(); // 이메일 유효성 검사 수행
      } else if (event.target === passwordInput) {
        handlePasswordBlur(); // 비밀번호 유효성 검사 수행
      }

      toggleLoginButton(); // 로그인 버튼 상태 업데이트
      if (!loginButton.disabled) {
        handleLogin(event); // 로그인 처리
      }
    }
  }

  function handlePasswordToggle() {
    const passwordInput = document.getElementById('password');
    const passwordToggleOn = document.getElementById('password-toggle-on');
    const passwordToggleOff = document.getElementById('password-toggle-off');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggleOn.classList.add('visible');
      passwordToggleOff.classList.remove('visible');
    } else {
      passwordInput.type = 'password';
      passwordToggleOn.classList.remove('visible');
      passwordToggleOff.classList.add('visible');
    }
  }

  toggleLoginButton();
});
