import {
  validateEmail,
  validatePassword,
  handleSubmitButton,
  togglePasswordVisibility,
} from "./auth.js";

const $emailInput = document.querySelector("#email");
const $emailContainer = document.querySelector(".email-container");
const $emailValidationMessage = $emailContainer.querySelector(
  ".validation-message"
);

const $passwordInput = document.querySelector("#password");
const $passwordContainer = document.querySelector(".password-container");
const $passwordValidationMessage = $passwordContainer.querySelector(
  ".validation-message"
);

const $submitButton = document.querySelector(".auth-form > button");
const $passwordVisibility = document.querySelector(".btn-eye");

$emailInput.addEventListener("focusout", () =>
  validateEmail($emailInput, $emailValidationMessage)
);

$passwordInput.addEventListener("focusout", () =>
  validatePassword($passwordInput, $passwordValidationMessage)
);

$submitButton.addEventListener("click", (event) =>
  handleSubmitButton(event, "./items")
);

$passwordVisibility.addEventListener("click", togglePasswordVisibility);
