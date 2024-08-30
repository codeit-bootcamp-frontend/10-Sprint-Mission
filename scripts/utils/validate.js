export function isValidEmail(email) {
  return /^[a-z0-9]+@[a-z]+\.[a-z]+$/i.test(email);
}

export function isValidPassword(password) {
  return /.{8,}/.test(password);
}
