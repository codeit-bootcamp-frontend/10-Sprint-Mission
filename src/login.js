import { validateEmail, validatePassword } from './auth.js';

const $emailInput = document.querySelector('#email');
const $emailContainer = document.querySelector('.email-container');
const $emailValidationMessage = $emailContainer.querySelector('.validation-message');

const $passwordInput = document.querySelector('#password');
const $passwordContainer = document.querySelector('.password-container');
const $passwordValidationMessage = $passwordContainer.querySelector('.validation-message');

$emailInput.addEventListener('focusout', () => validateEmail($emailInput, $emailValidationMessage));
$passwordInput.addEventListener('focusout', () => validatePassword($passwordInput, $passwordValidationMessage));
