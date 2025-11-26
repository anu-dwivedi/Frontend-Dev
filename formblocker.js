const form = document.getElementById('userForm');
const nameInp = document.getElementById('formName');
const emailInp = document.getElementById('formEmail');
const passInp = document.getElementById('formPassword');
const errName = document.getElementById('errorName');
const errEmail = document.getElementById('errorEmail');
const errPass = document.getElementById('errorPassword');
const status = document.getElementById('formStatus');

form.addEventListener('submit', e => {
  let valid = true;
  errName.textContent = errEmail.textContent = errPass.textContent = '';
  if (!nameInp.value.trim()) { errName.textContent = 'Name required'; valid = false; }
  if (!emailInp.value.includes('@')) { errEmail.textContent = 'Valid email required'; valid = false; }
  if (passInp.value.length < 6) { errPass.textContent = 'Password min 6 chars'; valid = false; }
  if (!valid) e.preventDefault();
  else {
    e.preventDefault();
    status.textContent = 'Form Submitted Successfully';
  }
});
[nameInp, emailInp, passInp].forEach(inp => inp.addEventListener('input', () => {
  document.getElementById(`error${inp.id.slice(4)}`).textContent = '';
  status.textContent = '';
}));
