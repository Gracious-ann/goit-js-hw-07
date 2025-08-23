'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', formListener);

function formListener(event) {
  event.preventDefault();

  const elem = event.target.elements;

  const info = {
    email: elem.email.value.trim(),
    passwords: elem.password.value.trim(),
  };

  if (info.email === '' || info.passwords === '') {
    alert("'All form fields must be filled in'");
  }
  event.target.reset();
}
