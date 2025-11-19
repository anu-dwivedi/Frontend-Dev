function validateUsername(username) {
  return username.length >= 5;
}

function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password);
}

function validateLogin(username, password) {
  const errors = [];
  if (!validateUsername(username)) errors.push('Username must be at least 5 characters');
  if (!validatePassword(password)) errors.push('Password must be 8+ characters with number, uppercase, lowercase, special character');
  if (errors.length === 0) {
    return 'Login successful';
  }
  return errors;
}
