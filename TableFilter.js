const search = document.getElementById('searchInput');
const rows = document.querySelectorAll('#studentTable tbody tr');
const noResultMsg = document.getElementById('noResults');

search.addEventListener('input', () => {
  let found = false;
  rows.forEach(row => {
    const match = row.textContent.toLowerCase().includes(search.value.toLowerCase());
    row.style.display = match ? '' : 'none';
    if (match) found = true;
  });
  noResultMsg.style.display = found ? 'none' : 'block';
});
