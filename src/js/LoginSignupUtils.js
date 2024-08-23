/**
 * passwordInput의 type을 text와 password로 toggle하는 함수
 * @param {input} passwordInput - 비밀번호 input
 * @param {span} passwordIcon - 비밀번호 아이콘
 */
export const togglePasswordIcon = (passwordInput, passwordIcon) => {
  const type = passwordInput.type == 'password' ? 'text' : 'password';
  passwordInput.type = type;
  passwordIcon.style.backgroundImage =
    type ==
      'password' ?
      "url('/src/assets/img/btn_visibility_off.svg')" :
      "url('/src/assets/img/btn_visibility_on.svg')";
}

/**
 * passwordCheckInput의 type을 text와 password로 toggle하는 함수
 * @param {input} passwordCheckInput - 비밀번호 확인 input
 * @param {span} passwordCheckIcon - 비밀번호 확인 아이콘
 */
export const togglePasswordCheckIcon = (passwordCheckInput, passwordCheckIcon) => {
  const type = passwordCheckInput.type == 'password' ? 'text' : 'password';
  passwordCheckInput.type = type;
  passwordCheckIcon.style.backgroundImage = 
    type ==
      'password' ?
      "url('/src/assets/img/btn_visibility_off.svg')" :
      "url('/src/assets/img/btn_visibility_on.svg')";
}

/**
 * emailInput의 value가 비어있거나 @를 포함하지 않을 때 에러메시지를 보여주는 함수
 * @param {input} emailInput - 이메일 input
 * @param {p} emailErrorMessage - 이메일 에러 메시지
 */
export const showEmailErrorMessage = (emailInput, emailErrorMessage) => {
  if (emailInput.value == '') {
    emailErrorMessage.textContent = '이메일을 입력해주세요.';
    emailErrorMessage.style.display = 'block';
  } else if (!emailInput.value.includes('@')) {
    emailErrorMessage.textContent = '잘못된 이메일 형식입니다.';
    emailErrorMessage.style.display = 'block';
  }
}

/**
 * nicknameInput의 value가 비어있을 때 에러메시지를 보여주는 함수
 * @param {input} nicknameInput - 닉네임 input
 * @param {p} nicknameErrorMessage - 닉네임 에러 메시지
 */
export const showNicknameErrorMessage = (nicknameInput, nicknameErrorMessage) => {
  if (nicknameInput.value == '') {
    nicknameErrorMessage.textContent = '닉네임을 입력해주세요.';
    nicknameErrorMessage.style.display = 'block';
  }
}

/**
 * passwordInput의 value가 비어있거나 8자 미만일 때 에러메시지를 보여주는 함수
 * @param {input} passwordInput - 비밀번호 input
 * @param {p} passwordErrorMessage - 비밀번호 에러 메시지
 */
export const showPasswordErrorMessage = (passwordInput, passwordErrorMessage) => {
  if (passwordInput.value == '') {
    passwordErrorMessage.textContent = '비밀번호를 입력해주세요.';
    passwordErrorMessage.style.display = 'block';
  } else if (passwordInput.value.length < 8) {
    passwordErrorMessage.textContent = '비밀번호는 8자 이상 입력해주세요.';
    passwordErrorMessage.style.display = 'block';
  }
}

/** 
 * passwordCheckInput의 value가 passwordInput의 value와 다를 때 에러메시지를 보여주는 함수
 * @param {input} passwordInput - 비밀번호 input
 * @param {input} passwordCheckInput - 비밀번호 확인 input
 * @param {p} passwordCheckErrorMessage - 비밀번호 확인 에러 메시지
 */
export const showPasswordCheckErrorMessage = (passwordInput, passwordCheckInput, passwordCheckErrorMessage) => {
  if (passwordCheckInput.value !== passwordInput.value) {
    passwordCheckErrorMessage.textContent = '비밀번호가 일치하지 않습니다.';
    passwordCheckErrorMessage.style.display = 'block';
  }
}


/**
 * emailErrorMessage를 숨기는 함수
 * @param {p} emailErrorMessage - 이메일 에러 메시지 
 */
export const hideEmailErrorMessage = (emailErrorMessage) => {
  emailErrorMessage.style.display = 'none';
}

/**
 * nicknameErrorMessage를 숨기는 함수
 * @param {p} nicknameErrorMessage - 닉네임 에러 메시지 
 */
export const hideNicknameErrorMessage = (nicknameErrorMessage) => {
  nicknameErrorMessage.style.display = 'none';
}

/**
 * passwordErrorMessage를 숨기는 함수
 * @param {p} passwordErrorMessage - 비밀번호 에러 메시지
 */
export const hidePasswordErrorMessage = (passwordErrorMessage) => {
  passwordErrorMessage.style.display = 'none';
}

/**
 * passwordCheckErrorMessage를 숨기는 함수
 * @param {p} passwordCheckErrorMessage - 비밀번호 확인 에러 메시지
 */
export const hidePasswordCheckErrorMessage = (passwordCheckErrorMessage) => {
  passwordCheckErrorMessage.style.display = 'none';
}


/**
 * input 값들의 유효성을 검사하여 버튼을 클릭했을 때 페이지 이동을 결정하는 함수
 * @param {input} emailInput - 이메일 input
 * @param {input} passwordInput - 비밀번호 input
 * @param {p} emailErrorMessage - 이메일 에러 메시지
 * @param {p} passwordErrorMessage - 비밀번호 에러 메시지
 * @param  {...any} rest - 나머지 인자들
 * @returns {boolean} bubblingFlag - 이벤트 버블링 여부 및 페이지 이동 여부
 */
export const routeToItems = (emailInput, passwordInput, emailErrorMessage, passwordErrorMessage, ...rest) => {
  let bubblingFlag = false;

  if (emailInput.value == ''
    || passwordInput.value == ''
    || emailErrorMessage.style.display == 'block'
    || passwordErrorMessage.style.display == 'block') {
    bubblingFlag = true;
  }

  return bubblingFlag;
}

/**
 * input 값들의 유효성을 검사하여 버튼을 클릭했을 때 페이지 이동을 결정하는 함수
 * @param {input} emailInput - 이메일 input
 * @param {input} passwordInput - 비밀번호 input
 * @param {input} nicknameInput - 닉네임 input
 * @param {input} passwordCheckInput - 비밀번호 확인 input
 * @param {p} emailErrorMessage - 이메일 에러 메시지
 * @param {p} nicknameErrorMessage - 닉네임 에러 메시지
 * @param {p} passwordErrorMessage - 비밀번호 에러 메시지
 * @param {p} passwordCheckErrorMessage - 비밀번호 확인 에러 메시지
 * @param  {...any} rest - 나머지 인자들
 * @returns {boolean} bubblingFlag - 이벤트 버블링 여부 및 페이지 이동 여부
 */
export const routeToSignin = (emailInput, passwordInput, nicknameInput, passwordCheckInput, emailErrorMessage, nicknameErrorMessage, passwordErrorMessage, passwordCheckErrorMessage, ...rest) => {
  let bubblingFlag = false;

  if (emailInput.value == ''
    || passwordInput.value == ''
    || nicknameInput.value == ''
    || passwordCheckInput.value == ''
    || emailErrorMessage.style.display == 'block'
    || nicknameErrorMessage.style.display == 'block'
    || passwordErrorMessage.style.display == 'block'
    || passwordCheckErrorMessage.style.display == 'block') {
    bubblingFlag = true;
  }

  return bubblingFlag;
}