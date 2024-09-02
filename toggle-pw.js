export const pw = document.querySelector(".js-pw");
const pwIcon = document.querySelector(".js-pw-icon");

const hidden = "/images/icon/pw-hidden.png";
const view = "/images/icon/pw-view.png";

function toggleIcon(e) {
  if (pw.type === "password") {
    pw.type = "text";
    pwIcon.src = view;
    pwIcon.alt = "비밀번호 보기 버튼";
    pw.focus();
  } else {
    pw.type = "password";
    pwIcon.src = hidden;
    pwIcon.alt = "비밀번호 숨기기 버튼";
    pw.focus();
  }
}

pwIcon.addEventListener("click", toggleIcon);
