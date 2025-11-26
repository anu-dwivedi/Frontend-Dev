const box = document.getElementById('mouseBox');
const coords = document.getElementById('mouseCoords');
box.addEventListener('mousemove', e => {
  const rect = box.getBoundingClientRect();
  coords.textContent = `X: ${e.clientX - rect.left}, Y: ${e.clientY - rect.top}`;
});
box.addEventListener('dblclick', e => {
  const dot = document.createElement('div');
  dot.style.position = 'absolute';
  dot.style.width = '8px';
  dot.style.height = '8px';
  dot.style.background = 'red';
  dot.style.borderRadius = '50%';
  dot.style.left = `${e.clientX - box.getBoundingClientRect().left - 4}px`;
  dot.style.top = `${e.clientY - box.getBoundingClientRect().top - 4}px`;
  box.appendChild(dot);
});
box.addEventListener('mouseleave', () => {
  coords.textContent = 'X: -, Y: -';
});