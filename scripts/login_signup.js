import { isValidEmail, isValidPassword } from "./utils/validate.js";

const form = document.forms[0];
const email = form["email"];
const nickname = form["nickname"];
const password = form["password"];
const passwordConfirm = form["passwordConfirm"];
const submit = form.lastElementChild;

// 폼 유효성 & 활성화 초기화

let isEmailValid = false;
let isNicknameValid = false;
let isPasswordValid = false;
let isPasswordConfirmValid = false;
submit.disabled = true;

// 폼 제출 활성화 판단

function updateSubmit() {
  let isFormValid = isEmailValid && isPasswordValid;

  if (!!nickname)
    isFormValid = isFormValid && isNicknameValid && isPasswordConfirmValid;

  submit.disabled = !isFormValid;
}

// 폼 입력 유효성 판단

function errorChange(input, errorMessage = "") {
  const error = input.parentElement.lastElementChild;

  if (!!errorMessage) {
    input.classList.add("formField__input--error");
    error.classList.add("formField__error--active");
  } else {
    input.classList.remove("formField__input--error");
    error.classList.remove("formField__error--active");
  }
  error.textContent = errorMessage;
}

email.addEventListener("focusout", () => {
  if (!email.value) {
    errorChange(email, "이메일을 입력해 주세요.");
    isEmailValid = false;
  } else if (!isValidEmail(email.value)) {
    errorChange(email, "잘못된 이메일 형식입니다.");
    isEmailValid = false;
  } else {
    errorChange(email);
    isEmailValid = true;
  }

  updateSubmit();
});

nickname?.addEventListener("focusout", () => {
  if (!nickname.value) {
    errorChange(nickname, "닉네임을 입력해 주세요.");
    isNicknameValid = false;
  } else {
    errorChange(nickname);
    isNicknameValid = true;
  }

  updateSubmit();
});

password.addEventListener("focusout", () => {
  if (!password.value) {
    errorChange(password, "비밀번호를 입력해 주세요.");
    isPasswordValid = false;
  } else if (!isValidPassword(password.value)) {
    errorChange(password, "비밀번호를 8자 이상 입력해 주세요.");
    isPasswordValid = false;
  } else {
    errorChange(password);
    isPasswordValid = true;
  }

  updateSubmit();
});

passwordConfirm?.addEventListener("focusout", () => {
  if (!isPasswordValid) {
    errorChange(passwordConfirm, "먼저 위에 적절한 비밀번호를 입력해 주세요.");
    isPasswordConfirmValid = false;
  } else if (!passwordConfirm.value) {
    errorChange(passwordConfirm, "비밀번호를 입력해 주세요.");
    isPasswordConfirmValid = false;
  } else if (!isValidPassword(passwordConfirm.value)) {
    errorChange(passwordConfirm, "비밀번호를 8자 이상 입력해 주세요.");
    isPasswordConfirmValid = false;
  } else if (passwordConfirm.value !== password.value) {
    errorChange(passwordConfirm, "비밀번호가 일치하지 않습니다.");
    isPasswordConfirmValid = false;
  } else {
    errorChange(passwordConfirm);
    isPasswordConfirmValid = true;
  }

  updateSubmit();
});

// 비밀번호 표시 전환

const toggles = document.querySelectorAll(".formField__toggleButton");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const input = toggle.previousElementSibling;
    const icon = toggle.firstElementChild;

    if (input.type === "password") {
      input.type = "text";
      icon.src = "/images/login_signup/eye_open.svg";
      icon.alt = "비밀번호 가리기";
    } else {
      input.type = "password";
      icon.src = "/images/login_signup/eye_close.svg";
      icon.alt = "비밀번호 보기";
    }
  });
});
