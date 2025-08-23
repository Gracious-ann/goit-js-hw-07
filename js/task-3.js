'use strict';

const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

const fooInput = function (event) {
  const value = event.target.value.trim();
  //   text.textContent = value;
  //   console.log(value);
  text.textContent = value !== '' ? value : 'Anonymous';
};

input.addEventListener('input', fooInput);

// console.log(value);
