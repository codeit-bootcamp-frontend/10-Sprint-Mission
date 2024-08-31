document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const emailErrorMessage = emailInput.nextElementSibling;        
    
    const nicknameInput = document.getElementById('nickname');
    const nicknameErrorMessage = nicknameInput.nextElementSibling;
    
    const passwordInput = document.getElementById('password');
    const passwordErrorMessage = passwordInput.nextElementSibling;
    
    const repasswordInput = document.getElementById('repassword');
    const repasswordErrorMessage = repasswordInput.nextElementSibling;
    
    const signupButton = document.getElementById('loginclick');

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

    function validateNickname() {
        const nicknameValue = nicknameInput.value.trim();
        if (!nicknameValue) {
            nicknameInput.classList.add('error');
            nicknameErrorMessage.textContent = '닉네임을 입력해주세요.';
            nicknameErrorMessage.style.display = 'block';
            return false;
        } else {
            nicknameInput.classList.remove('error');
            nicknameErrorMessage.style.display = 'none';
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

    function validateRepassword() {
        const repasswordValue = repasswordInput.value.trim();
        if (repasswordValue !== passwordInput.value.trim()) {
            repasswordInput.classList.add('error');
            repasswordErrorMessage.textContent = '비밀번호가 일치하지 않습니다.';
            repasswordErrorMessage.style.display = 'block';
            return false;
        } else {
            repasswordInput.classList.remove('error');
            repasswordErrorMessage.style.display = 'none';
            return true;
        }
    }

    function validateForm() {
        const isEmailValid = validateEmail();
        const isNicknameValid = validateNickname();
        const isPasswordValid = validatePassword();
        const isRepasswordValid = validateRepassword();

        if (isEmailValid && isNicknameValid && isPasswordValid && isRepasswordValid) {
            signupButton.classList.add('active');
            signupButton.disabled = false;
        } else {
            signupButton.classList.remove('active');
            signupButton.disabled = true;
        }
    }

    signupButton.disabled = true;

    emailInput.addEventListener('input', validateForm);
    nicknameInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    repasswordInput.addEventListener('input', validateForm);

    emailInput.addEventListener('focusout', validateEmail);
    nicknameInput.addEventListener('focusout', validateNickname);
    passwordInput.addEventListener('focusout', validatePassword);
    repasswordInput.addEventListener('focusout', validateRepassword);
});
