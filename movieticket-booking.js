class FormBuilder {
  constructor(fields) {
    this.fields = fields;
    this.formElement = document.createElement('form');
  }

  buildForm() {
    this.formElement.innerHTML = '';
    this.fields.forEach(field => {
      const label = document.createElement('label');
      label.innerText = field.label;

      const input = document.createElement('input');
      input.type = field.type;
      input.name = field.label.toLowerCase().replace(/\s+/g, '');

      this.formElement.appendChild(label);
      this.formElement.appendChild(input);
      this.formElement.appendChild(document.createElement('br'));
    });

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.innerText = 'Submit';
    submitBtn.addEventListener('click', () => {
      console.log(this.getFormData());
    });

    this.formElement.appendChild(submitBtn);
    return this.formElement;
  }

  getFormData() {
    const data = {};
    this.fields.forEach(field => {
      data[field.label.toLowerCase().replace(/\s+/g, '')] = this.formElement.elements[field.label.toLowerCase().replace(/\s+/g, '')].value;
    });
    return data;
  }
}
