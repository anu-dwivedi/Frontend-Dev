// Validation functions for student registration form fields

function validateName(name) {
  return /^[A-Za-z]+$/.test(name);
}

function validateEmail(email) {
  return /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email);
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}

function validatePassword(password) {
  // Must contain at least 1 uppercase letter, 1 number, 1 special character
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{1,}$/.test(password);
}

// Form event handlers (to be connected to form inputs)
// Add red border + error message if invalid, green border if valid
