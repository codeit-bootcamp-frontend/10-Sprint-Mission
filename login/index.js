const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const loginButton = document.getElementById('login-button');


// 이메일 유효성 검사
emailInput.addEventListener('focusout', function () {
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
      emailError.textContent = '이메일을 입력해주세요.';
      emailInput.classList.add('error');
  } else if (!validateEmail(emailValue)) {
      emailError.textContent = '잘못된 이메일입니다.';
      emailInput.classList.add('error');
  } else {
      emailError.textContent = '';
      emailInput.classList.remove('error');
  }
  toggleLoginButton();
});


// 이메일 형식 검사 함수
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


// 비밀번호 유효성 검사
passwordInput.addEventListener('focusout', function () {
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === '') {
      passwordError.textContent = '비밀번호를 입력해주세요.';
      passwordInput.classList.add('error');
  } else if (passwordValue.length < 8) {
      passwordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
      passwordInput.classList.add('error');
  } else {
      passwordError.textContent = '';
      passwordInput.classList.remove('error');
  }
  toggleLoginButton();
});


// 비밀번호 보이기 토글
document.addEventListener("click", function(event) {
  if (event.target.closest(".toggle-password")) {
    const toggle = event.target.closest(".toggle-password");
    const passwordField = toggle.previousElementSibling;
    const icon = toggle.querySelector("i");

    const isPassword = passwordField.type === "password";
    passwordField.type = isPassword ? "text" : "password";

    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  }
});


// 로그인 버튼 활성화/비활성화
function toggleLoginButton() {
  const hasError = emailInput.classList.contains('error') || passwordInput.classList.contains('error');

  const isEmpty = emailInput.value.trim() === '' || passwordInput.value.trim() === '';

  if (hasError || isEmpty) {
      loginButton.classList.add('button-off');
      loginButton.classList.remove('button-on');
      loginButton.disabled = true;
  } else {
      loginButton.classList.add('button-on');
      loginButton.classList.remove('button-off');
      loginButton.disabled = false;
  }
}