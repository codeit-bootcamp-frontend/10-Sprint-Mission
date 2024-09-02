document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const emailError = emailInput.nextElementSibling;

    const passwordInput = document.getElementById('password');
    const passwordError = passwordInput.nextElementSibling;

    const loginButton = document.getElementById('loginclick');

    loginButton.disabled = true;

    emailInput.addEventListener('focusout', () => {
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            emailError.textContent = '이메일을 입력해 주세요';
            emailInput.classList.add('error');

        } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
            emailError.textContent = '잘못된 이메일입니다';
            emailInput.classList.add('error');
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('error');
        }
    });

    passwordInput.addEventListener('focusout', () => {
        const passwordValue = passwordInput.value.trim();
        if (!passwordValue) {
            passwordError.textContent = '비밀번호를 입력해 주세요';
            passwordInput.classList.add('error');
        } else if (passwordValue.length < 8) {
            passwordError.textContent = '비밀번호를 8자 이상 입력해 주세요';
            passwordInput.classList.add('error');
        } else {
            passwordError.textContent = '';
            passwordInput.classList.remove('error');
        }
    });

    function loginButtonstate() {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
    
        const isEmailValid = /\S+@\S+\.\S+/.test(emailValue);
        const isPasswordValid = passwordValue.length >= 8;

        if (isEmailValid && isPasswordValid) {
            loginButton.disabled=false;
            loginButton.classList.add('active');
        } else {
            loginButton.disabled=true;
            loginButton.classList.remove('active');
        }
    }

    emailInput.addEventListener('input', loginButtonstate);
    passwordInput.addEventListener('input', loginButtonstate);
});
