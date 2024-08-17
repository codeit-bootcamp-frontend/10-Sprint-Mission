document.addEventListener("click", function(event) {
  if (event.target.closest(".toggle-password")) {
    const toggle = event.target.closest(".toggle-password");
    const passwordField = toggle.previousElementSibling;
    const icon = toggle.querySelector("i");

    const isPassword = passwordField.type === "password";
    passwordField.type = isPassword ? "text" : "password";

    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  }
});


document.querySelectorAll("form").forEach(function(form) {
  form.addEventListener("input", function() {
    const inputs = form.querySelectorAll("input");
    const submitButton = form.querySelector("button");
    
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");

    if (allFilled) {
      submitButton.classList.add("button-on");
      submitButton.classList.remove("button-off");
    } else {
      submitButton.classList.add("button-off");
      submitButton.classList.remove("button-on");
    }
  });
});