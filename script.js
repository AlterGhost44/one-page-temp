//pseudo-SPA tab navigation
const tabs  = document.querySelectorAll('[data-tab]');
const sections = document.querySelectorAll('.hero');

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();

        const target = tab.dataset.tab;

        sections.forEach(section => {
            section.classList.remove('is-active');
        });

        document.querySelector(`.hero--${target}`).classList.add('is-active');
    });
});

//mobile menu toggle
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  burger.classList.toggle('is-active', isOpen);
  document.body.classList.toggle('no-scroll', isOpen);
});


menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    menu.classList.remove('is-open');
    burger.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  });
});
