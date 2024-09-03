document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const verifypasswordInput = document.getElementById("verifypassword");
  const loginButton = document.getElementById("login_box");

  const emailError = document.getElementById("error_email");
  const passwordError = document.getElementById("error_password");
  const verifypasswordError = document.getElementById("error_verifypassword");

  // 이메일검증 이벤트
  if (emailInput) {
    emailInput.addEventListener("focusout", function () {
      const emilStatus = emailInput.value.trim();
      if (emilStatus === "") {
        showError(emailInput, emailError, "이메일을 입력해주세요.");
      } else if (!emailValidate(emilStatus)) {
        showError(emailInput, emailError, "잘못된 이메일 형식입니다.");
      } else {
        hideError(emailInput, emailError);
      }
      transLoginButton();
    });
  }
  // 비밀번호 검증 이벤트
  if (passwordInput) {
    passwordInput.addEventListener("focusout", function () {
      const passwordStatus = passwordInput.value.trim();
      if (passwordStatus === "") {
        showError(passwordInput, passwordError, "비밀번호를 입력해주세요.");
      } else if (passwordStatus.length < 8) {
        showError(
          passwordInput,
          passwordError,
          "비밀번호를 8자리 이상으로 입력해주세요."
        );
      } else {
        hideError(passwordInput, passwordError);
      }
      transLoginButton();
    });
  }
  // 비밀번호 확인 검증 이벤트
  if (verifypasswordInput) {
    verifypasswordInput.addEventListener("focusout", function () {
      const verifypasswordStatus = verifypasswordInput.value.trim();
      const passwordStatus = passwordInput.value.trim();

      if (verifypasswordStatus.length < 8) {
        showError(
          verifypasswordInput,
          verifypasswordError,
          "비밀번호를 8자리 이상으로 입력해주세요."
        );
      } else if (verifypasswordStatus !== passwordStatus) {
        showError(
          verifypasswordInput,
          verifypasswordError,
          "비밀번호가 일치하지 않습니다."
        );
      } else {
        hideError(verifypasswordInput, verifypasswordError);
      }
      transLoginButton();
    });
  }
  // 로그인버튼 활성/비활성
  function transLoginButton() {
    const emilStatus = emailInput.value.trim();
    const passwordStatus = passwordInput.value.trim();
    const verifypasswordStatus = verifypasswordInput.value.trim();
    if (
      emilStatus !== "" &&
      emailValidate(emilStatus) &&
      passwordStatus !== "" &&
      passwordStatus.length >= 8 &&
      verifypasswordStatus === passwordStatus
    ) {
      loginButton.classList.remove("disabled");
    } else {
      loginButton.classList.add("disabled");
    }
  }
  // 이메일 형식 검증
  function emailValidate(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
  // 에러 표시
  function showError(input, errorElement, message) {
    input.classList.add("input-error");
    errorElement.textContent = message;
    errorElement.style.visibility = "visible";
  }
  // 에러 숨김
  function hideError(input, errorElement) {
    input.classList.remove("input-error");
    errorElement.style.visibility = "hidden";
  }

  document.getElementById("login_box").addEventListener("click", function () {
    if (!loginButton.classList.contains("disabled"))
      window.location.href = "/items";
  });
});
