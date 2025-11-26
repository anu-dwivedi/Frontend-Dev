const images = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

images.forEach(img => img.addEventListener('click', () => {
  modal.style.display = 'block';
  modalImg.src = img.src; // or img.dataset.largeSrc if using small/large images
}));

modal.addEventListener('click', () => modal.style.display = 'none');
modalImg.addEventListener('click', (e) => e.stopPropagation());
