// ===== FORM ELEMENTS =====
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const popup = document.getElementById("successPopup");



/* ===== CLEAR ERRORS ===== */
function clearAllErrors() {

  document.querySelectorAll(".error").forEach(error => {
    error.textContent = "";
  });

  document.querySelectorAll("input, textarea").forEach(input => {
    input.classList.remove("error-border");
  });

}



/* ===== SHOW ERROR ===== */
function showError(input, errorElement, message) {

  errorElement.textContent = message;
  input.classList.add("error-border");

}



/* ===== VALIDATIONS ===== */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPHNumber(number) {
  return /^09\d{9}$/.test(number);
}



/* ===== INPUT RULES ===== */

// NAME → no numbers
nameInput.addEventListener("input", () => {
  nameInput.value = nameInput.value.replace(/[0-9]/g, "");
});

// PHONE → numbers only
phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
});



/* ===== FORM SUBMIT ===== */
form.addEventListener("submit", (e) => {

  e.preventDefault();

  clearAllErrors();

  let valid = true;

  // trimmed values
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();



  /* ===== NAME ===== */
  if (name === "") {
    showError(nameInput, nameError, "Name is required");
    valid = false;
  }



  /* ===== PHONE ===== */
  if (phone === "") {
    showError(phoneInput, phoneError, "Contact number is required");
    valid = false;

  } else if (!isValidPHNumber(phone)) {
    showError(
      phoneInput,
      phoneError,
      "Invalid PH number (must start with 09 and be 11 digits)"
    );
    valid = false;
  }



  /* ===== EMAIL ===== */
  if (email === "") {
    showError(emailInput, emailError, "Email is required");
    valid = false;

  } else if (!isValidEmail(email)) {
    showError(emailInput, emailError, "Please enter a valid email address");
    valid = false;
  }



  /* ===== MESSAGE ===== */
  if (message === "") {
    showError(messageInput, messageError, "Message is required");
    valid = false;
  }



  /* ===== SUCCESS ===== */
  if (valid) {
    popup.classList.add("show");
    form.reset();
  }

});



/* ===== CLOSE POPUP ===== */
function closePopup() {
  popup.classList.remove("show");
  nameInput.focus();
}
