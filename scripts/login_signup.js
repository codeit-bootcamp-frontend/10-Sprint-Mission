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
      icon.alt = "비밀번호 보이기";
    }
  });
});
