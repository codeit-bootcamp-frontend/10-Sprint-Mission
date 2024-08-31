const emailInput = document.querySelector('input[name="email"]');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="password-repeat"]');
const emailError = document.querySelector('.email-error');
const usernameError = document.querySelector('.username-error');
const passwordError = document.querySelector('.password-error');
const confirmPasswordError = document.querySelector('.confirm-password-error');
const signupButton = document.getElementById('signup-button');


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
  toggleSignupButton();
});


// 이메일 형식 검사 함수
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


// 닉네임 유효성 검사
usernameInput.addEventListener('focusout', function () {
  const usernameValue = usernameInput.value.trim();
  if (usernameValue === '') {
      usernameError.textContent = '닉네임을 입력해주세요.';
      usernameInput.classList.add('error');
  } else {
     usernameError.textContent = '';
     usernameInput.classList.remove('error');
  }
  toggleSignupButton();
});


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
  toggleSignupButton();
});


// 비밀번호 확인 유효성 검사
confirmPasswordInput.addEventListener('focusout', function () {
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  if (confirmPasswordValue === '') {
    confirmPasswordError.textContent = '비밀번호를 다시 한 번 입력해주세요.';
    confirmPasswordInput.classList.add('error');
  } else if (passwordValue.length < 8) {
    confirmPasswordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
    confirmPasswordError.classList.add('error');
  } 
    else if (passwordValue !== confirmPasswordValue) {
    confirmPasswordError.textContent = '비밀번호가 일치하지 않습니다.';
    confirmPasswordInput.classList.add('error');
  } else {
    confirmPasswordError.textContent = '';
    confirmPasswordInput.classList.remove('error');
  }
  toggleSignupButton();
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


// 회원가입 버튼 활성화/비활성화
function toggleSignupButton() {
  const hasError = emailInput.classList.contains('error') || passwordInput.classList.contains('error') || 
                   usernameInput.classList.contains('error') || confirmPasswordInput.classList.contains('error');

  const isEmpty = emailInput.value.trim() === '' || passwordInput.value.trim() === '' || 
                  usernameInput.value.trim() === '' || confirmPasswordInput.value.trim() === '';

  if (hasError || isEmpty) {
     signupButton.classList.add('button-off');
     signupButton.classList.remove('button-on');
     signupButton.disabled = true;
  } else {
     signupButton.classList.add('button-on');
     signupButton.classList.remove('button-off');
     signupButton.disabled = false;
  }
}