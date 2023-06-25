'use strict';

const form = document.querySelector('#form');

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu'
    ? document.body.classList.add('page__content--with-menu')
    : document.body.classList.remove('page__content--with-menu');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
