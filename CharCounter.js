const textarea = document.getElementById('textBox');
const counter = document.getElementById('charCounter');
const resetBtn = document.getElementById('resetBtn');
const maxChar = 100;

textarea.addEventListener('input', () => {
  let remaining = maxChar - textarea.value.length;
  counter.textContent = `Characters left: ${remaining}`;
  counter.style.color = remaining <= 20 ? (remaining <= 0 ? 'red' : 'orange') : 'inherit';
});

textarea.addEventListener('keydown', (e) => {
  if (textarea.value.length >= maxChar && e.key !== 'Backspace') {
    e.preventDefault();
  }
});

resetBtn.addEventListener('click', () => {
  textarea.value = '';
  counter.textContent = `Characters left: ${maxChar}`;
  counter.style.color = 'inherit';
});
