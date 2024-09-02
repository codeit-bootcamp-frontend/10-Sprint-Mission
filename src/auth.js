const validationMessage = {
  requiredEmail: "이메일을 입력해주세요",
  invalidEmail: "잘못된 이메일 형식입니다.",
  requiredPassword: "비밀번호를 입력해주세요.",
  weekPassword: "비밀번호를 8자 이상 입력해주세요.",
  mismatchedPassword: "비밀번호가 일치하지 않습니다.",
  requiredNickname: "닉네임을 입력해주세요.",
};

const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const showMessage = (message, messageElement, inputElement) => {
  messageElement.textContent = message;
  messageElement.style.display = "inline-block";
  inputElement.parentNode.classList.add("validation-focus");
  toggleButtonActive();
};

const hideMessage = (messageElement, inputElement) => {
  messageElement.style.display = "none";
  inputElement.parentNode.classList.remove("validation-focus");
  toggleButtonActive();
};

const isFormComplete = () => {
  const existValiation = document.querySelector(".validation-focus");
  const fields = [...document.querySelectorAll("input")];
  const allCompleted = fields.every((field) => field.value.trim() !== "");

  return allCompleted && !existValiation;
};

const toggleButtonActive = () => {
  const $submitButton = document.querySelector(".auth-form > button");

  if (isFormComplete()) {
    $submitButton.classList.add("active");
    $submitButton.disabled = false;
    return;
  }

  $submitButton.classList.remove("active");
  $submitButton.disabled = true;
};

export const togglePasswordVisibility = (event) => {
  const $passwordInput = event.target.parentNode.querySelector("input");

  if (event.target.classList.contains("show")) {
    event.target.classList.remove("show");
    $passwordInput.type = "password";
    return;
  }

  event.target.classList.add("show");
  $passwordInput.type = "text";
};

export const validateEmail = (inputElement, messageElement) => {
  const email = inputElement.value.trim();

  if (email === "") {
    showMessage(validationMessage.requiredEmail, messageElement, inputElement);
    return;
  }

  if (!isValidEmail(email)) {
    showMessage(validationMessage.invalidEmail, messageElement, inputElement);
    return;
  }

  hideMessage(messageElement, inputElement);
};

export const validatePassword = (inputElement, messageElement) => {
  const password = inputElement.value;

  if (password === "") {
    showMessage(
      validationMessage.requiredPassword,
      messageElement,
      inputElement
    );
    return;
  }

  if (password.length < 8) {
    showMessage(validationMessage.weekPassword, messageElement, inputElement);
    return;
  }

  hideMessage(messageElement, inputElement);
};

export const validateNickname = (inputElement, messageElement) => {
  const nickname = inputElement.value.trim();

  if (nickname === "") {
    showMessage(
      validationMessage.requiredNickname,
      messageElement,
      inputElement
    );
    return;
  }

  hideMessage(messageElement, inputElement);
};

export const validatePasswordCheck = (
  inputElement,
  messageElement,
  confirmPassword
) => {
  const passwordCheck = inputElement.value;

  if (passwordCheck !== confirmPassword) {
    showMessage(
      validationMessage.mismatchedPassword,
      messageElement,
      inputElement
    );
    return;
  }

  hideMessage(messageElement, inputElement);
};

export const handleSubmitButton = (event, url) => {
  event.preventDefault();
  location.href = url;
};
