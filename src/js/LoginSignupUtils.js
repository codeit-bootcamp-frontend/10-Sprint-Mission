export const togglePasswordIcon = (passwordInput, passwordIcon) => {
  const type = passwordInput.type == 'password' ? 'text' : 'password';
  passwordInput.type = type;
  passwordIcon.style.backgroundImage = type == 
    'password' ? 
    "url('/src/assets/img/btn_visibility_off.svg')" : 
    "url('/src/assets/img/btn_visibility_on.svg')";
}

export const togglePasswordCheckIcon = () => {
  const type = passwordCheckInput.type == 'password' ? 'text' : 'password';
  passwordCheckInput.type = type;
  passwordCheckIcon.style.backgroundImage = type == 
  'password' ? 
  "url('/src/assets/img/btn_visibility_off.svg')" : 
  "url('/src/assets/img/btn_visibility_on.svg')";
}

export const showEmailErrorMessage = (emailInput, emailErrorMessage) => {
  if(emailInput.value == '') {
    emailErrorMessage.textContent = '이메일을 입력해주세요.';
    emailErrorMessage.style.display = 'block';
  } else if(!emailInput.value.includes('@')) {
    emailErrorMessage.textContent = '잘못된 이메일 형식입니다.';
    emailErrorMessage.style.display = 'block';
  }
}

export const showNicknameErrorMessage = (nicknameInput, nicknameErrorMessage) => {
  if(nicknameInput.value == '') {
    nicknameErrorMessage.textContent = '닉네임을 입력해주세요.';
    nicknameErrorMessage.style.display = 'block';
  }
}

export const showPasswordErrorMessage = (passwordInput, passwordErrorMessage) => {
  if(passwordInput.value == '') {
    passwordErrorMessage.textContent = '비밀번호를 입력해주세요.';
    passwordErrorMessage.style.display = 'block';
  } else if(passwordInput.value.length < 8) {
    passwordErrorMessage.textContent = '비밀번호는 8자 이상 입력해주세요.';
    passwordErrorMessage.style.display = 'block';
  }
}

export const showPasswordCheckErrorMessage = (passwordInput, passwordCheckInput, passwordCheckErrorMessage) => {
  if(passwordCheckInput.value !== passwordInput.value) {
    passwordCheckErrorMessage.textContent = '비밀번호가 일치하지 않습니다.';
    passwordCheckErrorMessage.style.display = 'block';
  }
}

export const hideEmailErrorMessage = (emailErrorMessage) => {
  emailErrorMessage.style.display = 'none';
}

export const hideNicknameErrorMessage = (nicknameErrorMessage) => {
  nicknameErrorMessage.style.display = 'none';
}

export const hidePasswordErrorMessage = (passwordErrorMessage) => {
  passwordErrorMessage.style.display = 'none';
}

export const hidePasswordCheckErrorMessage = (passwordCheckErrorMessage) => {
  passwordCheckErrorMessage.style.display = 'none';
}