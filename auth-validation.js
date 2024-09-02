// 비밀번호 관련 기능 모듈 가져오기
import { pw } from "./toggle-pw.js";

// DOM 요소 참조
const form = document.querySelector(".js-form");
const input = document.querySelectorAll(".js-input");
const button = document.querySelector(".js-button");
const emailError = document.querySelector(".js-email-error");
const pwError = document.querySelector(".js-pw-error");
const nicknameError = document.querySelector(".js-nickname-error");
const pwCheckError = document.querySelector(".js-pw-check-error");
const pwCheck = document.querySelector(".js-pw-check");

// 유효성 검사 결과
const PASSED = 0;
const FAILED = 1;
let valueStatus = [];

// 이벤트 핸들러
function valueCheck(e) {
  !e.target.value ? setInvalid(e.target) : setValid(e.target);
}

function rewriteValue(e) {
  if (!e.target.value) {
    e.target.classList.add("invalid");
  }
}

function setValid(el, errorElement) {
  el.classList.remove("invalid", "js-error");
  if (errorElement) errorElement.textContent = "";
}

function setInvalid(el, errorElement, message) {
  el.classList.add("invalid", "js-error");
  if (errorElement) errorElement.textContent = message;
}

// 유효성 검사
function valueValidation() {
  valueStatus = []; // 유효성 검사 전 초기화

  input.forEach((el) => {
    switch (el.name) {
      case "email":
        emailValidation(el);
        break;
      case "password":
      case "password-check":
        pwValidation(el);
        break;
      case "nickname":
        el.value
          ? setValid(el, nicknameError)
          : setInvalid(el, nicknameError, "닉네임을 입력해주세요");
        break;
    }
  });

  if (pwCheck) {
    pwMatch();
  } else buttonActivation();
}

function emailValidation(el) {
  if (!el.value) {
    setInvalid(el, emailError, "이메일을 입력해주세요");
    valueStatus.push(FAILED);
  } else {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if (pattern.test(el.value)) {
      setValid(el, emailError);
      valueStatus.push(PASSED);
    } else {
      setInvalid(el, emailError, "잘못된 이메일 형식입니다");
      valueStatus.push(FAILED);
    }
  }
}

function pwValidation(el) {
  if (!el.value) {
    if (el.name === "password") {
      setInvalid(el, pwError, "비밀번호를 입력해주세요");
    } else {
      setInvalid(el, pwCheckError, "비밀번호를 입력해주세요");
    }
    valueStatus.push(FAILED);
  } else if (el.value.length < 8) {
    if (el.name === "password") {
      setInvalid(el, pwError, "비밀번호를 8자 이상 입력해주세요");
    } else {
      setInvalid(el, pwCheckError, "비밀번호를 8자 이상 입력해주세요");
    }
    valueStatus.push(FAILED);
  } else {
    setValid(el, el.name === "password" ? pwError : pwCheckError);
    valueStatus.push(PASSED);
  }
}

function pwMatch() {
  if (pw.value && pwCheck.value) {
    if (pw.value === pwCheck.value) {
      setValid(pwCheck, pwCheckError);
      valueStatus.push(PASSED);
    } else {
      if (pwCheck.value.length > 8) {
        setInvalid(pwCheck, pwCheckError, "비밀번호가 일치하지 않습니다");
      }
      valueStatus.push(FAILED);
    }
  }
  buttonActivation();
  //비밀번호 일치 확인
}

function buttonActivation() {
  if (!valueStatus.includes(FAILED)) {
    form.submit();
    if (!pwCheck) location.href = "items.html";
    else location.href = "login.html";
  }
  //버튼 활성화 및 페이지 이동
}

// 이벤트 리스너
input.forEach((el) => {
  el.addEventListener("focusout", valueCheck);
  el.addEventListener("focusin", (e) => {
    if (e.target.classList.contains("js-error")) {
      rewriteValue(e);
    }
  });
  el.addEventListener("change", valueCheck);
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  valueValidation();
});
