'use strict';

const arrItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${arrItem.length}`);

arrItem.forEach((item, i) => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(
    `Element: ${item.querySelector('ul').querySelectorAll('li').length}`
  );
});
