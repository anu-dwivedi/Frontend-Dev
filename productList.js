// Product List Manager (Add, Edit, Delete with Event Delegation)
const input = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const ul = document.getElementById('productList');

addBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if (!val) return;
  const li = document.createElement('li');
  li.innerHTML = `<span>${val}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>`;
  ul.appendChild(li);
  input.value = '';
});

ul.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    e.target.parentElement.remove();
  }
  if (e.target.className === 'edit') {
    const li = e.target.parentElement;
    const span = li.querySelector('span');
    const value = span.textContent;
    const inputEdit = document.createElement('input');
    inputEdit.value = value;
    span.replaceWith(inputEdit);
    inputEdit.focus();
    function save() {
      if (document.activeElement !== inputEdit) {
        const newSpan = document.createElement('span');
        newSpan.textContent = inputEdit.value;
        inputEdit.replaceWith(newSpan);
        document.removeEventListener('click', save);
      }
    }
    setTimeout(() => document.addEventListener('click', save));
  }
});
