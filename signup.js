const emailForm = document.getElementById("email");
const nickForm = document.getElementById("nickname");
const pwdForm = document.getElementById("password");
const pwdConfirmForm = document.getElementById("passwordConfirm");


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
nickForm.addEventListener("focusout",(event) => {
  var nickValue=nickForm.value;
  if(nickValue == '') {
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
pwdConfirmForm.addEventListener("focusout",(event) => {
  var pwdValue=pwdForm.value;
  var pwdConfirmValue=pwdConfirmForm.value;
  if(pwdValue!=pwdConfirmValue) {
    event.target.style.border='1px solid var(--red)';
    //todo: print error message
  }
  else {
    event.target.style.border='0';
  }
})