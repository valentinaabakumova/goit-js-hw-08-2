var throttle = require('lodash.throttle');

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('input', throttle(formValue, 500));
form.addEventListener('submit', onFormSubmit);
document.addEventListener('DOMContentLoaded', load);

function formValue() {
  const value = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(value));
}

function formOutput() {
  const getOutput = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = getOutput.email;
  message.textContent = getOutput.message;
}

function onFormSubmit(e) {
  e.preventDefault();
  formOutput();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  form.reset();
  message.textContent = '';
}

//  document.addEventListener('DOMContentLoaded', () => {
//    alert('DOM готов!');
//  });

function load() {
  //   console.log(localStorage.getItem('feedback-form-state'));
  if (localStorage.getItem('feedback-form-state')) {
    formOutput();
  }
}
