import { emailRegex, emptyEmailMsg, invalidEmailMsg, emptyNicknameMsg, invalidPasswordLengthMsg, passwordMinLength, passwordNotMatch } from './validationConstants.js';

// 이메일 검증 함수
export function getEmailErrorMsg(emailValue) {
  if (!emailValue) {
    return emptyEmailMsg;
  }
  if (!emailRegex.test(emailValue)) {
    return invalidEmailMsg;
  }
}

// 비밀번호 검증 함수
export function getPasswordErrorMsg(passwordValue) {
  if (!passwordValue || passwordValue.length < passwordMinLength) {
    return invalidPasswordLengthMsg;
  }
}

// 비밀번호 일치 검증 함수
export function getPasswordMatchErrorMsg(passwordValue, passwordMatchValue) {
  if (passwordValue !== passwordMatchValue) {
    return passwordNotMatch;
  }
}

// 닉네임 검증 함수
export function getNicknameErrorMsg(nicknameValue) {
  if (!nicknameValue) {
    return emptyNicknameMsg;
  }
}
