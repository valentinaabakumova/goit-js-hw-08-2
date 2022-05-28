// import { throttle } from 'lodash';
// var throttle = require('lodash.throttle');
var throttle = require('lodash.throttle');

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const label = document.querySelector('label');

function formValue() {
  const value = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(value));
}
form.addEventListener('input', formValue);

function formOutput() {
  const getOutput = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.textContent = getOutput.email;
  message.textContent = getOutput.message;
}

formOutput();

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  form.reset();
  localStorage.removeItem('feedback-form-state');
  //   message.textContent = '';
  console.log(localStorage.getItem('feedback-form-state'));
}
