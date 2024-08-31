document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const emailError = emailInput.nextElementSibling;

    const nicknameInput = document.getElementById('nickname');
    const nicknameError = nicknameInput.nextElementSibling;

    const passwordInput = document.getElementById('password');
    const passwordError = passwordInput.nextElementSibling;

    const repasswordInput = document.getElementById('repassword');
    const repasswordError = repasswordInput.nextElementSibling;

    const loginButton = document.getElementById('loginclick');

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            emailError.textContent = '이메일을 입력해 주세요';
            emailInput.classList.add('error');
            return false;
        } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
            emailError.textContent = '잘못된 이메일 형식입니다';
            emailInput.classList.add('error');
            return false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('error');
            return true;
        }
    }

    function validateNickname() {
        const nicknameValue = nicknameInput.value.trim();
        if (!nicknameValue) {
            nicknameError.textContent = '닉네임을 입력해 주세요';
            nicknameInput.classList.add('error');
            return false;
        } else {
            nicknameError.textContent = '';
            nicknameInput.classList.remove('error');
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

    function validateRepassword() {
        const passwordValue = passwordInput.value.trim();
        const repasswordValue = repasswordInput.value.trim();
        if (repasswordValue !== passwordValue) {
            repasswordError.textContent = '비밀번호가 일치하지 않습니다';
            repasswordInput.classList.add('error');
            return false;
        } else {
            repasswordError.textContent = '';
            repasswordInput.classList.remove('error');
            return true;
        }
    }

    function validateLoginForm() {
        if (validateEmail() && validateNickname() && validatePassword() && validateRepassword()) {
            loginButton.disabled = false;
            loginButton.classList.add('active');
        } else {
            loginButton.disabled = true;
            loginButton.classList.remove('active');
        }
    }

    emailInput.addEventListener('input', validateLoginForm);
    emailInput.addEventListener('focusout', validateEmail);

    nicknameInput.addEventListener('input', validateLoginForm);
    nicknameInput.addEventListener('focusout', validateNickname);

    passwordInput.addEventListener('input', validateLoginForm);
    passwordInput.addEventListener('focusout', validatePassword);

    repasswordInput.addEventListener('input', validateLoginForm);
    repasswordInput.addEventListener('focusout', validateRepassword);
});
