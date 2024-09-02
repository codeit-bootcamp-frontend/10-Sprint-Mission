import {
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordCheck,
  handleSubmitButton,
  togglePasswordVisibility,
} from "./auth.js";

const $emailInput = document.querySelector("#email");
const $emailContainer = document.querySelector(".email-container");
const $emailValidationMessage = $emailContainer.querySelector(
  ".validation-message"
);

const $nicknameInput = document.querySelector("#nickname");
const $nicknameContainer = document.querySelector(".nickname-container");
const $nicknameValidationMessage = $nicknameContainer.querySelector(
  ".validation-message"
);

const $passwordInput = document.querySelector("#password");
const $passwordContainer = document.querySelector(".password-container");
const $passwordValidationMessage = $passwordContainer.querySelector(
  ".validation-message"
);

const $passwordCheckInput = document.querySelector("#password-check");
const $passwordCheckContainer = document.querySelector(
  ".password-check-container"
);
const $passwordCheckValidationMessage = $passwordCheckContainer.querySelector(
  ".validation-message"
);

const $submitButton = document.querySelector(".auth-form > button");
const $passwordVisibilities = document.querySelectorAll(".btn-eye");

$emailInput.addEventListener("focusout", () =>
  validateEmail($emailInput, $emailValidationMessage)
);

$nicknameInput.addEventListener("focusout", () =>
  validateNickname($nicknameInput, $nicknameValidationMessage)
);

$passwordInput.addEventListener("focusout", () => {
  validatePassword($passwordInput, $passwordValidationMessage);
  validatePasswordCheck(
    $passwordCheckInput,
    $passwordCheckValidationMessage,
    $passwordInput.value
  );
});

$passwordCheckInput.addEventListener("focusout", () =>
  validatePasswordCheck(
    $passwordCheckInput,
    $passwordCheckValidationMessage,
    $passwordInput.value
  )
);

$submitButton.addEventListener("click", (event) =>
  handleSubmitButton(event, "./login")
);

$passwordVisibilities.forEach(($passwordVisibility) =>
  $passwordVisibility.addEventListener("click", togglePasswordVisibility)
);
