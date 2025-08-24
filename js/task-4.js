'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', formListener);

function formListener(event) {
  event.preventDefault();

  const elem = event.target.elements;

  if (elem.email.value.trim() === '' || elem.password.value.trim() === '') {
    alert("'All form fields must be filled in'");
  } else {
    const info = {
      email: elem.email.value.trim(),
      password: elem.password.value.trim(),
    };
    event.target.reset();
    console.log(info);
  }
}
