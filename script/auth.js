const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('password-confirm');
const nameInput = document.getElementById('name');
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');

// 재할당 가능하도록 - let
let isEmailValidate = false;
let isPasswordValidate = false;
let isPasswordConfirmValidate = false;
let isNameValidate = false;

// 오류 메시지 
function showError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.style.display = "block";
        input.style.border = "1px solid #f74747";
    }
}

// 상태 초기화
function hideError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.style.display = "none";
        input.style.border = "none";
    }
}

// 이메일 형식 검증
function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    return emailRegex.test(email);
}

// 이메일 검사
function checkEmail() {
    const emailValue = emailInput.value;

    if (!emailValue) {
        showError(emailInput, "email-empty");
    } else if (!validateEmail(emailValue)) {
        isEmailValidate = false;
        hideError(emailInput, "email-empty"); // 두 가지 오류 메세지가 동시에 나타나지 않도록 함
        showError(emailInput, "email-invalidate");
    } else {
        isEmailValidate = true;
        hideError(emailInput, "email-empty");
        hideError(emailInput, "email-invalidate");
    }
    submitButtonInvalidate();
}

if (emailInput) {
    emailInput.addEventListener("focusout", checkEmail);
}

// 비밀번호 검사
function checkPassword() {
    const passwordValue = passwordInput.value;

    if (!passwordValue) {
        showError(passwordInput, "password-empty");
    } else if (passwordValue.length < 8) {
        hideError(passwordInput, "password-empty");
        showError(passwordInput, "password-invalidate");
    } else {
        isPasswordValidate = true;
        hideError(passwordInput, "password-empty");
        hideError(passwordInput, "password-invalidate");
    }
    submitButtonInvalidate();
}

if (passwordInput) {
    passwordInput.addEventListener("focusout", checkPassword);
}

// 닉네임 검사
function checkName() {
    const nameValue = nameInput.value;
    if (!nameValue) {
        showError(nameInput, "name-empty");
        isNameValidate = false;
    } else {
        isNameValidate = true;
        hideError(nameInput, "name-empty");
    }
    submitButtonInvalidate();
}

if (nameInput) {
    nameInput.addEventListener("focusout", checkName);
}

// 비밀번호 확인
function checkPasswordConfirm() {
    const passwordValue = passwordInput.value;
    const passwordConfirmValue = passwordConfirmInput.value;

    if (!passwordConfirmValue) {
        showError(passwordConfirmInput, "password-confirm-empty");
        isPasswordConfirmValidate = false;
    } else if (passwordValue !== passwordConfirmValue) {
        hideError(passwordConfirmInput, "password-confirm-empty");
        showError(passwordConfirmInput, "password-confirm-invalidate");
        isPasswordConfirmValidate = false;
    } else {
        isPasswordConfirmValidate = true;
        hideError(passwordConfirmInput, "password-confirm-empty");
        hideError(passwordConfirmInput, "password-confirm-invalidate");
    }
    submitButtonInvalidate();
}

if (passwordConfirmInput) {
    passwordConfirmInput.addEventListener("focusout", checkPasswordConfirm);
}

// 조건 모두 충족 시 로그인, 회원가입 버튼 활성화
function submitButtonInvalidate() {
    if (signupForm) {
        if (isEmailValidate && isPasswordValidate && isPasswordConfirmValidate && isNameValidate) {
            signupButton.disabled = false;
            window.location.href="/login.html";
        } else {
            signupButton.disabled = true;
        }
    } else if (loginForm) {
        if (isEmailValidate && isPasswordValidate) {
            loginButton.disabled = false;
            window.location.href="/items.html";
        } else {
            loginButton.disabled = true;
        }
    }
}

// 처음에 비활성화 되도록
submitButtonInvalidate();  

// 비밀번호 표시/숨김 함수
function passwordVisibility(event) {
    const button = event.currentTarget; 
    const passwordInput = button.previousElementSibling;
    const visibilityIcon = button;
    const isPasswordVisible = passwordInput.type;

    if (isPasswordVisible === "text") {
        passwordInput.type = "password";
        visibilityIcon.src = "../img/btn_visibility_off.png";
    } else {
        passwordInput.type = "text";
        visibilityIcon.src = "../img/btn_visibility_on.png";
    }
}

const visibilityButtons = document.querySelectorAll('.visibility-btn'); 
visibilityButtons.forEach((button) => 
    button.addEventListener("click", passwordVisibility)
);
