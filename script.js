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

burger.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});