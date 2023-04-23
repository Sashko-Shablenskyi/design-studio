// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

const menuLink = document.querySelectorAll('.header__menu-link');

menuLink.forEach((e) => {
  e.addEventListener('click', () => {
    document.documentElement.classList.remove('menu-open');
  });
});
