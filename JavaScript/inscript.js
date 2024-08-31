document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const emailErrorMessage = emailInput.nextElementSibling;

    const passwordInput = document.getElementById('password');
    const passwordErrorMessage = passwordInput.nextElementSibling;

    const loginButton= document.getElementById('loginclick');

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValue) {
            emailInput.classList.add('error');
            emailErrorMessage.textContent = '이메일을 입력해주세요.';
            emailErrorMessage.style.display = 'block';
            return false;
        } else if (!emailPattern.test(emailValue)) {
            emailInput.classList.add('error');
            emailErrorMessage.textContent = '잘못된 이메일 형식입니다.';
            emailErrorMessage.style.display = 'block';
            return false;
        } else {
            emailInput.classList.remove('error');
            emailErrorMessage.style.display = 'none';
            return true;
        }
    }

    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        if (!passwordValue) {
            passwordInput.classList.add('error');
            passwordErrorMessage.textContent = '비밀번호를 입력해주세요.';
            passwordErrorMessage.style.display = 'block';
            return false;
        } else if (passwordValue.length < 8) {
            passwordInput.classList.add('error');
            passwordErrorMessage.textContent = '비밀번호를 8자 이상 입력해주세요.';
            passwordErrorMessage.style.display = 'block';
            return false;
        } else {
            passwordInput.classList.remove('error');
            passwordErrorMessage.style.display = 'none';
            return true;
        }
    }

    function validateForm() {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid) {
        loginButton.disabled = false;
        loginButton.classList.add('active')
        } else{
            loginButton.disabled = true;
            loginButton.classList.remove('active')
        }
    }

    loginButton.disabled = true;

    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    emailInput.addEventListener('focusout', validateEmail);
    passwordInput.addEventListener('focusout', validatePassword);

});
