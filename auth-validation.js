const input = document.querySelectorAll(".js-input");
const button = document.querySelector(".js-button");
const emailError = document.querySelector(".js-email-error");
const pwError = document.querySelector(".js-pw-error");

function valueCheck(e) {
  !e.target.value ? valueNull(e) : valueDefined(e);
}

function valueNull(e) {
  e.target.classList.add("js-error");
  if (e.target.name === "email") {
    emailError.textContent = "이메일을 입력해주세요";
  } else {
    pwError.textContent = "비밀번호를 입력해주세요";
  }
  // 인풋 값이 없을 경우
}

function rewriteValue(e) {
  if (!e.target.value) {
    e.target.classList.add("invalid");
  }

  //Null 상태에서 재입력할 경우
}

function valueDefined(e) {
  e.target.classList.remove("invalid", "js-error");
  if (e.target.name === "email") {
    emailError.textContent = "";
  } else {
    pwError.textContent = "";
  }
}

function incorrectEmail() {
  // 이메일 형식 오류
}

function incorrectPassword() {
  // 비밀번호 형식 오류
}

function buttonActivation() {}

input.forEach((el) => {
  el.addEventListener("focusout", valueCheck);
});

input.forEach((el) => {
  el.addEventListener("focusin", (e) => {
    if (e.target.classList.contains("js-error")) {
      rewriteValue(e);
    }
  });
});

input.forEach((el) => {
  el.addEventListener("change", valueCheck);
});

button.addEventListener("click", (e) => e.preventDefault());
