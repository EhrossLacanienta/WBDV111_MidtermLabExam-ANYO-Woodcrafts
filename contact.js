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

/* ======================
   UTIL: CLEAR ERRORS
====================== */
function clearAllErrors() {
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.querySelectorAll("input, textarea").forEach(el => el.classList.remove("error-border"));
}

/* ======================
   VALIDATIONS
====================== */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPHNumber(number) {
  return /^09\d{9}$/.test(number); // 09 + 9 digits = 11 total
}

/* ======================
   INPUT RULES
====================== */

// NAME (no numbers)
nameInput.addEventListener("input", () => {
  nameInput.value = nameInput.value.replace(/[0-9]/g, "");
});

// PHONE (numbers only)
phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
});

/* ======================
   SUBMIT VALIDATION
====================== */
form.addEventListener("submit", function(e) {
  e.preventDefault();

  clearAllErrors();
  let valid = true;

  // NAME
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    nameInput.classList.add("error-border");
    valid = false;
  }

  // PHONE (PH STRICT)
  if (phoneInput.value.trim() === "") {
    phoneError.textContent = "Contact number is required";
    phoneInput.classList.add("error-border");
    valid = false;
  } 
  else if (!isValidPHNumber(phoneInput.value)) {
    phoneError.textContent = "Invalid PH number (must start with 09 and be 11 digits)";
    phoneInput.classList.add("error-border");
    valid = false;
  }

  // EMAIL (SUBMIT ONLY — NO REALTIME)
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    emailInput.classList.add("error-border");
    valid = false;
  } 
  else if (!emailInput.value.includes("@")) {
    emailError.textContent = "Email must contain @";
    emailInput.classList.add("error-border");
    valid = false;
  }
  else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Invalid email format (example: name@gmail.com)";
    emailInput.classList.add("error-border");
    valid = false;
  }

  // MESSAGE
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    messageInput.classList.add("error-border");
    valid = false;
  }

  // SUCCESS
  if (valid) {
    popup.classList.add("show");
    form.reset();
  }
});

/* ======================
   POPUP CLOSE
====================== */
function closePopup() {
  popup.classList.remove("show");
}   
