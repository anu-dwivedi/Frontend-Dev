// Simplified selector: one "step" div per step, visible one at a time
let step = 1;
const steps = [document.getElementById('step1'), document.getElementById('step2'), document.getElementById('step3'), document.getElementById('summary')];
const nextBtns = document.querySelectorAll('.next');
const backBtns = document.querySelectorAll('.back');
const inputs = [document.getElementById('name'), document.getElementById('email'), document.getElementById('password')];

function showStep(s) {
  steps.forEach((el, i) => el.style.display = i === s - 1 ? 'block' : 'none');
}

showStep(step);

nextBtns.forEach(btn => btn.addEventListener('click', () => {
  if (step === 1 && !inputs[0].value.trim()) return alert('Name required.');
  if (step === 2 && !/^[\w\-.]+@[\w\-]+\.[a-zA-Z]{2,}$/.test(inputs[1].value.trim())) return alert('Valid email required.');
  if (step === 3 && inputs[2].value.trim().length < 6) return alert('Password min 6 chars.');
  step++;
  if (step === 4) {
    steps[3].innerHTML = `<h2>Summary</h2>
      <p>Name: ${inputs[0].value}</p>
      <p>Email: ${inputs[1].value}</p>
      <p>Password: ${inputs[2].value}</p>`;
  }
  showStep(step);
}));
backBtns.forEach(btn => btn.addEventListener('click', () => {
  if (step > 1) step--;
  showStep(step);
}));
