(function () {
  'use strict';

  var panels = document.querySelectorAll('.panel');
  var navLinks = document.querySelectorAll('.menu__link');
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  var goToForm = document.querySelector('.go-to-form');
  var backHome = document.querySelector('.back_home');
  var yearEl = document.getElementById('year');

  function showPanel(id) {
    panels.forEach(function (p) { p.classList.remove('panel--active'); });
    var target = document.getElementById(id);
    if (target) {
      target.classList.add('panel--active');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function closeMenu() {
    if (menu) menu.classList.remove('is-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('data-target');
      if (targetId) {
        e.preventDefault();
        showPanel(targetId);
      }
      closeMenu();
    });
  });

  if (goToForm) {
    goToForm.addEventListener('click', function () { showPanel('form'); });
  }
  if (backHome) {
    backHome.addEventListener('click', function () { showPanel('home'); });
  }

  if (burger && menu) {
    burger.addEventListener('click', function () {
      if (window.innerWidth >= 768) return;
      var open = menu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('no-scroll', open);
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
