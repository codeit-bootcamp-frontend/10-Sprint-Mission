import { isValidEmail, isValidPassword } from "./utils/validate.js";

// 폼 입력 유효성 판단 기능

const email = document.forms[0]["email"];
const nickname = document.forms[0]["nickname"];
const password = document.forms[0]["password"];
const passwordConfirm = document.forms[0]["passwordConfirm"];

function errorChange(input, errorMessage = "") {
  const error = input.parentElement.lastElementChild;

  if (errorMessage) {
    input.classList.add("formField__input--error");
    error.classList.add("formField__error--active");
  } else {
    input.classList.remove("formField__input--error");
    error.classList.remove("formField__error--active");
  }
  error.textContent = errorMessage;
}

email.addEventListener("focusout", () => {
  if (!email.value) errorChange(email, "이메일을 입력해 주세요.");
  else if (!isValidEmail(email.value))
    errorChange(email, "잘못된 이메일 형식입니다.");
  else errorChange(email);
});

nickname?.addEventListener("focusout", () => {
  if (!nickname.value) errorChange(nickname, "닉네임을 입력해 주세요.");
  else errorChange(nickname);
});

password.addEventListener("focusout", () => {
  if (!password.value) errorChange(password, "비밀번호를 입력해 주세요.");
  else if (!isValidPassword(password.value))
    errorChange(password, "비밀번호를 8자 이상 입력해 주세요.");
  else errorChange(password);
});

passwordConfirm?.addEventListener("focusout", () => {
  if (!passwordConfirm.value)
    errorChange(passwordConfirm, "비밀번호를 입력해 주세요.");
  else if (!isValidPassword(password.value))
    errorChange(passwordConfirm, "비밀번호를 8자 이상 입력해 주세요.");
  else if (passwordConfirm.value !== password.value)
    errorChange(passwordConfirm, "비밀번호가 일치하지 않습니다.");
  else errorChange(passwordConfirm);
});

// 비밀번호 토글 기능

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
