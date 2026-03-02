(function () {
  'use strict';

  var burger = document.querySelector('.burger');
  var menuMobile = document.getElementById('menu-mobile');
  var yearEl = document.getElementById('year');

  function openMenu() {
    if (!menuMobile) return;
    menuMobile.classList.add('is-open');
    menuMobile.setAttribute('aria-hidden', 'false');
    if (burger) burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    if (!menuMobile) return;
    menuMobile.classList.remove('is-open');
    menuMobile.setAttribute('aria-hidden', 'true');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }

  function toggleMenu() {
    if (window.innerWidth >= 768) return;
    if (menuMobile && menuMobile.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (burger && menuMobile) {
    burger.addEventListener('click', toggleMenu);
  }

  if (menuMobile) {
    var links = menuMobile.querySelectorAll('.menu__link');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', closeMenu);
    }
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
