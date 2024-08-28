const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('login-button');

//재할당 가능하도록 - let
let isEmailValidate = false;
let isPasswordValidate = false;

//로그인 버튼 초기상태 : 비활성화
submitButton.disabled = true;

//오류 메세지 
function showError(input,errorId)  {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "block";
    input.style.border = "1px solid #f74747";
}

//상태 초기화
function hideError(input, errorId){
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "none";
    input.style.border = "none";
}

//이메일 형식 검증
function validateEmail(email){
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    return emailRegex.test(email);
}

//이메일 검사
function checkEmail() {
    const emailValue = emailInput.value;
    
    if(!emailValue) {
        showError(emailInput, "email-empty");
        console.log('이메일을 입력해주세요');
    } else if(!validateEmail(emailValue)) {
        isEmailValidate = false;
        hideError(emailInput, "email-empty"); //두가지 오류메세지가 동시에 나타나지 않도록 함
        showError(emailInput, "email-invalidate");
        console.log('유효한 이메일을 입력해주세요');
    } else {
        isEmailValidate = true;
        hideError(emailInput, "email-empty");
        hideError(emailInput, "email-invalidate");
        console.log('이메일이 유효합니다');
    }
    loginButtonInvalidate();
}

if(emailInput) { 
    emailInput.addEventListener("focusout",checkEmail);
}

//비밀번호 검사
function checkPassword() {
    const passwordValue = passwordInput.value;

    if(!passwordValue){
        showError(passwordInput, "password-empty");
    } else if(passwordValue.length < 8) {
        isPasswordValidate = false;
        hideError(passwordInput, "password-empty");
        showError(passwordInput, "password-invalidate");
    } else {
        isPasswordValidate = true;
        hideError(passwordInput, "password-empty");
        hideError(passwordInput,"password-invalidate")
    }
    loginButtonInvalidate();
}

if(passwordInput){
    passwordInput.addEventListener("focusout", checkPassword);
}

//조건 미충족시 로그인 버튼 비활성화
function loginButtonInvalidate() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if(isEmailValidate == true && isPasswordValidate == true) {
        submitButton.disabled = false;
    };
}