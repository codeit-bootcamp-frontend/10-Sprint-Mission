document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const emailError = emailInput.nextElementSibling;

    const passwordInput = document.getElementById('password');
    const passwordError = passwordInput.nextElementSibling;

    const loginButton = document.getElementById('loginclick');

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            emailError.textContent = '이메일을 입력해 주세요';
            emailInput.classList.add('error');
            return false;
        } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
            emailError.textContent = '잘못된 이메일입니다';
            emailInput.classList.add('error');
            return false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('error');
            return true;
        }
    }

    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        if (!passwordValue) {
            passwordError.textContent = '비밀번호를 입력해 주세요';
            passwordInput.classList.add('error');
            return false;
        } else if (passwordValue.length < 8) {
            passwordError.textContent = '비밀번호를 8자 이상 입력해 주세요';
            passwordInput.classList.add('error');
            return false;
        } else {
            passwordError.textContent = '';
            passwordInput.classList.remove('error');
            return true;
        }
    }

    function validateLoginForm() {
    
        if (validateEmail() && validatePassword()) {
            loginButton.disabled = false;
            loginButton.classList.add('active');
        } else {
            loginButton.disabled = true;
            loginButton.classList.remove('active');
        }
    }

    loginButton.disabled = true;

    emailInput.addEventListener('input', validateLoginForm);
    passwordInput.addEventListener('input', validateLoginForm);

    emailInput.addEventListener('focusout', validateEmail);
    passwordInput.addEventListener('focusout', validatePassword);

});
