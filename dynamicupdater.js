const user = { name: "John", email: "john@mail.com", age: 21 };

function buildForm() {
  const form = document.createElement('form');

  Object.keys(user).forEach(key => {
    const label = document.createElement('label');
    label.innerText = key;

    const input = document.createElement('input');
    input.name = key;
    input.value = user[key];

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(document.createElement('br'));
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'button';
  submitButton.innerText = 'Update';
  submitButton.onclick = () => {
    Object.keys(user).forEach(key => {
      user[key] = form.elements[key].value;
    });
    document.getElementById('userDetails').innerText = JSON.stringify(user, null, 2);
  };

  form.appendChild(submitButton);
  return form;
}
// Usage: append buildForm() result to DOM and have a div with id="userDetails" to show updated user object
