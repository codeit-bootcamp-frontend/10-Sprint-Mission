const emailForm = document.getElementById("email");
const pwdForm = document.getElementById("password");



emailForm.addEventListener("focusout", (event) => {
  var emailValue=emailForm.value;
  if(emailValue == '') {
    event.target.style.border='1px solid var(--red)';
    //todo: print error message
  }
  else {
    event.target.style.border='0';
  }
})
pwdForm.addEventListener("focusout",(event) => {
  var pwdValue=pwdForm.value;
  if(pwdValue == '') {
    event.target.style.border='1px solid var(--red)';
    // todo: print error message
  }
  else if(pwdValue.length < 8 ) {
    event.target.style.border='1px solid var(--red)'; //todo: print error message
  }
  else {
    event.target.style.border='0';
  }
})