'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function colorChange() {
  const body = document.querySelector('body');
  let color = (body.style.backgroundColor = getRandomHexColor());
  span.textContent = color;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', colorChange);
