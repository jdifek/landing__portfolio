'use strict';

const page = document.documentElement;
const switcher = page.querySelector('.theme-switcher');


const topBarIconCall = page.querySelector('.top-bar__icon-call');
const topBarIconBurger = page.querySelector('.top-bar__icon-burger');
const topBarIconClose = page.querySelector('.top-bar__icon-close');
const headerLogo = page.querySelector('.header__logo');
const menuLogo = document.querySelector('.menu .header__logo');

const phoneIconDark = '/src/image/Icon-Phone-call-dark.png';
const phoneIconLight = '/src/image/Icon-Phone-call.png';

const burgerIconDark = '/src/image/Icon-Burger-menu-dark.png';
const burgerIconLight = '/src/image/Icon-Burger-menu.png';

const closeIconDark = '/src/image/Icon-Close-dark.png';
const closeIconLight = '/src/image/Icon-Close.png';

const headerLogoDark = '/src/image/header-logo-dark.png';
const headerLogoLight = '/src/image/header-logo.png';

switcher.addEventListener('click', () => {
  if(page.classList.contains('page--dark')) {
    page.classList.remove('page--dark');
    switcher.classList.remove('switcher--dark');
    topBarIconCall.src = phoneIconLight;
    topBarIconBurger.src = burgerIconLight;
    topBarIconClose.src = closeIconLight;
    headerLogo.src = headerLogoLight;
    menuLogo.src = headerLogoLight;
  } else {
    page.classList.add('page--dark');
    switcher.classList.add('switcher--dark');
    topBarIconCall.src = phoneIconDark;
    topBarIconBurger.src = burgerIconDark;
    topBarIconClose.src = closeIconDark;
    headerLogo.src = headerLogoDark;
    menuLogo.src = headerLogoDark;
  }
});
