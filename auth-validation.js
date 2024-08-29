const form = document.querySelector(".js-form");
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

function valueValidation() {
  input.forEach((el) => {
    el.name === "email" ? emailCheck(el) : pwCheck(el);
  });
}

function emailCheck(el) {
  if (!el.value) {
    el.classList.add("js-error");
    emailError.textContent = "이메일을 입력해주세요";
  } else {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if (pattern.test(el.value)) {
    } else {
      el.classList.add("invalid", "js-error");
      emailError.textContent = "잘못된 이메일 형식입니다";
    }
  }
  // 이메일 형식 체크
}

function pwCheck(el) {
  if (!el.value) {
    el.classList.add("js-error");
    pwError.textContent = "비밀번호를 입력해주세요";
  } else {
    if (el.value.length > 8) {
    } else {
      el.classList.add("invalid", "js-error");
      pwError.textContent = "비밀번호를 8자 이상 입력해주세요";
    }
  }
  buttonActivation();

  // 비밀번호 형식 체크
}

function buttonActivation() {}

// 이벤트 리스너
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

button.addEventListener("click", (e) => {
  e.preventDefault();
  valueValidation();
});
